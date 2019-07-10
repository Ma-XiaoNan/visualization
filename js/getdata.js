var namex = []; //类别数组(实际用来盛放X轴坐标值)
var legend = []; //类别数组（实际用来盛放类别值）
var seriesa = []; //实际数据
var seriesb = []; //实际数据
var seriesc = []; //实际数据
var seriesd = []; //实际数据

var myBarChart1 = echarts.init(document.getElementById('Barmain1'), 'customed');

myBarChart1.showLoading(); //数据加载完之前先显示一段简单的loading动画
$.ajax({
	type: 'get',
	url: 'json.json', //请求数据的地址
	dataType: "json", //返回数据形式为json
	success: function(result) {
		//清空原有数组
		namex.splice(0, namex.length);
		legend.splice(0, legend.length);
		seriesa.splice(0, seriesa.length);
		seriesb.splice(0, seriesb.length);
		seriesc.splice(0, seriesc.length);
		seriesd.splice(0, seriesd.length);
		//请求成功时执行该函数内容,result即为服务器返回的json对象
		$.each(result.myBarChart1, function(index, item) {
			namex.push(item.namex); //挨个取出类别并填入类别数组(遍历输出X轴坐标值)
			legend.push(item.legend); //挨个取出类别并填入类别数组(遍历输出具体类别)
			seriesa.push(item.seriesa); //挨个取出并填入类别数组(遍历输出实际值)
			seriesb.push(item.seriesb);
		});

		myBarChart1.hideLoading(); //隐藏加载动画

		var myBaroption1 = {
			color: ['#3bdce7', '#ffff00', '#61a0a8', '#d48265'],
			title: {
				text: '产量达成率（近五日）柱状图',
				textStyle: {
					fontSize: 18,
					fontFamily: '方正粗倩_GBK'
					//						color:'#ffffff',
				},

			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: legend,
				left: '9%',
				top: '11%',
				//					textStyle: {
				//						color :'#ffffff',
				//					},
			},
			toolbox: {
				show: true,
				feature: {
					//						dataView: {
					//							show: true,
					//							readOnly: false
					//						},
					magicType: {
						//							show: true,
						type: ['line', 'bar'],
						//切换折线图显示的按钮颜色
						//							iconStyle:{
						//								borderColor:'#FFFFFF',
						//							},
					},
					//          restore : {show: true},
					//          saveAsImage : {show: true}
				},
				left: '82%',
				top: '10%',

			},
			grid: {
				x: 50,
				y: 70,
				x2: 20,
				y2: 20,
			},
			calculable: true,
			xAxis: [{
				type: 'category',
				//					nameTextStyle:{
				//						color:'#ffffff',
				//					},
				//					axisLine:{
				//						lineStyle:{
				//							color:'#ffffff',
				//						},
				//					},
				data: namex
			}],
			yAxis: [{
				type: 'value',
				//					//Y轴字体颜色
				//					nameTextStyle:{
				//						color:'#ffffff',
				//					},
				//					//Y轴轴线颜色
				//					axisLine:{
				//						lineStyle:{
				//							color:'#ffffff',
				//						},
				//					},
				//					//网格颜色
				//					splitLine:{
				//						 lineStyle: {
				//                       color:'#ffffff',
				//                     }
				//					},

			}],
			series: [{

					name: legend[0],
					type: 'bar',
					barWidth: 20,
					data: seriesa

				},
				{
					name: legend[1],
					type: 'bar',
					barWidth: 20,
					data: seriesb
				}
			]
		};
		myBarChart1.setOption(myBaroption1);
	},
	error: function(errorMsg) {
		//请求失败时执行该函数
		alert("图表请求数据失败!");
		myBarChart1.hideLoading();
	}

});
var myBarChart2 = echarts.init(document.getElementById('Barmain5'), 'customed');
myBarChart2.showLoading(); //数据加载完之前先显示一段简单的loading动画
$.ajax({
	type: 'get',
	url: 'json.json', //请求数据的地址
	dataType: "json", //返回数据形式为json
	success: function(result) {
		//清空原有数组
		namex.splice(0, namex.length);
		legend.splice(0, legend.length);
		seriesa.splice(0, seriesa.length);
		seriesb.splice(0, seriesb.length);
		seriesc.splice(0, seriesc.length);
		seriesd.splice(0, seriesd.length);
		//请求成功时执行该函数内容,result即为服务器返回的json对象
		$.each(result.myBarChart2, function(index, item) {
			namex.push(item.namex); //挨个取出类别并填入类别数组(遍历输出X轴坐标值)
			seriesa.push(item.seriesa); //挨个取出并填入类别数组(遍历输出实际值)			
		});

		myBarChart2.hideLoading(); //隐藏加载动画

		myBaroption2 = {
			color: ['#3bdce7', '#ffff00', '#61a0a8', '#d48265'],
			title: {
				text: '订单达成率',
				textStyle: {
					fontSize: 18,
					fontFamily: '方正粗倩_GBK'
				},

			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				x: 50,
				y: 70,
				x2: 20,
				y2: 20,
			},
			xAxis: {
				type: 'category',
				data: namex
			},
			yAxis: {
				type: 'value'
			},
			series: [{
				data: seriesa,
				barWidth: 20,
				type: 'bar',
				markLine: {
					silent: true,
					data: [{
						yAxis: 65,
						lineStyle: {
							color: '#ff268c'
						},

					}]
				}
			}]
		};
		myBarChart2.setOption(myBaroption2);
	},
	error: function(errorMsg) {
		//请求失败时执行该函数
		alert("图表请求数据失败!");
		myBarChart2.hideLoading();
	}

});

