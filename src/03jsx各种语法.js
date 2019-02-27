
import React from 'react';//创建组建，虚拟DOM元素，生命周期
import ReactDom from 'react-dom';//把创建好的组件和虚拟DOM放到页面上展示

const mydiv = <div id="div1" title="first div">div 大大大</div>
// const mydiv = React.createElement('div', { id: 'div1', title: 'first div' }, 'div 大大大');
const a = 10;
const t = true;
const title = 'div';
const h1 = <h1>enhahahah</h1>;
const arr = [
    <h1>this is h1</h1>,
    <h2>this is h2</h2>,
    <h3>this is h3</h3>
];
const arrs = ['a', 'b', 'c'];
ReactDom.render(<div>
    {a};
{a + 2};
{t ? "zhen" : "jia"};
{t.toString()};
<p title={title}>this is a p</p>;
{h1};
{arr};
{arrs};
{arrs.map(item => <h4 key={item}> {item}ss</h4>)};
<p className='p'>pppp</p>;
<label htmlFor="label">label</label>;
    
</div>, document.getElementById('app'))