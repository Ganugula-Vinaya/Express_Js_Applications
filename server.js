// server.js
import express from 'express';

const app = express();

// Step 4: Create an endpoint
app.get('/', (req, res) => {
  res.send('Hello, Express Server is Running!');
});

// Step 5: Listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
