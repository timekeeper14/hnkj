 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1();
echarts_4()
echarts_31()
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
     var data = [{
        title: '**省'
    },
    ['本周'],
    [{
        name: '助教及其他初级',
        max: 500
    }, {
        name: '讲师及其他中级',
        max: 500
    }, {
        name: '副教授及其他副高级',
        max: 500
    }, {
        name: '教授及其他正高级',
        max: 500
    },
    {
        name: '未评级',
        max: 500
    }],
    [ 240, 471, 303, 90,419],
]
option = {

    color: ['#9DD060', '#35C96E', '#4DCEF8'],

    tooltip: {},
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
    radar: {
        center: ['50%', '50%'],
	 radius: ["25%", "70%"],
		
        name: {
            textStyle: {
                color: '#72ACD1'
            }
        },

          splitLine: {

              lineStyle: {

                  color: 'rgba(255,255,255,.0',

                  width: 2

              }

          },
          axisLine: {
              lineStyle: {
                  color: 'rgba(255,255,255,0.2)',
                  width: 1,
                  type: 'dotted'

              },

          },
        splitArea: {
            areaStyle: {
                  color: ['rgba(255,255,255,.1)', 'rgba(255,255,255,0)']
              }
        },
        indicator: data[2]
    },
    series: [{
        name: '',
        type: 'radar',
        data: [{
                areaStyle: {
                    normal: {
                        opacity: 0.3,
                    }
                },
                value: data[3],
                name: data[1][0]
            },
            {
                areaStyle: {
                    normal: {
                        opacity: 0.3,
                    }
                },
                value: data[4],
                name: data[1][1]
            },
            {
                areaStyle: {
                    normal: {
                        opacity: 0.3,
                    }
                },
                value: data[5],
                name: data[1][2]
            }
        ]
    }]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        var myChart2 = echarts.init(document.getElementById('echart3'));
        
var option = {


    toolbox: {
        show: true,
        right:'2%',
        top:'-3%',
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
        left: '0',
        top: '30',
        right: '0',
        bottom: '10',
        containLabel: true
    },
        legend: {
    
            top: 0,
    
            textStyle: {
    
            color: "#fff",
    
        },
    
        itemWidth: 10,  // 设置宽度
    
        itemHeight: 10, // 设置高度
    
        },
    
        tooltip: {
    
            trigger: 'axis',
    
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
    
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    
            }
    
        },
    
        xAxis: {
    
            type: 'category',
    
            data: ["挂职单位人数","挂职锻炼人数","兼职创业人数",],
    
            axisTick: { //---坐标轴 刻度
    
                show: true, //---是否显示
    
            },
    
            axisLine: { //---坐标轴 轴线
    
                show: true, //---是否显示
    
                lineStyle: {
    
                    color: 'rgba(255,255,255,.1)',
    
                    width: 1,
    
                    type: 'dotted',
    
                },
    
            },
    
            axisLabel: {//X轴文字
    
                textStyle: {
    
                    fontSize: 12,
    
                    color: '#fff'
    
                },
    
            },
    
        },
    
        yAxis: {
    
            type: 'value',
    
            splitLine: {//分割线
    
                show: true,
    
                lineStyle: {
    color: 'rgba(255,255,255,.1)',
    
                    width: 1,
                    type: 'dotted'
    
                }
    
            },
    
            axisLabel: {//Y轴刻度值
    
                formatter: '{value}',
    
                textStyle: {
    
                    fontSize: 12,
    
                    color: '#fff'
    
                },
    
            },
    
            axisLine: { //---坐标轴 轴线
    
                show: false, //---是否显示
    
            },
    
        },
    
        series: [{
    
            name: '2022',
    
            type: 'bar',
    
            data: [477, 682,13],
    
            barWidth: 15,
    
            barGap: 1, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角
    
            itemStyle: {
    
                normal: {
    barBorderRadius: 50,
                    color: "#446ACF",
    
                }
    
            },
    
        }, {
    
            name: '2023',
    
            type: 'bar',
    
            data: [491, 762,9],
    
            barWidth: 15, //柱图宽度
    
            itemStyle: {
    
                normal: { //设置颜色的渐变
    barBorderRadius: 50,
                    color: "#4fb69d",
    
                }
    
            },
    
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
                myChart2.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: app.currentIndex,
                });
                app.currentIndex = (app.currentIndex + 1) % dataLen;
                //console.log(app.currentIndex);
                // 高亮当前图形
                myChart2.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: app.currentIndex,
                });
                // 显示 tooltip
                myChart2.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: app.currentIndex,
                });
            }, 1000);
        }
        function stop(){
            clearInterval(timeOut)
        }
        
        myChart2.on('mouseover',stop);
        myChart2.on('mouseout',autoMoven);
        // 轮播结束

