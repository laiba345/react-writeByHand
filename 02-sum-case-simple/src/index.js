import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 上面变成了root.render() 跟着进行书写即可，用于随时根据redux状态变化进行渲染
store.subscribe(() => {
  root.render(<App />, document.getElementById("root"));
});
