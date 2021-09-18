//importing Packages
const express = require("express");
const cors = require("cors");

const router = require("./Router/index");
const sequelize = require("./dbconnection");


const app = express();

const host = "localhost";
const port = 2464;

//Cross Origin Resourse Sharing (CORS) to handle cors issue
app.use(cors());

//It will allow  all the services to hit my api
app.options('*', cors());

//in my api i am  passing the data in req body so my api need to read the from rreq body
app.use(express.json());

//sync your content with the server
//sync will create table (according different model and sync the data to db if it is not there in db)
//sunc will sync model structure an dcreate table
//sequelize.sync() method  to connect with db (like mongoose in mongodb)

sequelize.sync(); 
app.use('/', router); //if route is / then go the the router


app.listen(port, host, ()=>{
    console.log(`Server is running at ${host} : ${port} `);
});