option2 = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        show: true,
        right:'0%',
        top:'3%',
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
        data: ['省级高层次人才', '高技能人才'],
		top:'5%',
        textStyle: {
            color: "#fff",
		    fontSize: '12',

        },
 
        itemGap: 35
    },
    grid: {
        left: '0%',
		top:'40px',
        right: '0%',
        bottom: '0',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['2019年', '2020年', '2021年', '2022年', '2023年'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 5,
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
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        name: '省级高层次人才',
        type: 'line',
 smooth: true,
        data: [50, 66, 71, 73, 80, 113],

        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    }, {
        name: '高技能人才',
        type: 'line',
		 smooth: true,
        data: [15, 21, 25, 27, 28, 33],
		barWidth:'15',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#62c98d',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
	]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option2);
        myChart2.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        
        var myChart = echarts.init(document.getElementById('fb01'));
	var myChart2 = echarts.init(document.getElementById('fb02')); 
	var myChart3 = echarts.init(document.getElementById('fb03'));
	var myChart4 = echarts.init(document.getElementById('fb04')); 
	var myChart5 = echarts.init(document.getElementById('myd1')); 

	var myChart7 = echarts.init(document.getElementById('sysx')); 
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
       orient: 'vertical',
        top:'25%',
		right:0,
       itemWidth: 10,
        itemHeight: 10,
        data:['20-29岁','30-39岁','40-49岁','50岁以上'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
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

    series: [
        {
        	name:'年龄分布',
            type:'pie',
			center: ['35%', '50%'],
            radius: ['40%', '50%'],
color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
  
                {value:338, name:'20-29岁'},
                {value:570, name:'30-39岁'},
                {value:283, name:'40-49岁'},
                {value:224, name:'50岁以上'},
            ]
        }
    ]
};


option2 = {
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
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        orient: 'vertical',
		top:'25%',
		right:'8%',
       itemWidth: 10,
        itemHeight: 10,
        data:['博士','硕士','本科','专科'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'学历构成',
            type:'pie',
			center: ['40%', '50%'],
            radius: ['40%', '50%'],
color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:239, name:'博士'},
                {value:621, name:'硕士'},
                {value:541, name:'本科'},
                {value:14, name:'专科'},
               
            ]
        }
    ]
    
};



// option3 = {
//     tooltip: {
//         trigger: 'item',
//         formatter: "{a} <br/>{b}: {c} ({d}%)",
// position:function(p){   //其中p为当前鼠标的位置
//             return [p[0] + 10, p[1] - 10];
//         }
//     },
//     legend: {
//        orient: 'vertical',
// top:'center',
// 		right:0,
//        itemWidth: 10,
//         itemHeight: 10,
//         data:['数据分门别类','数据关系部门','今日数据交易'],
//                 textStyle: {
//             color: 'rgba(255,255,255,.5)',
// 			fontSize:'12',
//         }
//     },
//     series: [
//         {
//         	name:'数据',
//             type:'pie',
// 			center: ['25%', '50%'],
//             radius: ['40%', '50%'],
// color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b'],	
//             label: {show:false},
// 			labelLine: {show:false},
//             data:[
  
