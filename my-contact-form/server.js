const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add cors for development

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

// Allow CORS requests from your frontend development server (replace with your origin)
app.use(cors({ origin: 'http://localhost:3001' })); // Adjust origin as needed

// Parse incoming JSON data
app.use(bodyParser.json());
app.use(express.static('public'))
// API route to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Process the data (replace with your logic)
  console.log('Received contact form submission:', { name, email, subject, message });

  // Send an email notification (optional)
  // You'll need an email sending library (e.g., nodemailer) and configure it

  // Store data in database (optional)
  // You'll need a database connection and logic to store the data

  // Send a success response
  res.json({ message: 'Form submitted successfully!' });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

// ... your existing code ...

// Route to handle GET requests to the root path (optional)
app.get('/', (req, res) => {
    res.send('Hello from the server!'); // Send a simple response
  });
  