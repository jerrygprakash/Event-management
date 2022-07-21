const express = require('express')
const app = express();
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const port = process.env.PORT || 8081;

// Databse Connection
const connection = require('./formsdatbase');

    app.use(cors());

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public_html/', 'uploads'),
    filename: function (req, file, cb) {        
        // null as first argument means no error
        cb(null, Date.now() + '-' + file.originalname )
    }
})

app.post('/forms', async (req, res) => {	
	try {
		 // 'avatar' is the name of our file input field in the HTML form
		let upload = multer({ storage: storage}).single('avatar');
		
		upload(req, res, function(err) {
			// req.file contains information of uploaded file
			// req.body contains information of text fields

			if (!req.file) {
				return res.send('Please select an File to upload');
			}
			else if (err instanceof multer.MulterError) {
				return res.send(err);
			}
			else if (err) {
				return res.send(err);
			}
			
            const classifiedsadd = [ req.file.filename,"sample","sample"]
             const sql = "INSERT INTO forms (form_name,form_type,form_path) values(?,?,?)";
            connection.query(sql, classifiedsadd, (err, results) => {  if (err) throw err;
				res.json({ success: 1 })       

			});  
		});  
  } catch (err) {console.log(err)}
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))







