import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const name = 'yamasaki';
const str = 'こんにちは、世界!<br/>さようなら、私';
const url = 'https:// wings. msn. to/';
const style = {color: 'Red', backgroundColor: 'Yellow'};
const attrs ={
    src:'http://www.wings.msn.to/image/wings.jpg',
    alt:'',
    title:'Wings'
};
const tag = React.createElement(
    'div',
    {className:'main'},
    React.createElement(
        'h1',
        null,
        'ようこそ、${name}へ'
    ),
    React.createElement(
        'img',
        {src:'http:// www. wings. msn. to/ image/ wings. jpg'}
    ),
    'こんにちは、世界'
);
ReactDOM.render(
    <React.Fragment>
        <p>{tag}</p>
        <img {...attrs} />
        <p dangerouslySetInnerHTML={{__html: str}}></p>
        <a href={url}>サポート</a>
        <p style={style}>Wings</p>
        <p>こんにちは、{'$'+name+'$'}さん</p>
        <p>現在の日時は、{new Date().toLocaleString()}です</p>
        <p>2の3乗は、{2**3}です。</p>
    </React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
