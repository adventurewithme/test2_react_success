import React from 'react';

import Clist from '@/components/func';

import cssobj from '@/css/list.scss';

import  'bootstrap/dist/css/bootstrap.css';
console.log(cssobj,'css')

 export default class Lists extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [
                { id: 1, user: '张三', content: '哈哈哈，沙发' },
                { id: 2, user: '赵四', content: '哈哈哈，板凳' },
                { id: 3, user: '王五', content: '哈哈哈，凉席' },
                { id: 4, user: '赵柳', content: '哈哈哈，砖头' },
                { id: 5, user: '田七', content: '哈哈哈，山炮' },
            ]
        }
    }

    render() {
        return (<div>
            <h1 className={cssobj.title}>这是评论组件</h1>
            <ul >
                {/* <button className={[bootcss.btn, bootcss['btn-primary']].join(' ')}>anniu</button> */}
                <button className='btn btn-primary'>anniu</button>
                {this.state.list.map(item =><Clist {...item} key={item.id}></Clist>)}
            </ul>
            
        </div>)
    }
}

