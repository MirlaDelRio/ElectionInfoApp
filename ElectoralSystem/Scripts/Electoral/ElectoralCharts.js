$(document).ready(function () {
    getTotalVoters();
    getAdultPopulation();
})


function getTotalVoters() {
     $('#totalVoters').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total de votantes campaña 2016'
        },
        subtitle: {
            text: 'Total de votantes según Padrón Electoral'
        },
        xAxis: {
            categories: [
                'PRD',
                'PLD',
                'PRSC',
                'MODA',
                'BIS',
                'PRSD',
                'PQDC',
                'UDC',
                'PHD',
                'FNP',
                'PCR',
                'PTD',
                'PPC',
                'PAL',
                'PRM',
                'PASOVE',
                'PUN',
                'PDI',
                'PLR',
                'PDP',
                'DXC',
                'FRENT',
                'APD'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Miles'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Votantes 2016',
            data: [1977341, 1711737, 266461, 91815, 72255, 61734, 59982, 35496, 33170, 26989, 26061, 22089,
21031, 19019, 14362, 12445, 11710,
11685, 9387, 9340, 6550, 5064]

        }]
    });

    //Highcharts.createElement('link', {
    //    href: 'https://fonts.googleapis.com/css?family=Dosis:400,600',
    //    rel: 'stylesheet',
    //    type: 'text/css'
    //}, null, document.getElementsByTagName('head')[0]);



}

function getAdultPopulation() {

    Highcharts.theme = {
        colors: ["#FF5252", "#5aaedc", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
           "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
        chart: {
            backgroundColor: null,
            style: {
                fontFamily: "Dosis, sans-serif"
            }
        },
        title: {
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'uppercase'
            }
        },
        tooltip: {
            borderWidth: 0,
            backgroundColor: 'rgba(219,219,216,0.8)',
            shadow: false
        },
        legend: {
            itemStyle: {
                fontWeight: 'bold',
                fontSize: '13px'
            }
        },
        xAxis: {
            gridLineWidth: 1,
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        yAxis: {
            minorTickInterval: 'auto',
            title: {
                style: {
                    textTransform: 'uppercase'
                }
            },
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        plotOptions: {
            candlestick: {
                lineColor: '#404048'
            }
        },


        // General
        background2: '#F0F0EA'

    };

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);


    $('#censusAdultPopulation').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Censo<br/>2016',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Femenino', 49.6],
                ['Masculino', 50.4],
                {

                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });

    $('#padronAdultPopulation').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Padrón <br/> Electoral <br/>2016',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Femenino', 50.8],
                ['Masculino', 49.2],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });



}