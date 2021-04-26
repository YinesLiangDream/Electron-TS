import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Carousel } from 'antd'
import './index.scss'

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

export class setUp extends Component {
  componentDidMount() {
    // 监听store的变化 进行通知 然后重新渲染页面
  }

  // 组件卸载要取消监听
  componentWillUnmount() {
  }

  changeCount(number: any) {
    // 这里只是store的state的改变，但是页面没有渲染
    console.log(number, 'number')
  }

  unsubscribe() {
    console.log('跳转第三个页面')
  }

  render() {
    return (
      <>
        <div className="setUp">
          <div className="App-header">
            <h2>React 第二个页面</h2>
          </div>
          <Button type="primary" onClick={this.unsubscribe}>
            <Link to="/Button" style={{ color: 'black' }}>跳转第三个页面</Link>
          </Button>
          {/* <Carousel autoplay>
            <div>
              <h3 style={{  color: 'black', lineHeight: '160px', }}>1</h3>
            </div>
          </Carousel> */}
        </div>
      </>
    )
  }
}

export default setUp
