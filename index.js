import express from 'express';
import helloRouter from './hello.js'; // Import the hello.js router

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the helloRouter at /api/hello
app.use('/api/hello', helloRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});