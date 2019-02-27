import React from 'react';
import cssobj from '@/css/list.scss';
console.log(cssobj,'css2')
const style = {
    item: { border:'1px  dashed #ccc',margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc' },
    user:{fontSize:'14px'},
    content:{fontSize:'12px'}
}


// export default function Clist(props) {
//     return (<div style={style.item}> 
//         <div style={style.user}>评论人：{props.user}</div>
//         <div style={style.content}>评论内容：{props.content}</div>
//    </div>)
// }
export default function Clist(props) {
    return (
    <div style={style.item}>
        <div className={[cssobj.a,'test'].join(' ')}>评论人：{props.user}</div>
        <div style={style.content}>评论内容：{props.content}</div>
    </div>)
}

