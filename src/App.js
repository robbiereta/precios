import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./styles.css";
import { MDBDataTable } from "mdbreact";
import React, { useMemo, useState, useEffect } from "react";
export default function App() {
  const axios = require("axios");
  var res;
  async function getData() {
    // Make a request for a user with a given ID
    await axios
      .get("https://posserver2.herokuapp.com/precios")
      .then(function (response) {
        // handle success
        res = response.data;
        return res;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {});
  }
  var res2 = getData();
  console.log("res" + res2);

  //save axios  response to state
  const [data2, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://posserver2.herokuapp.com/precios");
      setData(result.data);
    })();
  }, []);

  const data = {
    columns: [
      {
        label: "Codigo",
        field: "Codigo",
        sort: "asc",
        width: 150
      },
      {
        label: "Descripcion",
        field: "Descripcion",
        sort: "asc",
        width: 150
      },
      {
        label: "Marca",
        field: "Marca",
        sort: "asc",
        width: 150
      },
      {
        label: "Moto",
        field: "MOTO",
        sort: "asc",
        width: 150
      },
      {
        label: "Existencia",
        field: "Existencia",
        sort: "asc",
        width: 150
      },
      {
        label: "Precio",
        field: "precio",
        sort: "asc",
        width: 150
      }
    ],
    rows: data2
  };

  return (
    <div className="App">
      <h1>Kurazai</h1>
      <MDBDataTable striped bordered hover data={data} />
    </div>
  );
}
