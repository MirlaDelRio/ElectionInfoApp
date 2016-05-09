$(function () {

    /*
    TODO:
    - Check data labels after drilling. Label rank? New positions?
    - Not US Mainland text
    - Separators
    */

    var data = Highcharts.geojson(Highcharts.maps['countries/do/do-all']),
        // Some responsiveness
        small = $('#mapCandidates').width() < 400;

    // Set drilldown pointers
    $.each(data, function (i) {
        this.drilldown = this.properties['hc-key'];
        this.value = i; // Non-random bogus data
    });

    // Instanciate the map
    $('#mapCandidates').highcharts('Map', {
        chart: {
            events: {
                drilldown: function (e) {

                    if (!e.seriesOptions) {
                        var chart = this,
                            mapKey = 'countries/do/' + e.point.drilldown + '-all',
                            // Handle error, the timeout is cleared on success
                            fail = setTimeout(function () {
                                if (!Highcharts.maps[mapKey]) {
                                    chart.showLoading('<i class="icon-frown"></i> Failed loading ' + e.point.name);

                                    fail = setTimeout(function () {
                                        chart.hideLoading();
                                    }, 1000);
                                }
                            }, 3000);

                        // Show the spinner
                        chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>'); // Font Awesome spinner

                        // Load the drilldown map
                        $.getScript('https://code.highcharts.com/mapdata/' + mapKey + '.js', function () {

                            data = Highcharts.geojson(Highcharts.maps[mapKey]);

                            // Set a non-random bogus value
                            $.each(data, function (i) {
                                this.value = i;
                            });

                            // Hide loading and add series
                            chart.hideLoading();
                            clearTimeout(fail);
                            chart.addSeriesAsDrilldown(e.point, {
                                name: e.point.name,
                                data: data,
                                dataLabels: {
                                    enabled: true,
                                    format: '{point.name}'
                                }
                            });
                        });
                    }


                    this.setTitle(null, { text: e.point.name });
                },
                drillup: function () {
                    this.setTitle(null, { text: 'Republica Dominicana' });
                }
            }
        },

        title: {
            text: 'Highcharts Map Drilldown'
        },

        subtitle: {
            text: 'Republica Dominicana',
            floating: true,
            align: 'right',
            y: 50,
            style: {
                fontSize: '16px'
            }
        },

        legend: small ? {} : {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        colorAxis: {
            min: 0,
            minColor: '#E6E7E8',
            maxColor: '#005645'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        plotOptions: {
            map: {
                states: {
                    hover: {
                        color: '#EEDD66'
                    }
                }
            }
        },

        series: [{
            data: data,
            name: 'Republica Dominicana',
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }],

        drilldown: {
            //series: drilldownSeries,
            activeDataLabelStyle: {
                color: '#FFFFFF',
                textDecoration: 'none',
                textShadow: '0 0 3px #000000'
            },
            drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    x: 0,
                    y: 60
                }
            }
        }
    });
});



////$(function () {

////    // Prepare demo data
////    var data = [
////        {
////            "hc-key": "do-pn",
////            "value": 0,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-al",
////            "value": 1,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-pv",
////            "value": 2,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-jo",
////            "value": 3,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-hm",
////            "value": 4,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-mp",
////            "value": 5,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-du",
////            "value": 6,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-mt",
////            "value": 7,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-sm",
////            "value": 8,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-cr",
////            "value": 9,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-nc",
////            "value": 10,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-se",
////            "value": 11,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-ro",
////            "value": 12,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-st",
////            "value": 13,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-sr",
////            "value": 14,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-va",
////            "value": 15,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-ju",
////            "value": 16,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-sd",
////            "value": 17,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-pm",
////            "value": 18,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-mc",
////            "value": 19,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-pp",
////            "value": 20,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-da",
////            "value": 21,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-es",
////            "value": 22,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-1857",
////            "value": 23,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-br",
////            "value": 24,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-bh",
////            "value": 25,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-in",
////            "value": 26,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-ep",
////            "value": 27,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-az",
////            "value": 28,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-ve",
////            "value": 29,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-sz",
////            "value": 30,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        },
////        {
////            "hc-key": "do-mn",
////            "value": 31,
////            "party": [{ "name": "PRSC", "value": 6 }, { "name": "PRD", value: 18 }, { "name": "PRM", value: 12 }]
////        }
////    ];




////    // Initiate the chart
////    $('#mapCandidates').highcharts('Map', {

////        title: {
////            text: 'Candidatura 2016'
////        },

////        subtitle: {
////            text: 'Republica Dominicana'
////        },

////        mapNavigation: {
////            enabled: true,
////            buttonOptions: {
////                verticalAlign: 'bottom'
////            }
////        },

////        colorAxis: {
////            min: 0,
////            minColor: '#E1F5FE',
////            maxColor: '#45ADA8',

////        },

////        series: [{
////            data: data,
////            mapData: Highcharts.maps['countries/do/do-all'],
////            joinBy: 'hc-key',
////            name: 'Random data',
////            states: {
////                hover: {
////                    color: '#BADA55'
////                }
////            },
////            dataLabels: {
////                enabled: true,
////                format: '{point.name}'
////            },
////            tooltip: {
////                pointFormat: getTotalCandidates(data, '{point.name}')

////            }
////        }]


////    });
////});


//function getTotalCandidates(mapData, name) {

//    var parties = "";

//    mapData.map(function (val) {

//        val.party.map(function (i, v) {
//            parties = i.name + ": " + i.value;
//        });

//    });

//    return 

//}

////$(function () {

////    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {

////        // Make codes uppercase to match the map data
////        $.each(data, function () {
////            this.code = this.code.toUpperCase();
////        });

////        // Instanciate the map
////        $('#container').highcharts('Map', {

////            chart: {
////                borderWidth: 1
////            },

////            title: {
////                text: 'US population density (/km²)'
////            },

////            legend: {
////                layout: 'horizontal',
////                borderWidth: 0,
////                backgroundColor: 'rgba(255,255,255,0.85)',
////                floating: true,
////                verticalAlign: 'top',
////                y: 25
////            },

////            mapNavigation: {
////                enabled: true
////            },

////            colorAxis: {
////                min: 1,
////                type: 'logarithmic',
////                minColor: '#EEEEFF',
////                maxColor: '#000022',
////                stops: [
////                    [0, '#EFEFFF'],
////                    [0.67, '#4444FF'],
////                    [1, '#000022']
////                ]
////            },

////            series: [{
////                animation: {
////                    duration: 1000
////                },
////                data: data,
////                mapData: Highcharts.maps['countries/us/us-all'],
////                joinBy: ['postal-code', 'code'],
////                dataLabels: {
////                    enabled: true,
////                    color: '#FFFFFF',
////                    format: '{point.code}'
////                },
////                name: 'Population density',
////                tooltip: {
////                    pointFormat: '{point.code}: {point.value}/km²'
////                }
////            }]
////        });
////    });
////});