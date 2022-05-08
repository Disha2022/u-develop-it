const express = require('express'); // import express
const PORT = process.env.PORT || 3001; // add port destination.what is process.env.port.?
const app = express();              //Add the app expression

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());













// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

//listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });