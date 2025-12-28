package handlers

import (
	"adderscript/types"
	"log"
	"net/http"
	"sync"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(request *http.Request) bool {
		return true
	},
}

var (
	connectedUsers      = 0
	connectedUsersMutex sync.Mutex
	presenceConnections = make(map[*websocket.Conn]bool)
)

func broadcastUserCount() {
	connectedUsersMutex.Lock()
	count := connectedUsers
	connectedUsersMutex.Unlock()

	message := types.PresenceMessage{
		Users: count,
	}

	for connection := range presenceConnections {
		err := connection.WriteJSON(message)
		if err != nil {
			log.Printf("Error broadcasting to connection: %v", err)
			connection.Close()
			delete(presenceConnections, connection)
		}
	}
}

func PresenceHandler(responseWriter http.ResponseWriter, request *http.Request) {
	connection, err := upgrader.Upgrade(responseWriter, request, nil)
	if err != nil {
		log.Printf("Error upgrading connection: %v", err)
		return
	}

	// Register connection
	presenceConnections[connection] = true

	connectedUsersMutex.Lock()
	connectedUsers++
	connectedUsersMutex.Unlock()

	log.Printf("User connected. Total users: %d", connectedUsers)

	broadcastUserCount()

	// Wait until client disconnects
	for {
		if _, _, err := connection.ReadMessage(); err != nil {
			break
		}
	}

	// Cleanup
	connection.Close()
	delete(presenceConnections, connection)

	connectedUsersMutex.Lock()
	connectedUsers--
	connectedUsersMutex.Unlock()

	log.Printf("User disconnected. Total users: %d", connectedUsers)

	broadcastUserCount()
}
