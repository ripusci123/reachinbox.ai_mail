const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dummy user data for authentication (replace with database logic)
const users = [
  { email: 'user@example.com', password: 'password' } // Example user
];

// JWT Secret Key (should be stored securely in environment variables in a real app)
const JWT_SECRET = 'your-secret-key';

// Login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Find user in the dummy user data
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Generate a JWT token
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ success: true, token });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

// DELETE route for deleting a message
app.delete('/api/onebox/:thread_id', async (req, res) => {
  const threadId = req.params.thread_id;

  try {
    const response = await axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`);
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error('Error deleting message:', error);
    if (error.response) {
      res.status(error.response.status).send(error.response.data);
    } else {
      res.status(500).send({ message: 'Internal Server Error' });
    }
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
