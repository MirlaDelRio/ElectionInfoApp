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
                        getCandidatesList();
                        chart.hideLoading();
                        clearTimeout(fail);


                        // Load the drilldown map
                        //$.getScript('https://code.highcharts.com/mapdata/' + mapKey + '.js', function () {

                        //    data = Highcharts.geojson(Highcharts.maps[mapKey]);

                        //    // Set a non-random bogus value
                        //    $.each(data, function (i) {
                        //        this.value = i;
                        //    });

                        //    // Hide loading and add series
                        //    chart.hideLoading();
                        //    clearTimeout(fail);
                        //    chart.addSeriesAsDrilldown(e.point, {
                        //        name: e.point.name,
                        //        data: data,
                        //        dataLabels: {
                        //            enabled: true,
                        //            format: '{point.name}'
                        //        }
                        //    });
                        //});
                    }


                    this.setTitle(null, { text: e.point.name });
                },
                drillup: function () {
                    this.setTitle(null, { text: 'Republica Dominicana' });
                }
            }
        },

        title: {
            text: ''
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
            minColor: '#E1F5FE',
            maxColor: '#45ADA8'
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
                        color: '#BADA55'
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

function getCandidatesList() {

    $("#candidatesList").show();

    $('html, body').animate({
        scrollTop: $("#candidatesList").offset().top
    }, 1000);
}

