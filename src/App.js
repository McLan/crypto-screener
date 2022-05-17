import React, { useMemo, useState, useEffect } from "react";
//import axios from "axios";
import myJson from './data.json';

import Table from "./Table";
import "./App.css";

const cryptoArray = {
  ZEN:{owned: 84, entryPrice: 16},
  FLUX:{owned: 2000, entryPrice: 0.03},
  EGLD:{owned: 12, entryPrice: 116},
  CRO:{owned: 2000, entryPrice: 0.15},
  DIVI:{owned: 45000, entryPrice: 0.0144},
  THETA:{owned: 113, entryPrice: 5.3},
  SAND:{owned: 96.4, entryPrice: 6.22},
  CKB:{owned: 23800, entryPrice: 0.02521},
  UTK:{owned: 747, entryPrice: 0.4},
  MINA:{owned: 72.4, entryPrice: 4.14},
  ANKR:{owned: 1960, entryPrice: 0.153},
  MANA:{owned: 66, entryPrice: 4.5454},
  AXS:{owned: 2.1715, entryPrice: 138.25},
  DOT:{owned: 30, entryPrice: 10},
  ITHEUM:{owned: 3867, entryPrice: 0.04}};

function App() {
  const columns = useMemo(
    () => [
      {Header: "Cryptocurrency", accessor: "name"},
      {Header: "Symbol", accessor: "symbol"},
      {Header: "Entry Price", accessor: "entryPrice",},
      {Header: "Price", accessor: "quote.USD.price",
        Cell: ({ cell: { value } }) => value.toFixed(3),},
      {Header: "Owned", accessor: "owned",},
      {Header: "Value", accessor: "value",
        Cell: ({ cell: { value } }) => value.toFixed(3),},
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      var test = myJson.data
      var myTab = [];
      for (var i in test) {
        var currentCrypto = test[i].symbol;
        test[i]["owned"] = cryptoArray[currentCrypto].owned;
        test[i]["entryPrice"] = cryptoArray[currentCrypto].entryPrice;
        test[i]["value"] = test[i].quote.USD.price * cryptoArray[currentCrypto].owned;
        myTab.push(test[i]);
      }
      setData(myTab);
      //const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      //setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;