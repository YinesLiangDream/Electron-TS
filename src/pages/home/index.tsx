import React, { Component, ComponentClass } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Button } from 'antd'
import './index.scss'
import httpApi from '../../api/home/index'

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
  recommendPlayList: Array<{
    id: number
    name: string
    picUrl: string
    playCount: number
  }>
}

type IProps = PageStateProps

interface home {
  props: IProps
}
class home extends Component<IProps, PageState> {
  componentDidMount () {
    // 监听store的变化 进行通知 然后重新渲染页面
    this.unsubscribes()
  }

  // 组件卸载要取消监听
  componentWillUnmount () {}

  changeCount (number: any) {
    console.log(number, 'number')
    // 这里只是store的state的改变，但是页面没有渲染
  }

  componentWillMount () {
    // this.unsubscribes()
  }

  async unsubscribes () {
    // const params = {
    //   tbAccount: '星星'
    // }
    // const res = await httpApi.examineTbAccount(params)
    // console.log(res, 'res')
    const params = {}
    const res = await httpApi.banner(params)
    this.setState(() => {
      return {
        bannerList: res.banners
      }
    })
    const resPlay = await httpApi.getRecommendPlay(params)
    this.setState(() => {
      return {
        recommendPlayList: resPlay.result
      }
    })
    console.log(this.state.recommendPlayList, 'resPlay')
  }

  unsubscribe () {}
  // 传给react状态管理
  constructor (props: any) {
    super(props)
    this.state = {
      // 搜索
      searchValue: '',
      // 轮播图
      bannerList: [],
      // 列表
      recommendPlayList: []
    }
  }

  render () {
    return (
      <div className="homex">
        <Button type="primary" onClick={this.unsubscribe}>
          <Link to="/setUp">跳转第二个页面</Link>
        </Button>
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
