$(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_6();
    echarts_5();
    echarts_4();
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_7();
    yuan_map();
function echarts_1() {
 // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echart1'));
option = {
    legend: {
        //orient: 'vertical',
		top:'20',
		left:'0%',
       itemWidth: 10,
        itemHeight: 10,
        data:['课程教学','两者兼备','指导实习、毕业设计（论文）'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    toolbox: {
        show: true,
        right:'0%',
        top:'4%',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        },
        iconStyle:{
            //color:'black',
            borderColor:'#fff'
          }
    },
    visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        name: '分布',
        type: 'pie',
        radius: ['30%', '60%'],
        center: ['50%', '60%'],
        color: ['#0086e5', '#30c5ed', '#9fe7b8', '#fedb5b', '#ff9f7d', '#fb7293', '#e7bcf2'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
                value: 114,
                name: '课程教学'
            },
            {
                value: 53,
                name: '两者兼备'
            },
            {
                value: 427,
                name: '指导实习、毕业设计（论文）'
            },
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                formatter: ['{d|{d}%}', '{b|{b}}'].join('\n'),
                rich: {
                    d: {
                        color: 'rgb(241,246,104)',
                        fontSize: 14,
                        fontWeight:'bold',
                 
                    },
                    b: {
                        color: 'rgb(98,137,169)',
                        fontSize: 12,
               
                    },
                },
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 5,
                length2: 9,

            }
        },
        itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 50,
            }
        }
    }]
};
// 轮播开始
var app = {
    currentIndex: -1,
};

var timeOut = null;
autoMoven();
function autoMoven() {
    timeOut = setInterval(function () {
        var dataLen = 3;

        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        //console.log(app.currentIndex);
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
    }, 1000);
}
function stop(){
    clearInterval(timeOut)
}

myChart.on('mouseover',stop);
myChart.on('mouseout',autoMoven);
// 轮播结束
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
  
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

function echarts_2() {
var myChart = echarts.init(document.getElementById('echart2'));
option = {
    "normal": {
        "top": 200,
        "left": 300,
        "width": 500,
        "height": 400,
        "zIndex": 6,
        "backgroundColor": ""
    },
    "color": ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],

    "tooltip": {
        "show": true,
        "trigger": "item"
    },
    toolbox: {
        show: true,
        right:'4%',
        top:'4%',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        },
        iconStyle:{
            //color:'black',
            borderColor:'#fff'
          }
    },
    "legend": {
        "show": true,
        "icon": "circle",
        "left": "27%",
        "top": "5%",
        "orient": "horizontal",
        "textStyle": {
            "fontSize": 14,
            "color": "#fff"
        },
        "data": ["2022年", "2023年"]
    },
    "radar": {
        "center": ["50%", "60%"],
        "radius": "60%",
        "startAngle": 90,
        "splitNumber": 4,
        "shape": "circle",
        "splitArea": {
            "areaStyle": {
                "color": ["transparent"]
            }
        },
        "axisLabel": {
            "show": false,
            "fontSize": 18,
            "color": "#fff",
            "fontStyle": "normal",
            "fontWeight": "normal"
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "white"//
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "white"//
            }
        },
        "indicator": [{
            "name": "36学时以下",
            "max": 1013
        }, {
            "name": "37-72学时",
            "max": 150
        }, {
            "name": "73-108学时",
            "max": 24
        }, {
            "name": "109学时以上",
            "max": 6
        }, {
            "name": "国家级",
            "max": 15
        }, {
            "name": "省级",
            "max": 60
        }, {
            "name": "校级",
            "max": 1200
        }, {
            "name": "国（境）外",
            "max":12
        }]
    },
    "series": [{
        "name": "2022年",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "areaStyle": {
            "normal": {
                "color": "rgba(245, 166, 35, 0.4)"
            }
        },
        itemStyle:{
            color:'rgba(245, 166, 35, 1)',
            borderColor:'rgba(245, 166, 35, 0.3)',
            borderWidth:10,
        },
        "lineStyle": {
            "normal": {
                "type": "dashed",
                
                "color": "rgba(245, 166, 35, 1)",
                "width": 2
            }
        },
        "data": [
            [706, 99, 16, 3, 13, 46, 760, 5]
        ]
    }, {
        "name": "2023年",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "itemStyle": {
            "normal": {
                color:'rgba(19, 173, 255, 1)',
                "borderColor": "rgba(19, 173, 255, 0.4)",
                "borderWidth": 10
            }
        },
        "areaStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 0.5)"
            }
        },
        "lineStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 1)",
                "width": 2,
                "type": "dashed"
            }
        },
        "data": [
            [1013, 121, 19,5, 15, 57, 1085, 1]
        ]
    }]
};


        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
