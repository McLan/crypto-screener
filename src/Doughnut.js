import { Doughnut } from 'react-chartjs-2';
import React from 'react';

function DoughnutChartGraph({cryptosList, values}) {
    const data = {
    labels: cryptosList,
    datasets: [
        {
            label: 'Doughnut chart',
            data: values,
            borderColor: ['rgba(50,50,50)'],
            borderWidth:1,
            backgroundColor: [
                'rgb(240, 255, 255)',
                'rgb(169, 169, 169)',
                'rgb(205, 92, 92)',
                'rgba(0, 137, 155)',
                'rgba(227, 230, 227)',
                'rgb(216, 191, 216)',
                'rgb(38, 102, 107)', 
                'rgb(199, 176, 144)',
                'rgb(255, 99, 71)',
                'rgb(218, 165, 32)',
                'rgb(0,191,255)',
                'rgb(34, 139, 34)',
                'rgb(0, 137, 155)',
                'rgb(59, 66, 72)',
                'rgb(111, 41, 91)'
            ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
            backgroundImage: 'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center'
        }]
    }

    const options = {
        plugins: {
            title: {display: false,text: 'Doughnut Portfolio Chart',color:'black',
            font: {size:30},
            padding:{top:30,bottom:30},
            responsive:true,
            animation:{animateScale: true,}
            },
            legend: {
                display: true,
                position: "bottom",
                color :"white"
            }
        }
    }            
    const styles = {
        doughnutContainer: {
          width: "40%",
          height: "40%",
          top: "50%",
          left: "50%",
          position: "relative",
          //transform: "translate(-0%, -0%)" 
        },
    };
    return (
        <div style={styles.doughnutContainer}>
            <Doughnut data={data} options={options} />
        </div>
    )
}
    
export default DoughnutChartGraph;