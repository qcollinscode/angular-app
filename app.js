/**
     QQQQQQQQQ              CCCCCCCCCCCCC        CCCCCCCCCCCCC     OOOOOOOOO     DDDDDDDDDDDDD        EEEEEEEEEEEEEEEEEEEEEE
   QQ:::::::::QQ         CCC::::::::::::C     CCC::::::::::::C   OO:::::::::OO   D::::::::::::DDD     E::::::::::::::::::::E
 QQ:::::::::::::QQ     CC:::::::::::::::C   CC:::::::::::::::C OO:::::::::::::OO D:::::::::::::::DD   E::::::::::::::::::::E
Q:::::::QQQ:::::::Q   C:::::CCCCCCCC::::C  C:::::CCCCCCCC::::CO:::::::OOO:::::::ODDD:::::DDDDD:::::D  EE::::::EEEEEEEEE::::E
Q::::::O   Q::::::Q  C:::::C       CCCCCC C:::::C       CCCCCCO::::::O   O::::::O  D:::::D    D:::::D   E:::::E       EEEEEE
Q:::::O     Q:::::Q C:::::C              C:::::C              O:::::O     O:::::O  D:::::D     D:::::D  E:::::E
Q:::::O     Q:::::Q C:::::C              C:::::C              O:::::O     O:::::O  D:::::D     D:::::D  E::::::EEEEEEEEEE
Q:::::O     Q:::::Q C:::::C              C:::::C              O:::::O     O:::::O  D:::::D     D:::::D  E:::::::::::::::E
Q:::::O     Q:::::Q C:::::C              C:::::C              O:::::O     O:::::O  D:::::D     D:::::D  E:::::::::::::::E
Q:::::O     Q:::::Q C:::::C              C:::::C              O:::::O     O:::::O  D:::::D     D:::::D  E::::::EEEEEEEEEE
Q:::::O  QQQQ:::::Q C:::::C              C:::::C              O:::::O     O:::::O  D:::::D     D:::::D  E:::::E
Q::::::O Q::::::::Q  C:::::C       CCCCCC C:::::C       CCCCCCO::::::O   O::::::O  D:::::D    D:::::D   E:::::E       EEEEEE
Q:::::::QQ::::::::Q   C:::::CCCCCCCC::::C  C:::::CCCCCCCC::::CO:::::::OOO:::::::ODDD:::::DDDDD:::::D  EE::::::EEEEEEEE:::::E
 QQ::::::::::::::Q     CC:::::::::::::::C   CC:::::::::::::::C OO:::::::::::::OO D:::::::::::::::DD   E::::::::::::::::::::E
   QQ:::::::::::Q        CCC::::::::::::C     CCC::::::::::::C   OO:::::::::OO   D::::::::::::DDD     E::::::::::::::::::::E
     QQQQQQQQ::::QQ         CCCCCCCCCCCCC        CCCCCCCCCCCCC     OOOOOOOOO     DDDDDDDDDDDDD        EEEEEEEEEEEEEEEEEEEEEE
             Q:::::Q
              QQQQQQ
**/

/************************************
  * VARIABLES
  ************************************/

 var express = require("express"),
     request = require("request"),
     bodyParser = require("body-parser"),
     PORT = process.env.PORT || 3000,
     IP = process.env.IP,
     app = express();


/**
 * VIEW ENGINE, DIRECTORIES
 */

/** Static Directory **/
 app.use(bodyParser.urlencoded({extended: true}), express.static("public"));

/** View Engine **/
//  app.set("view engine", "ejs");

 /************************************
  * DATA
  ************************************/

 /************************************
  * ROUTES
  ************************************/

  /**
   * GET ROUTES
   */

   /** Home **/
  //  app.get("/", function(req, res) {
  //    res.render("home");
  //  });

 /************************************
  * LISTENING PORT SETUP
  ************************************/
 app.listen(PORT, IP, function() {
  console.log("listening on port " + PORT);
});
