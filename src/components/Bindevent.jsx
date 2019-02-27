import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
export default class Bind extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return <div>
            <h1>bind组件</h1>
            {/* 注意onclick只接受function 作为处理函数*/}
            {/* 箭头函数本身就是一个匿名的function函数 */}
            <button className='btn btn-success' onClick={this.myclickHandler} >click</button>
            <button className='btn btn-success' onClick={() => { this.myclickHandler()}} >click</button>
        </div>
    }
    myclickHandler(){//这是一个实例方法
        console.log('a')
    }
}
//#region
//aadd
//list
//#endregion


  