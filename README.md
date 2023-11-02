<p align="center">
   <a>
      <img src="./logo.png"/>
   </a>
</p>
<!-- href="https://nlrx-wjc.github.io/react-antd-admin-template/" target="_blank" -->

一个轻量级 React18 后端管理模板，旨在快速搭建后端管理系统包含基础功能不做过渡封装，快速扩展

技术栈：

- react18
- react-router6
- zustand4
- vite4
- axios
- fakerjs、
- dayjs
  ......

支持的功能：

- [x] 登录/退出登录
- [x] 数据持久化存储
- [x] 路由鉴权
- [x] 动态主题
- [x] 错误处理
- [x] axios 封装

# 目录结构

```bash
├─ public                     # 静态资源
│   ├─ favicon.ico            # favicon图标
├─ src                        # 项目源代码
│   ├─ components             # 全局公用组件
│   ├─ layout                 # 布局组件
│   ├─ config                 # 全局配置
│   │   └─ router.tsx         # 路由配置
│   ├─ services               # api接口
│   ├─ stores                 # 全局 store管理
│   ├─ utils                  # 全局公用方法
│   ├─ pages                  # pages 所有页面
│   ├─ App.tsx                # 入口页面
│   ├─ global.d.ts            # 全局声明文件
│   ├─ index.css              # 全局样式文件
│   └─index.tsx               # 源码入口
└── .commitlintrc.js          # 自定义commitlint
└── .cz-config.js             # 自定义commitlint
└── .eslintignore             # eslint忽略文件
└── .eslintrc.js              # eslint配置
└── .prettierrc.js            # prettier配置
└── vite.config.js            # vite打包配置
└── index.html                # html模板
└── package.json              # package.json
```
