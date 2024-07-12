const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
const clients = [];

wss.on('connection', (ws) => {
  clients.push(ws);
  console.log(`Client connected`);
  
// Set up ping-pong mechanism
  let pingTimeout;
  const pingInterval = setInterval(() => {
    ws.send('ping');
    pingTimeout = setTimeout(() => {
      console.log('Client did not respond to ping, disconnecting...');
      ws.terminate();
    }, 30000); // If client doesn't respond within 30 seconds, disconnect
  }, 30000); // Send ping every 30 seconds

  ws.on('message', (message) => {
    if (message === 'pong') {
      console.log('Received pong from client');
      clearTimeout(pingTimeout); // Clear the ping timeout
    } else {
      console.log(`Received message from client: ${message}`);
      // Broadcast the message to all connected clients
      wss.clients.forEach((client) => {
        if (client !== ws) {
          client.send(message);
        }
      });
    }
  });

  ws.on('close', () => {
    clearInterval(pingInterval); // Clear the ping interval
    clearTimeout(pingTimeout); // Clear the ping timeout
    console.log(`Client disconnected`);
  });
});
