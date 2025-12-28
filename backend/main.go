package main

import (
	"log"
	"net/http"
	"os"

	"adderscript/handlers"
)

func main() {
	// Register handlers
	http.HandleFunc("/ws/presence", handlers.PresenceHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Println("WebSocket server running on :" + port)
	log.Println("Endpoint:")
	log.Println("  /ws/presence  - User presence tracking")
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
