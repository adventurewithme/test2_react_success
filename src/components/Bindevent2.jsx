import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
export default class Bindevent2 extends React.Component{
    constructor(){
        super();
        this.state={
msg:'aaa'
        }
    }
    render(){
        return <div>
            <button className='btn' onClick={ ()=>this.show()} >click</button>
            <h1>{this.state.msg}</h1>
        </div>
    }
    show(params) {
        // react中使用this.setState修改状态值
        this.setState({
            msg:'000'
        },function(){
            console.log(this.state.msg)
        })    
    }
    // show = ()=>{
    //     console.log('show')
    // }
}