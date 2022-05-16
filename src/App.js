import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import myJson from './data.json';

import Table from "./Table";
import "./App.css";


function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Symbol",
        accessor: "symbol"
      },
      {
        Header: "Price",
        accessor: "quote.USD.price",
      },
      {
        Header: "Status",
        accessor: "show.status"
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      var test = myJson.data
      console.log(test)
      var myTab = [];
      for (var i in test) {
        myTab.push(test[i]);
      }
      console.log(myTab);
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      //setData(result.data);
      setData(myTab);
      console.log(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;