// import modules
const express = require("express");
const util = require("util");
const mysql = require("mysql");
const app = express();

app.use(express.json());

// set database name in variable
const databaseName = "testapp";

// 'Help function' will run with each route we use

function execute() {
  // database connection settings
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: databaseName
  });
  //****** change the 'password' and 'user' when you test the routs **********/

  // connect to database
  connection.connect(err => {
    if (err) throw err;
    console.log(`You are connected to ${databaseName} database`);
  });

  return util.promisify(connection.query.bind(connection));
}

const execQuery = execute();

// end points //

// get any table by name
async function getUsers(req, res) {
  try {
    await execQuery(`use ${databaseName}`);
    const selectedQuery = `select * from ${req.params.tableName}`;
    const result = await execQuery(selectedQuery);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({ Error: err });
  }
  res.end();
}

async function getUserById(req, res) {
  const { id, tableName } = req.params;
  try {
    await execQuery(`use ${databaseName}`);
    const selectedQuery = `select * from ${tableName} WHERE id = ${id}`;
    const user = await execQuery(selectedQuery);
    res.status(200).send(user);
  } catch (err) {
    res.status(404).send({ Error: err });
  }
  res.end();
}

// get 'production' or 'runtime' tables
app.get("/:tableName", getUsers);
app.get("/:tableName/:id", getUserById);

// backend port
const port = 6000;

// listening to port
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

// you can test/use those routes with postman or try them in your browser url
// Example:  http://localhost:6000/users and use it with out

// or //

// you can use them at the front and with out writhing 'http://localhost:6000/' ('it's already done with the settings')
