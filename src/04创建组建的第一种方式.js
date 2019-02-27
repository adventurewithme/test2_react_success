
import React from 'react';//创建组建，虚拟DOM元素，生命周期
import ReactDom from 'react-dom';//把创建好的组件和虚拟DOM放到页面上展示
// 第一种创建组建的方式
function Hello(props) {
    //return null;//1、return 为null时，表示，此组建为空，什么都不渲染；
    // 2、在组建中必须返回一个合法的jsx虚拟dom元素
    console.log(props)
    console.log(users, 'users')
    return <div>this is hello com --{props.name}--{props.age}--{props.gender}
        {/* <p>{...user}</p> */}
    </div>
}

const user = {
    name: '点点',
    age: 5,
    gender: 'boy'
}
const users = {
    color: 'red',
    ...user
}
ReactDom.render(<div>1:
<Hello name={user.name} age={user.age} gender={user.gender} list={user}></Hello>
    2:
<Hello {...user}></Hello>
</div>, document.getElementById('app'))