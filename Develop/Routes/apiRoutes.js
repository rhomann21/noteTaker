const router = require("express").Router();
const path = require('path');
const fs = require('fs');
/* get the notes */
router.get('/notes', (req, res) => {
  fs.readFile(__dirname + './../db/db.json', (err,data)  => {
    res.json(JSON.parse(data));
  });
});
router.post('/notes', (req, res) => {
  fs.readFile(__dirname + './../db/db.json', (err,data)  => {
      /* convert json data to array */
      let notes = JSON.parse(data);
      let newNote = req.body;
      notes.push(newNote);
      /* use normal write file to save to db.json */
      fs.writeFile(__dirname + './../db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        console.log('Saved!');
      });
    });
    res.send('post sent');
});

// delete
router.delete("/notes/:id", (req, res) => {
  fs.readFile(__dirname + './../db/db.json', (err, data) => {
    let index = req.params.id;
    let delNote = JSON.parse(data)
    delNote.splice(index, 1)

    fs.writeFile(__dirname + './../db/db.json', JSON.stringify(mgr), (err) => {
      if (err) throw err;
      console.log("Deleted!")
    });
  });
});
module.exports = router;    