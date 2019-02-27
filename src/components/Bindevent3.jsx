import React from 'react';
export default class Bindevent3 extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: '哈哈'
        }
    }
    render() {
        return <div>
            {/* 如果我们只是把文本框的value属性，绑定到了state的状态，那么input就是一个只读的输入框 */}
            {/* 为input添加一个处理函数就可以了 */}
            {/* 若为input提供readOnly,则获取不到焦点 */}
            <input type="text" onChange={(e) => this.change(e)} value={this.state.msg} style={{ width: '100%' }} ref='aaa'/>
        </div>
    }
    //#region
    //#endregion
    change = (e) => {
        console.log(e.target.value,this.refs.value);
        this.setState({
            msg: e.target.value
        })
    }
    // change(e){
    //     console.log(e,'e')
    // }
}