function echarts_3() {
        var myChart = echarts.init(document.getElementById('echart3'));
         option = {    
            tooltip: {
                trigger: 'axis',
                "formatter": "{b}：<br>{a}:{c}次",
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                icon: 'rect',
                itemWidth: 14,
                itemHeight: 5,
                itemGap: 13,
                data: ['培训总数'],
                top:'6%',
                right: 'center',
                textStyle: {
                    fontSize: 16,
                    color: '#F1F1F3'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '4%',
                containLabel: true
            },
            toolbox: {
                show: true,
                right:'2%',
                top:'5%',
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                },
                iconStyle:{
                    //color:'black',
                    borderColor:'#fff'
                  }
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#00c7ff'
                    }
                },
                data: ['2019', '2020', '2021','2022','2023']
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#00c7ff'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: '培训总数',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5ff6e9'
                        }, {
                            offset: 0.8,
                            color: '#7370fd'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(137,189,27)',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12
        
                    }
                },
                data: [302, 790, 799, 824, 1158]
            }]
        };
          // 轮播开始
      var app = {
        currentIndex: -1,
    };
    
    var timeOut = null;
    autoMoven();
    function autoMoven() {
        timeOut = setInterval(function () {
            var dataLen = 5;
    
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: app.currentIndex,
            });
            app.currentIndex = (app.currentIndex + 1) % dataLen;
            //console.log(app.currentIndex);
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: app.currentIndex,
            });
            // 显示 tooltip
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: app.currentIndex,
            });
        }, 1000);
    }
    function stop(){
        clearInterval(timeOut)
    }
    
    myChart.on('mouseover',stop);
    myChart.on('mouseout',autoMoven);
    // 轮播结束

                myChart.setOption(option);
                window.addEventListener("resize",function(){
                    myChart.resize();
                });
            }

function echarts_4() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('echart4'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            toolbox: {
                show: true,
                right:'0%',
                top:'1%',
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                },
                iconStyle:{
                    //color:'black',
                    borderColor:'#fff'
                  }
            },
            legend: {
                data: ['共产党员', '共青团员', '少数民族'],
        
                top:'2%',
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: '12',
        
                },
                itemWidth: 12,
                itemHeight: 12,
                //itemGap: 35
            },
            grid: {
                left: '0%',
                top:'40px',
                right: '0%',
                bottom: '0%',
               containLabel: true
            },
            xAxis: [{
                type: 'category',
                      data: ['2019', '2020', '2021', '2022', '2023'],
                axisLine: {
                    show: true,
                 lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                       
                    },
                },
                
                axisTick: {
                    show: false,
                },
                axisLabel:  {
                        interval: 0,
                       // rotate:50,
                        show: true,
                        splitNumber: 15,
                        textStyle: {
                             color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                            
                        },
                    },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                   //formatter: '{value} %'
                    show:true,
                     textStyle: {
                             color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                        },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                       color: "rgba(255,255,255,.1)",
                         type: "dotted"
                    }
                }
            }],
            series: [{
                name: '共产党员',
                type: 'bar',
                data: [360, 390, 530, 925, 943],
                barWidth:'15%', //柱子宽度
               // barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        color:'#2f89cf',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }, {
                name: '共青团员',
                type: 'bar',
                data: [50, 50, 54, 50, 52],
                barWidth:'15%',
               // barGap: 1,
                itemStyle: {
                    normal: {
                        color:'#62c98d',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            },
                     {
                name: '少数民族',
                type: 'bar',
                data: [30, 26, 33, 40, 52],
                barWidth:'15%',
               // barGap: 1,
                itemStyle: {
                    normal: {
                        color:'#ffc107',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            },
            ]
        };

        // 轮播开始
      var app = {
        currentIndex: -1,
    };
    
    var timeOut = null;
    autoMoven();
    function autoMoven() {
        timeOut = setInterval(function () {
            var dataLen = 5;
    
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: app.currentIndex,
            });
            app.currentIndex = (app.currentIndex + 1) % dataLen;
            //console.log(app.currentIndex);
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: app.currentIndex,
            });
            // 显示 tooltip
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: app.currentIndex,
            });
        }, 1000);
    }
    function stop(){
        clearInterval(timeOut)
    }
    
    myChart.on('mouseover',stop);
    myChart.on('mouseout',autoMoven);
    // 轮播结束
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener("resize",function(){
                    myChart.resize();
                });
            }

