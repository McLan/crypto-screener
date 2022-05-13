import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import myJson from './data.json';

import Table from "./Table";
import "./App.css";


function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Currency",
        accessor: "show.name"
      },
      {
        Header: "Genre(s)",
        accessor: "show.genres",
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
      //const result1 = myJson;
      //setData(myJson.data)
      console.log(myJson.data)
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
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