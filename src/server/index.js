import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Router from '../containers/routers/index';
import Home from '../containers/components/Home';

const express = require('express');
const app = express();

//  使用express提供static中间件，static会将所有的静态文件的路由指向输入的文件夹，比如这里指向public
app.use(express.static('public'));

app.get('*', (req, res) => {
  console.log('当前访问路径--', req.path);
  //  react-dom提供renderToString方法，支持在服务端渲染react代码描述的html
  //  在服务端配置路由，需要使用 StaticRouter 来替代 客户端的 BrowserRouter
  //  req.path为当前路由，context为必填参数，用于服务端渲染参数
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Router></Router>
    </StaticRouter>
  );
  const noRouteContent = renderToString(<Home />)

  /**
   * CSR和SSR组合，实现一个基于 hydration（注水）
   * hydration 和同构应用中数据的获取和消费有关
   * 在服务端渲染时，首先服务端请求接口拿到数据，处理并准备好数据状态，如果使用Redux，就对store进行更新
   * 为了减少客户端请求，需要保留住这个状态，一般做法是在服务器返回HTML数据时，将数据 JSON.stringify 一并返回，这个过程叫做脱水 dehydrate
   * 客户端，直接使用服务端下发的数据，这个过程叫做注水 hydrate
   */

  res.send(`
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script type='script'>
          // window.context.initialState
          console.log('执行了吗--');
          window.context = {
            initialState: JSON.stringify({
              name: 'CSR和SSR实现hydration'
            })
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('Example React SSR demo listening on port 3000');
})
