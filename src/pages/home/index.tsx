// import React, { Component } from 'react'
import { Component, ComponentClass } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Button } from 'antd'
import './index.scss'
import httpApi from '../../api/home/index'
import React from 'react'

type PageStateProps = {
  counter: {
    num: number
  }
  recommendDj: Array<{
    name: string
    picUrl: string
  }>
  recommendNewSong: any
  recommend: any
}

type PageState = {
  // 搜索
  searchValue: string
  // 轮播图
  bannerList: Array<{
    typeTitlr: string
    imageUrl: string
    targetId: number
  }>
}

type IProps = PageStateProps

interface home {
  props: IProps
}
class home extends Component<IProps, PageState> {
  // export class home extends Component {
  componentDidMount() {
    // 监听store的变化 进行通知 然后重新渲染页面
    // this.unsubscribe = store.subscribe(() => {
    //   this.setState({
    //     count: store.getState().countInfo.count,
    //   });
    // });
  }

  // 组件卸载要取消监听
  componentWillUnmount() {
    // this.unsubscribe()
  }

  // changeCount () {
  changeCount(number: any) {
    console.log(number, 'number')
    // this.props.history.push('/Button')
    // 这里只是store的state的改变，但是页面没有渲染
    // store.dispatch(countAction.changeMore(number));
  }

  componentWillMount() {
    this.unsubscribe()
  }

  async unsubscribe() {
    const params = {}
    const res = await httpApi.login(params)
    console.log(res.banners, 'res')
    // this.setState({
    //   bannerList: res.banners
    // })
    this.setState(() => {
      return {
        bannerList: res.banners
      }
    })
    // console.log(this.state.bannerList, 'this.state.bannerList')
  }

  // 传给react状态管理
  constructor(props: any) {
    super(props)
    this.state = {
      // 搜索
      searchValue: '',
      // 轮播图
      bannerList: []
    }
  }

  render() {
    return (
      <div className="homex">
        {/* <Button type="primary" onClick={this.unsubscribe}>
          <Link to="/setUp">跳转第二个页面</Link>
        </Button> */}
        <div className="homex_head">
          <Carousel autoplay className="carousel">
            {this.state.bannerList.map((item) => (
              <div className="banner_list_item" key={item.targetId}>
                <img src={item.imageUrl} className="banner_list_item_img" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    )
  }
}

// export default home
export default home as ComponentClass<IProps, PageState>
