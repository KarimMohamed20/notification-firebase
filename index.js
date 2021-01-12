const express = require("express");

const app = express();
const admin = require("firebase-admin");

const bodyParser = require("body-parser");
const cors = require("cors");

let port = process.env.PORT || 5000;

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());


var app = admin.initializeApp();

app.post("/notification", (req, res) => {
    var idToken = req.body.token;
    var receiverUserId = req.body.receiverUserId;
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log(uid)
      console.log(decodedToken.email)
    })
    .catch((error) => {
        console.log(error)
    });
});


app.listen(port,()=>{
    console.log("Server is running on PORT " + port)
})