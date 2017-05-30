
/************************************
  * VARIABLES
  ************************************/

 var express = require("express"),
     request = require("request"),
     bodyParser = require("body-parser"),
     PORT = process.env.PORT || 3000,
     IP = process.env.IP,
     compression = require('compression'),
     app = express();


/**
 * VIEW ENGINE, DIRECTORIES
 */

/** Static Directory **/
 app.use(compression(),bodyParser.urlencoded({extended: true}), express.static("public"));

 /************************************
  * DATA
  ************************************/

 /************************************
  * ROUTES
  ************************************/

  /**
   * GET ROUTES
   */

   app.get("/*", function(req, res) {
     res.sendFile(__dirname + "/public/index.html");
   });



 /************************************
  * LISTENING PORT SETUP
  ************************************/
 app.listen(PORT, IP, function() {
  console.log("listening on port " + PORT);
});
