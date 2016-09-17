/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//  Top Nav Icon Toggle
$(function () {
    $(".sidebar-toggle").click(function () {
        $("div.body-wrapper").toggleClass('sidebar-close');
    });
});

//  Toggle dropDown
$(function () {
    $('.toggle').click(function (e) {
        e.preventDefault();

        var $this = $(this);
        $(".toggle").removeClass('show');
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
//        $this.find('a.toggle span.right-icon i.fa.fa-angle-right').removeClass('fa fa-angle-right').addClass('fa fa-angle-left');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });
});



//  SideBar - Angle Rotation 
$(function () {
    $("a.toggle").click(function () {
        $(".toggle").removeClass('open');
        if ($(".accordian li ul").hasClass("show")) {
            $(this).addClass("open");
        } else {
            $(this).removeClass('open');
        }
    });
});



//  TopNavbar ProgessBar
$(function () {
    var opt = {
        horLabelPos: 'topRight',
        milestones: false,
        foreColor: '#00C0EF',
        backColor: '#F5F5F5'
    };
    $('#bar-00').barIndicator(opt);
});
$(function () {
    var opt = {
        horLabelPos: 'topRight',
        milestones: false,
        foreColor: '#00A65A',
        backColor: '#F5F5F5'
    };
    $('#bar-01').barIndicator(opt);
});
$(function () {
    var opt = {
        horLabelPos: 'topRight',
        milestones: false,
        foreColor: '#DD4B39',
        backColor: '#F5F5F5'
    };
    $('#bar-02').barIndicator(opt);
});
$(function () {
    var opt = {
        horLabelPos: 'topRight',
        milestones: false,
        foreColor: '#F39C12',
        backColor: '#F5F5F5'
    };
    $('#bar-03').barIndicator(opt);
});
$(function () {
    var opt = {
        horLabelPos: 'topRight',
        milestones: false,
        foreColor: '#00A65A',
        backColor: '#F5F5F5'
    };
    $('#bar-04').barIndicator(opt);
});
$(function () {
    var opt = {
        horLabelPos: 'topRight',
        milestones: false,
        foreColor: '#DD4B39',
        backColor: '#F5F5F5'
    };
    $('#bar-05').barIndicator(opt);
});
$(function () {
    var opt = {
        horLabelPos: 'topRight',
        milestones: false,
        foreColor: '#DD4B39',
        backColor: '#F5F5F5'
    };
    $('#bar-06').barIndicator(opt);
});
$(function () {
    var opt = {
        horLabelPos: 'topRight',
        milestones: false,
        foreColor: '#00C0EF',
        backColor: '#F5F5F5'
    };
    $('#bar-07').barIndicator(opt);
});




//  Goal Completion ProgressBar
$(function () {
    var opt = {
        horTitle: 'Add Products to Cart',
        horLabelPos: 'topRight',
        milestones: false,
        foreColor: '#00C0EF',
        backColor: '#F5F5F5'
    };
    $('#addProductsToCart').barIndicator(opt);
});
$(function () {
    var opt = {
        horTitle: 'Complete Purchase',
        horLabelPos: 'topRight',
        milestones: false,
        foreColor: '#DD4B39',
        backColor: '#F5F5F5'
    };
    $('#completePurchase').barIndicator(opt);
});
$(function () {
    var opt = {
        horTitle: 'Visit Premium Page',
        horLabelPos: 'topRight',
        milestones: false,
        foreColor: '#00A65A',
        backColor: '#F5F5F5'
    };
    $('#visitPremiumPage').barIndicator(opt);
});
$(function () {
    var opt = {
        horTitle: 'Send Inquiries',
        horLabelPos: 'topRight',
        milestones: false,
        foreColor: '#00C0EF',
        backColor: '#F5F5F5'
    };
    $('#sendInquiries').barIndicator(opt);
});



//  Highcharts.com
$(function () {
    $(function () {
        $('#container').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'US and USSR nuclear stockpiles'
            },
            subtitle: {
                text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
                        'thebulletin.metapress.com</a>'
            },
            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function () {
                        return this.value; // clean, unformatted number for year
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Nuclear weapon states'
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000 + 'k';
                    }
                }
            },
            tooltip: {
                pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
            },
            plotOptions: {
                area: {
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                    name: 'USA',
                    data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                        27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                        26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                        22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                        10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
                }, {
                    name: 'USSR/Russia',
                    data: [null, null, null, null, null, null, null, null, null, null,
                        5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                        4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                        15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                        33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                        35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                        21000, 20000, 19000, 18000, 18000, 17000, 16000]
                }]
        });
    });

    $(function () {
        $('#world-map-markers').vectorMap({
            map: 'world_mill',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            markerStyle: {
                initial: {
                    fill: '#00A65A',
                    stroke: '#000'
                }
            },
            backgroundColor: '#383f47',
            markers: [
                {latLng: [41.90, 12.45], name: 'Vatican City'},
                {latLng: [43.73, 7.41], name: 'Monaco'},
                {latLng: [-0.52, 166.93], name: 'Nauru'},
                {latLng: [-8.51, 179.21], name: 'Tuvalu'},
                {latLng: [43.93, 12.46], name: 'San Marino'},
                {latLng: [47.14, 9.52], name: 'Liechtenstein'},
                {latLng: [7.11, 171.06], name: 'Marshall Islands'},
                {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
                {latLng: [3.2, 73.22], name: 'Maldives'},
                {latLng: [35.88, 14.5], name: 'Malta'},
                {latLng: [12.05, -61.75], name: 'Grenada'},
                {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
                {latLng: [13.16, -59.55], name: 'Barbados'},
                {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
                {latLng: [-4.61, 55.45], name: 'Seychelles'},
                {latLng: [7.35, 134.46], name: 'Palau'},
                {latLng: [42.5, 1.51], name: 'Andorra'},
                {latLng: [14.01, -60.98], name: 'Saint Lucia'},
                {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
                {latLng: [1.3, 103.8], name: 'Singapore'},
                {latLng: [1.46, 173.03], name: 'Kiribati'},
                {latLng: [-21.13, -175.2], name: 'Tonga'},
                {latLng: [15.3, -61.38], name: 'Dominica'},
                {latLng: [-20.2, 57.5], name: 'Mauritius'},
                {latLng: [26.02, 50.55], name: 'Bahrain'},
                {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
            ]
        });
    });
});


//  Monthly ProgressBar
$(function () {
    var opt = {
        milestones: false,
        foreColor: '#FFF',
        backColor: 'rgba(0,0,0,0.1)',
        horBarHeight: 2
    };
    $('#inventoryProgress').barIndicator(opt);
});
$(function () {
    var opt = {
        milestones: false,
        foreColor: '#FFF',
        backColor: 'rgba(0,0,0,0.1)',
        horBarHeight: 2
    };
    $('#mentionsProgress').barIndicator(opt);
});
$(function () {
    var opt = {
        milestones: false,
        foreColor: '#FFF',
        backColor: 'rgba(0,0,0,0.1)',
        horBarHeight: 2
    };
    $('#downloadsProgress').barIndicator(opt);
});
$(function () {
    var opt = {
        milestones: false,
        foreColor: '#FFF',
        backColor: 'rgba(0,0,0,0.1)',
        horBarHeight: 2
    };
    $('#directMessagesProgress').barIndicator(opt);
});




//  Donut Chart
$(function () {
    var data = {
        labels: [
            "Chrome",
            "IE",
            "FireFox",
            "Safari",
            "Opera",
            "Navigator"
        ],
        datasets: [
            {
                data: [27, 20, 15, 25, 10, 3],
                backgroundColor: [
                    "#F56954",
                    "#00A65A",
                    "#F39C12",
                    "#00C0EF",
                    "#3C8DBC",
                    "#D2D6DE"
                ],
                hoverBackgroundColor: [
                    "#F56954",
                    "#00A65A",
                    "#F39C12",
                    "#00C0EF",
                    "#3C8DBC",
                    "#D2D6DE"
                ]
            }]
    };
    var ctx = document.getElementById("myDoughnutChart");
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: data
    });
});


//  Maximizing & Minimizing
$(function () {
    $(".header-panel div a i.fa.fa-minus").click(function () {
        $(this).parents(".maximize").toggleClass('minimize');
        $(this).parents(".maximize").find(".body-panel").slideToggle();
        $(this).parents(".maximize").find(".footer-panel").slideToggle();
    });
});

////  Closing 
//$(function () {
//    $(".header-panel > div > i.fa.fa-times").click(function () {
//        $("div.body-wrapper").toggleClass('sidebar-close');
//    });
//});
//$(function () {
//    $(".content-right .collapse-panel").click(function () {
//        $(this).parents(".maximize").toggleClass('minimize');
//    });
//});