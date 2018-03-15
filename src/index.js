import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));//웹에 올리고 싶을때는 리엑트 돔, 어플일땐 리엑트 네이티브 즉 app이라는 클래스를 가지고 와서 인덱스 html에 있는 루트라는 아이디에 갖다붙이는것
registerServiceWorker();