var mylineChart1 = echarts.init(document.getElementById('Linemain1'), 'customed');
mylineChart1.showLoading(); //数据加载完之前先显示一段简单的loading动画
$.ajax({
	type: 'get',
	url: 'json.json', //请求数据的地址
	dataType: "json", //返回数据形式为json
	success: function(result) {
		//清空原有数组
		namex.splice(0, namex.length);
		legend.splice(0, legend.length);
		seriesa.splice(0, seriesa.length);
		seriesb.splice(0, seriesb.length);
		seriesc.splice(0, seriesc.length);
		seriesd.splice(0, seriesd.length);
		//请求成功时执行该函数内容,result即为服务器返回的json对象
		$.each(result.mylineChart1, function(index, item) {
			namex.push(item.namex); //挨个取出类别并填入类别数组(遍历输出X轴坐标值)
			legend.push(item.legend); //挨个取出类别并填入类别数组(遍历输出具体类别)
			seriesa.push(item.seriesa); //挨个取出并填入类别数组(遍历输出实际值)
			seriesb.push(item.seriesb);
			seriesc.push(item.seriesc);
			seriesd.push(item.seriesd);
		});

		mylineChart1.hideLoading(); //隐藏加载动画

		var mylineoption1 = {
			//				title: {
			//					text: '堆叠区域图'
			//				},
			tooltip: {
				trigger: 'axis',
				//					axisPointer: {
				//						type: 'cross',
				//						label: {
				//							backgroundColor: '#6a7985'
				//						}
				//					}
			},
			legend: {
				data: legend
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: namex,
				axisLine: {
					lineStyle: {
						color: '#ffffff',
					},
				},
			}],
			yAxis: [{
				type: 'value'
			}],
			series: [{
					name: legend[0],
					type: 'line',
					//						  areaStyle: {},
					data: seriesa,
					smooth: true
				},
				{
					name: legend[1],
					type: 'line',
					//						  areaStyle: {},
					data: seriesb,
					smooth: true
				},
				{
					name: legend[2],
					type: 'line',
					//						  areaStyle: {},
					data: seriesc,
					smooth: true
				},
				{
					name: legend[3],
					type: 'line',
					//						  areaStyle: {},
					data: seriesd,
					smooth: true
				}
			]
		};
		mylineChart1.setOption(mylineoption1);
	},
	error: function(errorMsg) {
		//请求失败时执行该函数
		alert("图表请求数据失败!");
		mylineChart1.hideLoading();
	}

});

