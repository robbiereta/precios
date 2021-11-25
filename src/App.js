import "./styles.css";
import { MDBDataTable } from "mdbreact";
export default function App() {
  const axios = require("axios");

  // Make a request for a user with a given ID
  axios
    .get("https://posserver2.herokuapp.com/precios")
    .then(function (response) {
      // handle success
      let res = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
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
        label: "Moto",
        field: "MOTO",
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
    rows: res
  };

  return (
    <div className="App">
      <h1>Kurazai</h1>
      <MDBDataTable striped bordered hover data={data} />
    </div>
  );
}
