import React, { useEffect, useState } from "react";

// import components
import Information from "./components/information/Information";
import Table from "./components/table/Table";
import Spinner from "./components/spinner/Spinner";

const Machines = () => {
  // save data with using use State Hooks
  const [productionTable, setProductionTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // get data function from api or database
  const showData = async () => {
    // For backend: incase you want get data from database, and you could use postman to check that
    const database = "/production/total-production";
    // api link
    const api =
      "https://www.marviq.com/assessment/index.php?page=a&from=2018-01-07%2000:00:00";

    // server port 5000
    // React port 3000
    // to get data from database we need react port instead of server port
    const api2 = "http://localhost:3000/users";
    await fetch(api2)
      .then(response => response.json())
      .then(item => {
        console.log(item);
        setLoading(false);
        setProductionTable(item);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    showData();
  }, []);

  // in case there is no data
  if (loading) {
    return <Spinner />;
  }

  // if there is an error
  if (error) {
    return <div className="error">Oops something went wrong</div>;
  }


  const

  // in case there is data
  return (
    <div className="container">
      <div>{}</div>
      {productionTable.map((item, index) => {
        return <Information key={index} item={item} />;
      })}
      <div className="table">
        {productionTable.map((item, index) => {
          return <Table key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Machines;
