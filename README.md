# My Electron Vue App

这是一个使用 Electron 和 Vue.js 构建的桌面应用程序。

## 项目介绍

这个项目是一个基于 Electron 和 Vue.js 的桌面应用程序。它使用 Vite 作为构建工具，并集成了 Element Plus UI 库。

## 目录结构

```
├─ dist                   # 存放构建后的应用文件
├─ dist-electron          # 存放 Electron 相关的构建文件
│ └─ main.js              # Electron 主进程文件
├─ electron               # Electron 相关文件
│ └─ main.js              # Electron 主进程文件
├─ release                # 存放发布版本
├─ src                    # 源代码目录
│ ├─ App.vue              # Vue 应用的根组件
│ └─ main.js              # Vue 应用的入口文件
├─ electron-builder.json  # Electron Builder 配置文件
├─ index.html             # 应用的 HTML 模板
├─ package.json           # 项目配置文件
├─ README.md              # 项目说明文件
└─ vite.config.js         # Vite 配置文件
```

## 使用方法

1. 克隆项目：

   ```bash
   git clone https://github.com/jijihome/electron-vue3.git
   ```

2. 安装依赖：

   ```bash
   cd my-electron-vue-app
   npm install
   ```

3. 启动开发服务器：

   ```bash
   npm run electron:dev
   ```

4. 打包应用：
   ```bash
   npm run electron:build
   ```

## 脚本说明

package.json 中定义了以下脚本：

- `npm run dev`: 启动 Vite 开发服务器
- `npm run build`: 构建 Vue 应用并使用 Electron Builder 打包
- `npm run preview`: 预览构建后的 Vue 应用
- `npm run electron:dev`: 并行运行 Vite 开发服务器和 Electron 应用
- `npm run electron:build`: 构建 Vue 应用并使用 Electron Builder 打包

## 依赖

主要依赖包括：

- Vue.js 3
- Electron
- Element Plus
- Vite
- Electron Builder

详细的依赖列表请查看 `package.json` 文件。

请根据需要修改项目名称和 GitHub 地址。
