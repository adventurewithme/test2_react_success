
import React from 'react';//创建组建，虚拟DOM元素，生命周期
import ReactDom from 'react-dom';//把创建好的组件和虚拟DOM放到页面上展示

import Hello from '@/components/Hello'
// 第一种创建组建的方式
const user = {
    name: '点点',
    age: 5,
    gender: 'boy'
}
const users = {
    color: 'red',
    ...user
}
ReactDom.render(<div>
    1:
 <Hello name={user.name} age={user.age} gender={user.gender} list={user}></Hello>
    2:
<Hello {...user}></Hello>
</div>, document.getElementById('app'))