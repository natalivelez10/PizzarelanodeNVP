const admin = require("firebase-admin");
const serviceAccount = require("./pizzarela-florencia-firebase-adminsdk-y3d39-eca66970df.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pizzarela-florencia.firebaseio.com"
});

module.exports= admin;