var mypieChart1 = echarts.init(document.getElementById('Piemain1'), 'customed');
mypieChart1.showLoading(); //数据加载完之前先显示一段简单的loading动画
$.ajax({
	type: 'get',
	url: 'json.json', //请求数据的地址
	dataType: "json", //返回数据形式为json
	success: function(result) {
		//清空原有数组
		namex.splice(0, namex.length);
		legend.splice(0, legend.length);
		seriesa.splice(0, seriesa.length);
		seriesb.splice(0, seriesb.length);
		seriesc.splice(0, seriesc.length);
		seriesd.splice(0, seriesd.length);
		//请求成功时执行该函数内容,result即为服务器返回的json对象
		$.each(result.mypieChart1, function(index, item) {
			legend.push(item.legend); //挨个取出类别并填入类别数组(遍历输出具体类别)
			seriesa.push(item.seriesa); //挨个取出并填入类别数组(遍历输出实际值)
		});

		mypieChart1.hideLoading(); //隐藏加载动画
		var mypieoption1 = {
			title: {
				text: '产品直通率',
				textStyle: {
					fontSize: 18,
					fontFamily: '方正粗倩_GBK'
				},

			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				y: '40',
				data: legend
			},
			color: ['#2ec7c9', '#f3f3f3'],
			series: [{
				name: '产品直通率',
				type: 'pie',
				radius: ['50%', '70%'],
				center: ['50%', '60%'],
				avoidLabelOverlap: false,
				label: {
					normal: {
						show: false,
						position: 'center'
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '16',
							fontWeight: 'bold'
						}
					}

				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [{
						value: seriesa[0],
						name: legend[0]
					},
					{
						value: seriesa[1],
						name: legend[1]
					}
				]
			}]
		};
		mypieChart1.setOption(mypieoption1);
	},
	error: function(errorMsg) {
		//请求失败时执行该函数
		alert("图表请求数据失败!");
		mypieChart1.hideLoading();
	}

});
var myBarChart3 = echarts.init(document.getElementById('Barmain2'), 'customed');
myBarChart3.showLoading(); //数据加载完之前先显示一段简单的loading动画
$.ajax({
	type: 'get',
	url: 'json.json', //请求数据的地址
	dataType: "json", //返回数据形式为json
	success: function(result) {
		//清空原有数组
		namex.splice(0, namex.length);
		legend.splice(0, legend.length);
		seriesa.splice(0, seriesa.length);
		seriesb.splice(0, seriesb.length);
		seriesc.splice(0, seriesc.length);
		seriesd.splice(0, seriesd.length);
		//请求成功时执行该函数内容,result即为服务器返回的json对象
		$.each(result.myBarChart3, function(index, item) {
			namex.push(item.namex); //挨个取出类别并填入类别数组(遍历输出具体类别)
			seriesa.push(item.seriesa); //挨个取出并填入类别数组(遍历输出实际值)
		});

		myBarChart3.hideLoading(); //隐藏加载动画
		myBaroption3 = {
			title: {
				text: '不良原因分析',
				//					subtext: '数据来自网络'
				textStyle: {
					fontSize: 18,
					fontFamily: '方正粗倩_GBK'
				},
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			//				legend: {
			//					data: ['本月']
			//				},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'value',
				boundaryGap: [0, 0.01]
			},
			yAxis: {
				type: 'category',
				data: namex
			},
			series: [{
				//					name: '本月',
				type: 'bar',
				data: seriesa
			}]
		};
		myBarChart3.setOption(myBaroption3);
	},
	error: function(errorMsg) {
		//请求失败时执行该函数
		alert("图表请求数据失败!");
		myBarChart3.hideLoading();
	}

});
var myPieChart2 = echarts.init(document.getElementById('Piemain4'), 'customed');
myPieChart2.showLoading(); //数据加载完之前先显示一段简单的loading动画
$.ajax({
	type: 'get',
	url: 'json.json', //请求数据的地址
	dataType: "json", //返回数据形式为json
	success: function(result) {
		//清空原有数组
		namex.splice(0, namex.length);
		legend.splice(0, legend.length);
		seriesa.splice(0, seriesa.length);
		seriesb.splice(0, seriesb.length);
		seriesc.splice(0, seriesc.length);
		seriesd.splice(0, seriesd.length);
		//请求成功时执行该函数内容,result即为服务器返回的json对象
		$.each(result.myPieChart2, function(index, item) {
			legend.push(item.legend); //挨个取出类别并填入类别数组(遍历输出具体类别)
			seriesa.push(item.seriesa); //挨个取出并填入类别数组(遍历输出实际值)
		});

		myPieChart2.hideLoading(); //隐藏加载动画
		var myPieoption2 = {
			title: {
				text: '订单达成率',
				textStyle: {
					fontSize: 18,
					fontFamily: '方正粗倩_GBK'
					//						color:'#ffffff',
				},
			},
			color: ['#3bdce7', '#f3f3f3'],
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				y: '40',
				//					y:'30',
				data: legend
			},

			series: [{
				name: '订单达成率',
				type: 'pie',
				radius: ['50%', '70%'],
				center: ['50%', '55%'],
				avoidLabelOverlap: false,
				label: {
					normal: {
						show: false,
						position: 'center'
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '16',
							fontWeight: 'bold'
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [{
						value: seriesa[0],
						name: legend[0]
					},
					{
						value: seriesa[1],
						name: legend[1]
					}
				]
			}]
		};
		myPieChart2.setOption(myPieoption2);
	},
	error: function(errorMsg) {
		//请求失败时执行该函数
		alert("图表请求数据失败!");
		myPieChart2.hideLoading();
	}

});

var mylineChart2 = echarts.init(document.getElementById('Linemain2'), 'customed');
mylineChart2.showLoading(); //数据加载完之前先显示一段简单的loading动画
$.ajax({
	type: 'get',
	url: 'json.json', //请求数据的地址
	dataType: "json", //返回数据形式为json
	success: function(result) {
		//清空原有数组
		namex.splice(0, namex.length);
		legend.splice(0, legend.length);
		seriesa.splice(0, seriesa.length);
		seriesb.splice(0, seriesb.length);
		seriesc.splice(0, seriesc.length);
		seriesd.splice(0, seriesd.length);
		//请求成功时执行该函数内容,result即为服务器返回的json对象
		$.each(result.mylineChart2, function(index, item) {
			namex.push(item.namex); //挨个取出类别并填入类别数组(遍历输出X轴坐标值)
			legend.push(item.legend); //挨个取出类别并填入类别数组(遍历输出具体类别)
			seriesa.push(item.seriesa); //挨个取出并填入类别数组(遍历输出实际值)
			seriesb.push(item.seriesb);
		});

		mylineChart2.hideLoading(); //隐藏加载动画
		var mylineoption2 = {
			title: {
				text: '产品直通率',
				textStyle: {
					fontSize: 18,
					fontFamily: '方正粗倩_GBK'
				},
			},
			color: ['#3bdce7', '#ffff00'],
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: legend,
				x: 'right',
			},
			//  toolbox: {
			//      show: true,
			//      feature: {
			//          dataZoom: {
			//              yAxisIndex: 'none'
			//          },
			//          dataView: {readOnly: false},
			//          magicType: {type: ['line', 'bar']},
			//          restore: {},
			//          saveAsImage: {}
			//      }
			//  },
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: namex
			},
			yAxis: {
				type: 'value',
				axisLabel: {
					formatter: '{value}'
				}
			},
			series: [{
					name: legend[0],
					type: 'line',
					data: seriesa,
					//          markPoint: {
					//              data: [
					//                  {type: 'max', name: '最大值'},
					//                  {type: 'min', name: '最小值'}
					//              ]
					//          },
					//          markLine: {
					//              data: [
					//                  {type: 'average', name: '平均值'}
					//              ]
					//          }
				},
				{
					name: legend[1],
					type: 'line',
					data: seriesb,
					//          markPoint: {
					//              data: [
					//                  {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
					//              ]
					//          },
					//          markLine: {
					//              data: [
					//                  {type: 'average', name: '平均值'},
					//                  [{
					//                      symbol: 'none',
					//                      x: '90%',
					//                      yAxis: 'max'
					//                  }, {
					//                      symbol: 'circle',
					//                      label: {
					//                          normal: {
					//                              position: 'start',
					//                              formatter: '最大值'
					//                          }
					//                      },
					//                      type: 'max',
					//                      name: '最高点'
					//                  }]
					//              ]
					//          }
				}
			]
		};

		mylineChart2.setOption(mylineoption2);
	},
	error: function(errorMsg) {
		//请求失败时执行该函数
		alert("图表请求数据失败!");
		mylineChart2.hideLoading();
	}

});
window.addEventListener("resize", function() {
	myBarChart1.resize();
	myBarChart2.resize();
	myBarChart3.resize();
	mylineChart1.resize();
	mylineChart2.resize();
	mypieChart1.resize();
	myPieChart2.resize();

});

////每隔80毫秒获取浏览器宽高
//var interval4 = setInterval(function() {
//	//获取浏览器宽度
//	var width = $(window).width();
//	//获取浏览器高度
//	var height = $(window).height();
//	//给CLASS为LGCJKSH添加宽高
//	$(".LGCJKSH").css("width", "" + width + "");
//	$(".LGCJKSH").css("height", "" + height + "");
//}, 80);

//每隔80毫秒执行一次数据刷新
var interval3 = setInterval(function() {
	fnSearch();
}, 80);

function fnSearch() {
	var name1 = []; //时间
	var name2 = []; //班组
	var name3 = []; //加工人员
	var name4 = []; //工序/机台
	var name21 = []; //时间
	var name22 = []; //班组
	var name23 = []; //加工人员
	var name24 = []; //工序/机台
	$.ajax({
		type: 'get',
		url: 'json.json', //请求数据的地址
		dataType: "json", //返回数据形式为json
		success: function(result) {
			//请求成功时执行该函数内容,result即为服务器返回的json对象
			$.each(result.SHUJU1, function(index, item) {
				name1.push(item.name1);
				name2.push(item.name2);
				name3.push(item.name3);
				name4.push(item.name4);
			});
			$.each(result.SHUJU2, function(index, item) {
				name21.push(item.name21);
				name22.push(item.name22);
				name23.push(item.name23);
				name24.push(item.name24);
			});
			//<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
			var sz1=[];
			var sz2=[];
			var a="WCL";
			var b="WCL2";
			for(var i = 0; i <= name4.length - 1; i++) {
			if(name4[i]=="灯号异常"){
				  sz1.push(a);
				
			}else{
				  sz1.push(b);	
			}
			if(name24[i]=="温度异常"){
				  sz2.push(a);
				
			}else{
				  sz2.push(b);	
			}
			
			
			}
			var Pinchuan1 = "";
			var Pinchuan2 = "";
			if(name1.length < 4) {
				for(var i = 0; i <= name1.length - 1; i++) {
					Pinchuan1 += "<tr><td >" + name1[i] + "</td><td >" + name2[i] + "</td><td >" + name3[i] + "</td><td class="+ sz1[i] +" >" + name4[i] + "</td></tr>";
                    Pinchuan2 += "<tr><td >" + name21[i] + "</td><td >" + name22[i] + "</td><td >" + name23[i] + "</td><td class="+ sz2[i] +" >" + name24[i] + "</td></tr>";

				}
				var s = 4 - name1.length;
				for(var i = 0; i <= s - 1; i++) {
					Pinchuan1 += "<tr><td></td><td></td><td></td><td></td></tr>";
                    Pinchuan2 += "<tr><td></td><td></td><td></td><td></td></tr>";
				}

			} else if(name1.length = 4) {
				for(var i = 0; i <= name1.length - 1; i++) {
						Pinchuan1 += "<tr><td >" + name1[i] + "</td><td >" + name2[i] + "</td><td >" + name3[i] + "</td><td class="+ sz1[i] +" >" + name4[i] + "</td></tr>";
                        Pinchuan2 += "<tr><td >" + name21[i] + "</td><td >" + name22[i] + "</td><td >" + name23[i] + "</td><td class="+ sz2[i] +" >" + name24[i] + "</td></tr>";

				}

			} else {
				for(var i = 0; i <= 4 - 1; i++) {
						Pinchuan1 += "<tr><td >" + name1[i] + "</td><td >" + name2[i] + "</td><td >" + name3[i] + "</td><td class="+ sz1[i] +" >" + name4[i] + "</td></tr>";
                        Pinchuan2 += "<tr><td >" + name21[i] + "</td><td >" + name22[i] + "</td><td >" + name23[i] + "</td><td class="+ sz2[i] +" >" + name24[i] + "</td></tr>";
            }

			}
			$("#CHUANS1").html(Pinchuan1);
			$("#CHUANS2").html(Pinchuan2);

		},
		error: function(errorMsg) {
			//请求失败时执行该函数
			alert("数据请求失败失败!");

		}

	});

}