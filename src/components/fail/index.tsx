import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import './index.scss'

export class fail extends Component {

  // 组件卸载要取消监听
  componentWillUnmount() { }
  render() {
    return (
      <>
        <div className="fail">
          <div className="wscn-http404-container">
            <div className="wscn-http404">
              <div className="pic-404">
                <img
                  className="pic-404__parent"
                  src={require('../../../static/fail/parent.png')}
                />
                <img
                  className="pic-404__child left"
                  src={require('../../../static/fail/cloud.png')}
                />
                <img
                  className="pic-404__child mid"
                  src={require('../../../static/fail/cloud.png')}
                />
                <img
                  className="pic-404__child right"
                  src={require('../../../static/fail/cloud.png')}
                />
              </div>
              <div className="bullshit">
                <div className="bullshit__oops">哎呀网络加载失败!</div>
                <div className="bullshit__info">
                  请检查您输入的网址是否正确，或单击下面的按钮返回主页。{' '}
                </div>
                <Button type="primary">
                  <Link to="/">返回首页</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default fail
