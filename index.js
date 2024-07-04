const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
const clients = [];

wss.on('connection', (ws) => {
  clients.push(ws);
  console.log(`Client connected`);

  ws.on('message', (message) => {
    // Broadcast the message to all connected clients
    clients.forEach((otherClient) => {
      if (otherClient!== ws) {
        otherClient.send(message);
      }
    });
  });

  ws.on('close', () => {
    const index = clients.indexOf(ws);
    if (index!== -1) {
      clients.splice(index, 1);
    }
    console.log(`Client disconnected`);
  });
});