function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));
	option = {
	color: ['#1aa1ff', '#31c17b', '#ff6535'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        show: true,
        right:'4%',
        top:'4%',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        },
        iconStyle:{
            //color:'black',
            borderColor:'#fff'
          }
    },
	 grid: {
        left: '0%',
		top:'15px',
        right: '0%',
        bottom: '3%',
       containLabel: true
    },

    xAxis: {
        data: ['[0,5)', '[5,10)', '[10,15)', '[15,20)', '[20,40)'],
        axisLine: {show:false,},
        axisLabel: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
        }
    },
    yAxis: {
        name: "（人）",
		 splitNumber:4,
        nameTextStyle: {
             color: 'rgba(255,255,255,.6)',
            fontSize: 12
        },
        axisLine: { show:false, },
        axisLabel: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
				 type: "dotted"
            }
        },
        //interval:100,
        //max:500

    },
    series: [{
        type: 'bar',
        barWidth: '25%',
		  itemStyle: {

                normal: {
 barBorderRadius: 50,	
                    color: function(params) {
                        var colorList = ['#4591e3', '#04b8e5', '#04dde5', '#04e5bd', '#04e57e', '#fedb5b', '#e59e04','#ff632d','#ff639e','#ff82e9', '#b562e4'];

                        return colorList[params.dataIndex]

                    },

                    label: {

                        show: true,
                        position: 'top',
                        formatter: '{c}',
   color: 'rgba(255,255,255,.4)',
            fontSize: 12
                    }

                }

            },

        data: [175, 17, 10, 5, 2]
    }]
};

 // 轮播开始
 var app = {
    currentIndex: -1,
};

var timeOut = null;
autoMoven();
function autoMoven() {
    timeOut = setInterval(function () {
        // var dataLen = option.series[0].data.length;
        var dataLen = 5;


        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        //console.log(app.currentIndex);
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
        });
    }, 1000);
}
function stop(){
    clearInterval(timeOut)
}

myChart.on('mouseover',stop);
myChart.on('mouseout',autoMoven);
// 轮播结束
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
        option = {

            "tooltip": {
                "trigger": "axis",
                
                "axisPointer": {
                    "type": "shadow",
                    textStyle: {
                        color: "#fff"
                    }
        
                },
            },
            toolbox: {
                show: true,
                right:'2%',
                top:'2%',
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                },
                iconStyle:{
                    //color:'black',
                    borderColor:'#fff'
                  }
            },
            "grid": {
                "borderWidth": 0,
                "top": '18%',
                "bottom": '20%',
                "left":"8%",
                textStyle: {
                    color: "#fff"
                }
            },
            "legend": {
                left: 'center',
                top: '3%',
                textStyle: {
                    color: '#90979c',
                },
                "data": ['增加教师数',  '离职教师数']
            },
        
        
            "calculable": true,
            "xAxis": [{
                "type": "category",
                "axisLine": {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                "splitLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "splitArea": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 0,
        
                },
                "data": [2019,2020,2021,2022,2023],
            }],
            "yAxis": [{
                "name":"增加(人)",
                "type": "value",
                "max":400,
                "splitLine": {
                    "show": false
                },
                "axisLine": {
                    lineStyle: {
                        color: '#90979c'
                    }
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 0,
        
                },
                "splitArea": {
                    "show": false
                },
        
            },{
                "name":"离职(人)",
                "type": "value",
                "splitLine": {
                    "show": false
                },
                "axisLine": {
                    lineStyle: {
                        color: '#90979c'
                    }
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 0,
        
                },
                "splitArea": {
                    "show": false
                },
        
            }],
            "dataZoom": [{
                "show": true,
                "height": 20,
                "xAxisIndex": [
                    0
                ],
                bottom: '5%',
                "start": 10,
                "end": 80,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                    color: "#d3dee5",
        
                },
                textStyle: {
                    color: "#fff"
                },
                borderColor: "#90979c"
        
        
            }, {
                "type": "inside",
                "show": true,
                "height": 15,
                "start": 1,
                "end": 35
            }],
            "series": [{
                    "name": "增加教师数",
                    "type": "bar",
                    "stack": "总量",
                    "barMaxWidth": 35,
                    "barGap": "10%",
                    "itemStyle": {
                        "normal": {
                            "color": "rgba(255,144,128,1)",
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#fff"
                                },
                                "position": "insideTop",
                                formatter: function(p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    "data": [
                        159,
                        244,
                        180,
                        167,
                        366,
                    ],
                },
                {
                    "name": "离职教师数",
                    "type": "line",
                    "stack": "总量",
                    symbolSize: 20,
                    symbol: 'circle',
                    "itemStyle": {
                        "normal": {
                            "color": "rgba(252,230,48,1)",
                            "barBorderRadius": 0,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function(p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    yAxisIndex:1,
                    "data": [
                        21,
                        20,
                        27,
                        39,
                        27
                        
                    ]
                },
            ]
        }
              // 轮播开始
      var app = {
        currentIndex: 1,
    };
    
    var timeOut = null;
    autoMoven();
    function autoMoven() {
        timeOut = setInterval(function () {
            var dataLen = 5;
    
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: app.currentIndex,
            });
            app.currentIndex = (app.currentIndex + 1) % dataLen;
            //console.log(app.currentIndex);
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: app.currentIndex,
            });
            // 显示 tooltip
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: app.currentIndex,
            });
        }, 1000);
    }
    function stop(){
        clearInterval(timeOut)
    }
    
    myChart.on('mouseover',stop);
    myChart.on('mouseout',autoMoven);
    // 轮播结束
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

