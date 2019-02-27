import React from 'react'


function Hello(props) {
    //return null;//1、return 为null时，表示，此组建为空，什么都不渲染；
    // 2、在组建中必须返回一个合法的jsx虚拟dom元素
    console.log(props)
    // console.log(users, 'users')
    return <div>this is hello com --{props.name}--{props.age}--{props.gender}
        {/* <p>{...user}</p> */}
    </div>
}
// 把组件暴漏出去
export default Hello;