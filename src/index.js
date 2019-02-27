
import React from 'react';//创建组建，虚拟DOM元素，生命周期
import ReactDom from 'react-dom';//把创建好的组件和虚拟DOM放到页面上展示
// import  '@/07class的基本使用和静态方法'
import Movie from '@/04.class关键字创建react组件'
import List from '@/components/Cmlist'
import Bind from'@/components/Bindevent'
import Bindevent2 from '@/components/Bindevent2'
import Bindevent3 from '@/components/Bindevent3'
const user = {
    name: '点点',
    age: 5,
    gender: 'boy'
}
ReactDom.render(<div>
    <Movie {...user}></Movie>
    <List></List>
    <Bind></Bind>
    <Bindevent2></Bindevent2>
    <Bindevent3></Bindevent3>
</div>, document.getElementById('app'))
