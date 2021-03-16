import React from 'react';
import Header from './Header';

const Home = () => {
  console.log('Home运行--');
  return (
    <div className="home">
      <Header></Header>
      <h1>这是Home</h1>
      <div
        style={{
          display: 'flex'
        }}
      >
        <button
          onClick={() => {
            console.log('点击事件1');
          }}
        >
          按钮1
        </button>
        <button
          onClick={() => {
            console.log('点击事件2');
          }}
        >
          按钮2
        </button>
      </div>
    </div>
  );
};

export default Home;