
const mysql = require('mysql2');
const express = require('express'); // import express
const PORT = process.env.PORT || 3001; // add port destination.what is process.env.port.?
const app = express();              //Add the app expression

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // Connect to database
// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       // Your MySQL username,
//       user: 'root',
//       // Your MySQL password
//       password: 'poritoshi',
//       database: 'election'
//     },
//     console.log('Connected to the election database.')
//   );
// //=================================================================
//   db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
//   });

// // GET a single candidate=========================================================
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(row);
//   });

// //Create Query for Delete Operation
// db.query(`DELETE FROM candidates WHERE id=?`,1, (err,result)=> {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

  //==========================
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

  // Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

//listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });