import React from 'react';
// import {Card} from 'antd';
//不是按需加载的话文件太大
//import echarts from 'echarts'
//下面是按需加载
//import echarts from 'echarts/lib/echarts'
//导入折线图
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
import { string } from 'prop-types';


export default class LineChart extends React.Component{

    getOption = () => {
        const {title, labels, sub_labels, values} = this.props
        //console.log(labels)
        //console.log(sub_labels)
        let option = {
            // Make gradient line here
            visualMap: [
              {
                show: false,
                type: 'continuous',
                seriesIndex: 0,
                min: 0,
                max: 200
              }
            ],
            title: [
              {
                left: 'center',
                text: title,
                textStyle: {
                  fontSize: 15,
                  lineHeight: 15
                },
              }
            ],
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: [values[0].name, values[1].name],
              right: '5%'
            },
            xAxis: [
              {
                type: 'category',
                position: 'bottom',
                boundaryGap: false,
                data: labels
              },
              {
                type: 'category',
                position: 'top',
                boundaryGap: false,
                data: sub_labels
              }
            ],
            yAxis: {type: 'value'},
            grid: {
                top: '30%',
                left: '30px',
                right: '30px',
                bottom: '15%'
            },
            series: [
              {
                type: 'line',
                showSymbol: false,
                name: values[0].name,
                data: values[0].value,
                itemStyle : {  
                    normal : {
                        color:'red',  
                        lineStyle:{  
                            color:'red'  
                        }  
                    }  
                },  
              },
              {
                type: 'line',
                showSymbol: false,
                name: values[1].name,
                data: values[1].value,
                itemStyle : {  
                  normal : {
                      color:'green',  
                      lineStyle:{  
                          color:'green'  
                      }  
                  }  
              },  
              }
            ]
          };
        return option
    }
  
    render(){
      let {height} = this.props
      let chartHeight = height + 'px'
      return(
        <div>
          <div style={{width: '100%', height: chartHeight}}>
              <ReactEcharts option={this.getOption()} theme="Imooc"  style={{width: '100%', height:'100%'}}/>
          </div>
        </div>
      )
    }
  }
  