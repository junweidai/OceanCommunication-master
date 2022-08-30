import React, { Component } from 'react'
import hotchart from './index.module.css'
import HotChart from '../../components/Echarts/hotchart'

export default class index extends Component {
  
  state = {
    xList: [], //所有横坐标
    yList: [], //所有纵坐标
    dataList: [], // 后端传递的真实数据
    count: 1,
  }

  constructor(props) {
    super(props);
  }
  

  componentDidMount(){
    // 定时播放
    setInterval(() => {this.changeData()}, 1000);
  }


  changeData = () => {
    let {count} = this.state
    let x = []
    let y = []
    let dataList = []

    let col_num = 50

    // 创建测试数据【需要接收后端数据】
    for (let i = 0 ; i < count ; i++){
      x.push('x-'+i)
    }

    for (let i = 0 ; i < col_num ; i++){
      y.push('y-'+i)
    }

    for (let i = 0 ; i < count ; i++){
      for (let j = 0 ; j < col_num ; j++){
        dataList.push([i, j, this.random(1,100)])
      }
    }

    if (count > 100){
      // 填满后需要移动显示 
    }

    this.setState({
      xList: x,
      yList: y,
      dataList: dataList,
      count: count + 1
    })

  }


  // 生成随机整数
  random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  
 
  render() {
    let {xList, yList, dataList} = this.state
    return (
      <div className={hotchart.container}>
        <HotChart xList={xList} yList={yList} data={dataList}/>
      </div>
    )
  }

}
