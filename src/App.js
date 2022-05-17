import React, { useMemo, useState, useEffect } from "react";
import myJson from './data.json';
import Table from "./Table";
import "./App.css";
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

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


const options = {
  plugins: {
    title: {display: true,text: 'Doughnut Portfolio Chart',color:'black',
      font: {size:30},
      padding:{top:30,bottom:30},
      responsive:true,
      animation:{animateScale: true,}}}
}

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
  const cryptos = [];
  const values = [];
  useEffect(() => {
    (async () => {
      var test = myJson.data
      var myTab = [];
      for (var i in test) {        
        var currentCrypto = test[i].symbol;
        test[i]["owned"] = cryptoArray[currentCrypto].owned;
        test[i]["entryPrice"] = cryptoArray[currentCrypto].entryPrice;
        test[i]["value"] = test[i].quote.USD.price * cryptoArray[currentCrypto].owned;
        cryptos.push(i);
        values.push(test[i]["value"]);
        myTab.push(test[i]);
      }
      setData(myTab);
    })();
  }, []);
  console.log(cryptos);
  console.log(values);

  const data2 = {
    //labels: ['Mon','Tue','Wed','Thurs','Fri'],
    labels: cryptos,
    datasets: [{
        label: 'Attendance for Week 1',
        //data: [25,24,25,25,3],
        data: values,
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: ['rgba(232,99,132,1)','rgba(232,211,6,1)','rgba(54,162,235,1)','rgba(255,159,64,1)','rgba(153,102,255,1)' ],
        pointBackgroundColor: 'rgba(255,206,86,0.2)',
      }]
  }
  const styles = {
    doughnutContainer: {
      width: "40%",
      height: "40%",
      top: "50%",
      left: "50%",
      position: "relative",
      //transform: "translate(-50%, -50%)"
    },
  };

  return (
    <div className="App">
      <Table columns={columns} data={data} />
      <div style={styles.doughnutContainer}>
        <Doughnut data={data2} options={options}/>
      </div>
    </div>
  );
}

export default App;