import express from 'express';
import submitHandler from './api/submit.js';
import adminHandler from './api/admin.js';

const app = express();
app.use(express.json());

app.post('/api/submit', submitHandler);
app.post('/api/admin', adminHandler);

app.get('/', (req, res) => {
  res.send('✅ Ecocoin backend is live!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
