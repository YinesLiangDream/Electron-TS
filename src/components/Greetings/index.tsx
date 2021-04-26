import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './index.scss';

export class Greetings extends Component {
  componentDidMount() {
    // 监听store的变化 进行通知 然后重新渲染页面
  }

  // 组件卸载要取消监听
  componentWillUnmount() {}

  changeCount(number: any) {
    // 这里只是store的state的改变，但是页面没有渲染
    console.log(number, 'number');
  }

  unsubscribe() {
    console.log('跳转第一个页面');
  }
  render() {
    return (
      <>
        <div className="Greetings">
          <div className="App-header">
            <h2>React 第四个页面</h2>
          </div>
          <Button type="primary" onClick={this.unsubscribe}>
            <Link to="/">跳转第一个页面</Link>
          </Button>
        </div>
      </>
    );
  }
}

export default Greetings;
