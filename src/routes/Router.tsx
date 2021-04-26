import React from 'react'
// 引入路由内置组件
import { Route } from 'react-router-dom'

const RouterView = (props: any) => {
  // 函数组件得props属性
  // 获取路由配置表
  console.log(props.routes)
  for (const i in props.routes) {
    console.log(props.routes[i].path, 'props.routes')
  }

  // 一一对应关系  遍历
  return props.routes.map((item: any, index: any) => {
    // 路由对象   加载路由视图组件
    return (
      <Route
        key={index}
        path={item.path}
        render={(routeProps) => {
          // routeProps 路由元信息
          // 判断当前得路由对象是否存在子路由
          if (item.children) {
            // 存在路由嵌套    递归函数
            return <item.component {...routeProps} routes={item.children} />
          } else {
            // 不存在路由嵌套
            return <item.component {...routeProps} />
          }
        }}
      />
    )
  })
}
export default RouterView
