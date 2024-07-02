const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Handle incoming messages from clients
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      client.send(message);
    });
  });

  // Handle errors
  ws.on('error', (error) => {
    console.log('Error occurred');
    console.log(error);
  });

  // Handle client disconnections
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});