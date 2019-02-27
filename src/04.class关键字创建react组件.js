import React from 'react';

class Movie extends React.Component{
    constructor(){
        super();
        // 先调用super(),才能使用this
        this.state={
            msg:'大家好'
        };

    }
    
    // render 渲染当前虚拟DOM对应的结构
    // 不论是class还是function 创建的组件，他们的props都是只读的

    render(){
        this.state.msg='大家好，我也好！';
        return <div>{this.props.name}---{this.props.age}---{this.state.msg}</div>
    }
}
export default Movie