package main

import (
	"log"
	"net/http"
	"os"
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
	connections         = make(map[*websocket.Conn]bool)
)

func broadcastUserCount() {
	connectedUsersMutex.Lock()
	count := connectedUsers
	connectedUsersMutex.Unlock()

	message := map[string]int{
		"users": count,
	}

	for connection := range connections {
		err := connection.WriteJSON(message)
		if err != nil {
			connection.Close()
			delete(connections, connection)
		}
	}
}

func websocketHandler(responseWriter http.ResponseWriter, request *http.Request) {
	connection, err := upgrader.Upgrade(responseWriter, request, nil)
	if err != nil {
		return
	}

	// Register connection
	connections[connection] = true

	connectedUsersMutex.Lock()
	connectedUsers++
	connectedUsersMutex.Unlock()

	broadcastUserCount()

	// Wait until client disconnects
	for {
		if _, _, err := connection.ReadMessage(); err != nil {
			break
		}
	}

	// Cleanup
	connection.Close()
	delete(connections, connection)

	connectedUsersMutex.Lock()
	connectedUsers--
	connectedUsersMutex.Unlock()

	broadcastUserCount()
}

func main() {
	http.HandleFunc("/ws", websocketHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Println("WebSocket server running on :" + port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
