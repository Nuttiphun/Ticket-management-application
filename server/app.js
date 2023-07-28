const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const mysql = require('mysql2');
app.use(cors())

app.use(bodyParser.urlencoded({extended: true
}));
app.use(bodyParser.json());


const DB = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'nipa_ticket',
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control_aloow_Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})
app.get('/ticket', (req, res) => {
    DB.query('SELECT * FROM ticket order by updated_at', (error, results) => {
        if (error) {
            return res.status(500).json({ 
                msg: 'Error fetching ticket from the database',
                error: error.message
            });
        }
        return res.json(results);
    });
});

app.post('/ticket', (req, res) => {
    const sql = 'INSERT INTO ticket (title, description, contact_info, status) VALUES (?, ?, ?, ?)'
    const data = [req.body.title, req.body.description, req.body.contact_info, req.body.status]
    console.log(req.body)
    DB.query(sql, data, (error, results) => {
        if (error){
            return res.status(500).json({
                msg: "error insert into database",
                error: error.message
            })
        }
    })
    return res.status(200).json({
    msg: "data created on database",
})
})

// /ticket/1
app.put('/ticket/:id', (req, res) => {
    const ticketId = req.params.id;
    const { title, description, contact_info, status } = req.body;
  
    // Check if the required fields are provided in the request body
    if (!title || !description || !contact_info || !status) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    const sql = 'UPDATE ticket SET title=?, description=?, contact_info=?, status=? WHERE id=?';
    const data = [title, description, contact_info, status, ticketId];
  
    DB.query(sql, data, (error, results) => {
      if (error) {
        return res.status(500).json({
          msg: 'Error updating ticket in the database',
          error: error.message,
        });
      }
  
      // Check if any rows were affected by the update
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
  
      return res.status(200).json({
        msg: 'Ticket updated successfully',
      });
    });
  });
  
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});