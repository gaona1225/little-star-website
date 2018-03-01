# 小金星幼儿园

> A React.js project

### 访问地址
```
localhost
```

### 运行程序 
```
npm install --save-dev
npm start     
http://localhost:5000/index
http://localhost:5000/list
http://localhost:5000/about

```

### 项目目录说明
```
.
|-- app                             // 项目源码管理
|   |-- about                       // 关于我们
|   |   |-- components              // 关于我们流程组件
|   |   |-- containers              // 关于我们流程页面
|   |-- common                      // 公共资源
|   |   |-- image                   // 小金星官网图片资源
|   |   |-- js                      // 小金星官网公共静态资源
|   |   |-- lib                     // 小金星官网使用第三方库
|   |   |-- style                   // 小金星官网使用公共样式
|   |-- components                  // 公共组件
|   |   |-- layout                  // 小金星官网使用公共布局类组件
|   |   |   |-- common              // 小金星官网使用公共布局类公共api资源
|   |-- home                        // 官网首页
|   |   |-- components              // 官网首页流程组件
|   |   |-- containers              // 官网首页流程页面
|   |-- news                        // 新闻流程
|   |   |-- components              // 新闻流程组件
|   |   |-- containers              // 新闻流程页面
|   |-- reducers                    // reducers管理
|   |-- routes                      // 单页应用路由管理
|   |-- views                       // url跳转多链接页面，区分react-router配置单页面内跳转切换
|   |   |-- about                   // 关于我们页面及首层静态资源
|   |   |-- data                    // 模拟数据
|   |   |-- index                   // 官网首页页面及首层静态资源
|   |   |-- list                    // 新闻页面及首层静态资源
|-- views                           // 项目webpack输出
|-- index.html                       // 项目默认入口页面
|-- webpack.config.js                // 程序打包配置
|-- server.js                        // 代理服务器配置
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建,npm start启动
.
```

### 页面说明
```
app/views                             // 小金星官网各页面--对应新url形式路由，页面会加载跳转的
/views/about                          // 小金星官网关于我们
/views/data                           // 小金星官网模拟数据
/views/index                          // 小金星官网首页
/views/list                           // 小金星官网新闻页
```