function echarts_7() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart7'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            // grid:{
            //     top:"5%",
            // },
            legend: {
                left: '0%',
                top: 'center',
                orient: 'vertical',
                itemWidth: 20,
                itemHeight: 20,
                icon: 'rect',
                textStyle: {
                    fontSize: 12.8,
                    color: '#F1F1F3'
                },
                data: ['高级工程师',  '副主任护师', '护士资格证', '工程师','主管护师','健康管理师','企业人力资源管理师','护师','主任医师','副主任医师']
            },
            toolbox: {
                show: true,
                right:'4%',
                top:'4%',
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                },
                iconStyle:{
                    //color:'black',
                    borderColor:'#fff'
                  }
            },
            color: [{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#6777fe' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#32ccf3' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }, {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#33c4fa' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#2af0d5' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }, {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#e8474c' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#ff5ca1' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }, {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#726aff' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#a587ff' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }, {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#fe9039' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#f0ce39' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }],
            series: [{
                name: '持证人数',
                type: 'pie',
                radius: [54, 128],
                center: ['64%', '58%'],
                roseType: 'radius',
                label: {
                    normal: {
                        show: false,
                        color:"#fff"
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                        value: 49,
                        name: '高级工程师'
                    },
                    {
                        value: 49,
                        name: '副主任护师'
                    },
                    
                    {
                        value: 34,
                        name: '护士资格证'
                    },
                    
                    {
                        value: 32,
                        name: '工程师'
                    },
                    {
                        value: 30,
                        name: '主管护师'
                    },
                    {
                        value: 28,
                        name: '健康管理师'
                    },
                    {
                        value: 21,
                        name: '企业人力资源管理师'
                    },
                    {
                        value: 16,
                        name: '护师'
                    },
                    {
                        value: 12,
                        name: '主任医师'
                    },
                    {
                        value: 11,
                        name: '副主任医师'
                    }
                ]
            }]
        };
          // 轮播开始
      var app = {
        currentIndex: -1,
    };
    
    var timeOut = null;
    autoMoven();
    function autoMoven() {
        timeOut = setInterval(function () {
            var dataLen = option.series[0].data.length;
    
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: app.currentIndex,
            });
            app.currentIndex = (app.currentIndex + 1) % dataLen;
            //console.log(app.currentIndex);
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: app.currentIndex,
            });
            // 显示 tooltip
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: app.currentIndex,
            });
        }, 1000);
    }
    function stop(){
        clearInterval(timeOut)
    }
    
    myChart.on('mouseover',stop);
    myChart.on('mouseout',autoMoven);
    // 轮播结束
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


})






		
		
		


		