//                 {value:4, name:'数据分门别类'},
//                 {value:2, name:'数据关系部门'},
//                 {value:2, name:'今日数据交易'},
//             ]
//         }
//     ]
// };
option3 = {
    legend: {
        //orient: 'vertical',
		top:'10',
		left:'center',
       itemWidth: 10,
        itemHeight: 10,
        data:['2019级','2020级','2021级','2022级'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    tooltip: {
        trigger: 'item',
        // formatter: "d"
    },
    toolbox: {
        show: true,
        right:'0%',
        top:'18%',
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
        name: '班主任队伍配备情况',
        type: 'pie',
        radius: ['30%', '70%'],
        center: ['50%', '68%'],
        color: ['#0086e5', '#30c5ed', '#9fe7b8', '#fedb5b', '#ff9f7d', '#fb7293', '#e7bcf2'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
                value: 20,
                name: '2019级'
            },
            {
                value: 89,
                name: '2020级'
            },
            {
                value: 119,
                name: '2021级'
            },
            {
                value: 179,
                name: '2022级'
            }
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                formatter: ['{d|{c}}'].join('\n'),
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


option4 = {
//     tooltip: {
//         trigger: 'item',
//         formatter: "{a} <br/>{b}: {c} ({d}%)",
// position:function(p){   //其中p为当前鼠标的位置
//             return [p[0] + 10, p[1] - 10];
//         }
//     },
//     legend: {
//         orient: 'vertical',
// 		top:'center',
// 		right:'8%',
//        itemWidth: 10,
//         itemHeight: 10,
//         data:['零销类','服务类','销售类','软件类','硬件类','其它类'],
//                 textStyle: {
//             color: 'rgba(255,255,255,.5)',
// 			fontSize:'12',
//         }
//     },
//     series: [
//         {
//         	name:'业务分类',
//             type:'pie',
// 			center: ['30%', '50%'],
//             radius: ['40%', '50%'],
// 			color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b'],	
//             label: {show:false},
// 			labelLine: {show:false},
//             data:[
//                 {value:10, name:'零销类'},
//                 {value:20, name:'服务类'},
//                 {value:30, name:'销售类'},
//                 {value:40, name:'软件类'},
//                 {value:50, name:'硬件类'},
//                 {value:60, name:'其它类'},
//             ]
//         }
//     ]
};



	option5 = {
    grid: {
        left: '0',
        right: '0',
		top: '10%',
        bottom: '20%',
        //containLabel: true
    },
    toolbox: {
        show: true,
        right:'-0%',
        top:'-4%',
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
        data: ['校外教师', '行业教师', '外籍教师'],
		bottom:0,
	   itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: "#fff",
		    fontSize: '10',

        },
 
        itemGap: 5
    },
    tooltip: {
        show: "true",
        trigger: 'item'
    },
    yAxis: {
        type: 'value',
		show: false,
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#363e83',
                }
            },
            axisLabel: {
				show: false,
             //   inside: true,
                textStyle: {
                  color: "rgba(255,255,255,1)",
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data: ['人数']
        }

    ],
    series: [
		 {
            name: '校外教师',
            type: 'bar',
            barWidth: '20',
			 
            itemStyle: {
                normal: {
                    show: true,
                    color:'#20aa92',
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '100%',
            data: [112],
			 label: {
				  formatter: "{c}人",
            show: true,
            position: 'top',
            textStyle: {
				fontSize:12,
                color: 'rgba(255,255,255,.6)',
            }
        },
        }, 
		{
            name: '行业教师',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color:'#f4664e',
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barWidth: '20',
            data: [388],
			 label: {
				   formatter: "{c}人",
            show: true,
            position: 'top',
            textStyle: {
				fontSize:12,
                color: 'rgba(255,255,255,.6)',
            }
        },
        }, 
			{
            name: '外籍教师',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color:'#0c93dc',
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barWidth: '20',
            data: [2],
			 label: {
				  formatter: "{c}人",
            show: true,
            position: 'top',
            textStyle: {
				fontSize:12,
                color: 'rgba(255,255,255,.6)',
            }
        },
        }, 

    ]
};
	
	option7 = {
      //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        show: true,
        left:'15%',
        top:'-0%',
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
		top:'10px',
        right: '0%',
        bottom: '0',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['2019年', '2020年', '2021年', '2022年', '2023年'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 5,
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
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
			 show: false,
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        name: '年份',
        type: 'line',
 //smooth: true,
        data: [566, 790, 948, 1076, 1415],

        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    }
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
        myChart2.setOption(option2);
        
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
                myChart3.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: app.currentIndex,
                });
                app.currentIndex = (app.currentIndex + 1) % dataLen;
                //console.log(app.currentIndex);
                // 高亮当前图形
                myChart3.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: app.currentIndex,
                });
                // 显示 tooltip
                myChart3.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: app.currentIndex,
                });
            }, 1000);
        }
        function stop(){
            clearInterval(timeOut)
        }
        
        myChart3.on('mouseover',stop);
        myChart3.on('mouseout',autoMoven);
        // 轮播结束


        myChart3.setOption(option3);



		


        myChart4.setOption(option4);
        myChart5.setOption(option5);
 
        myChart7.setOption(option7);
        window.addEventListener("resize",function(){
            myChart.resize();
            myChart7.resize();
            myChart2.resize();
            myChart3.resize();
            myChart4.resize();
            myChart5.resize();
 
        });
    }
})



		









