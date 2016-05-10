$(document).ready(function () {
    getTotalVoters();
    getAdultPopulation();
    getBudget();
})


function getTotalVoters() {


    $('#totalVoters').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total de votantes campaña 2012'
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
            },
            labels: {
                format: '{value} km'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:,.0f} </b></td></tr>',
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
            name: 'Votantes 2012',
            data: [1977341, 1711737, 266461, 91815, 72255, 61734, 59982, 35496, 33170, 26989, 26061, 22089,
                    21031, 19019, 14362, 12445, 11710,
                    11685, 9387, 9340, 6550, 5064]

        }],
        colors: ["#8BC34A"],
        exporting: { enabled: false },
        credits: {
            enabled: false
        }
     
    });


}

function getAdultPopulation() {

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
        }],
        colors: ["#FF5252", "#5aaedc", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
           "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
        exporting: { enabled: false },
        credits: {
            enabled: false
        }
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
        }],
        colors: ["#FF5252", "#5aaedc", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
           "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
        exporting: { enabled: false },
        credits: {
            enabled: false
        }
    });

}

function getBudget() {


    $(function () {
        $('#budget').highcharts({
            chart: {
                type: 'areaspline'
            },
            title: {
                text: ''
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
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
                'APD',
                'PNVC',
                'PRI',
                'ALPAIS',
                'MJP',
                'MIUP',
                'APC',
                'MOPIS',
                'MORECO',
                'ARBA',
                'MOPAG',
                'MAS'
                ],
                plotBands: [{ // visualize the weekend
                    from: 4.5,
                    to: 6.5,
                    color: 'rgba(68, 170, 213, .2)'
                }]
            },
            yAxis: {
                title: {
                    text: 'Fruit units'
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' units'
            },
            credits: {
                enabled: false
            },            
            series: [{
                name: '2016',
                data: [429356512.80,
                        429356512.80,
                        429356512.80,
                        28604039.04,
                        24294035.96,
                        21975756.70,
                        21589707.35,
                        16194270.98,
                        15947922.14,
                        15681741.99,
                        14319772.20,
                        14115289.44,
                        13240067.96,
                        13006939.98,
                        12563600.19,
                        11537440.46,
                        11115033.72,
                        10953078.08,
                        10947569.39,
                        10441210.13,
                        10430853.79,
                        9816083.41,
                        9488646.57,
                        8372805.28,
                        8372805.28,
                        8372805.28,
                        264962.19,
                        52992.44,
                        52992.44,
                        52992.44,
                        52992.44,
                        52992.44,
                        52992.44,
                        52992.44]
            }],
            colors: ["#5aaedc"],
            exporting: { enabled: false },
            credits: {
                enabled: false
            }
        });
    });



}


