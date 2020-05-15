# admin-wu
> 后台管理系统模，包含动态：权限设计，组件布局，面包屑导航，axios封装类，工具类，

## 分支说明

- master分支：为通用模板，版本迭代增加配置，取用时候，去除相关不需要配置
- feature-zhongkewenge分支：为中科闻歌第一个项目



## treer生成项目目录树

treer -e test.txt -i "/node_modules|.git|.idea|dist|test.md/"

​	-e =>export 导出的简写，treer -e <导出路径/文件名>

​	-d =>默认的目录为当前的路径，可以通过`-d` 传入指定的路径.   treer -d <指定路径>

​	-i => 忽略文件。 treer -i <"文件名，支持正则表达式/regex/哦">







```
D:\workSpace\code\wu_code\gitProject\admin-wu 
├─.browserslistrc 
├─.postcssrc.js 
├─alias.config.js 
├─babel.config.js 
├─package-lock.json 
├─package.json 
├─README.md 
├─vue.config.js 
├─testDataJson 
|      ├─上汽售后项目 
|      |   └userinfo.json 
├─src 
|  ├─App.vue 
|  ├─index.less 
|  ├─main.js 
|  ├─views 
|  |   ├─system 
|  |   |   ├─userManage 
|  |   |   |     └index.vue  
|  |   |   ├─roleManage 
|  |   |   |     ├─index.scss 
|  |   |   |     └index.vue 
|  |   |   ├─menuManage 
|  |   |   |     ├─index.scss 
|  |   |   |     ├─index.vue 
|  |   |   |     └mockApi.js 
|  |   ├─single-page 
|  |   |      ├─home 
|  |   |      |  ├─home.vue 
|  |   |      |  └index.js 
|  |   ├─login 
|  |   |   └login.vue 
|  ├─store 
|  |   ├─index.js 
|  |   ├─module
|  |   |   ├─app.js
|  |   |   └user.js
|  ├─router
|  |   ├─before-close.js
|  |   ├─index.js
|  |   ├─menus.js
|  |   └routers.js
|  ├─mock
|  |  ├─data.js
|  |  ├─index.js
|  |  ├─login.js
|  |  ├─user.js
|  |  ├─data
|  |  |  ├─all.js
|  |  |  ├─all.txt
|  |  |  ├─info.js
|  |  |  ├─info.txt
|  |  |  ├─menus-res.js
|  |  |  ├─menus.txt
|  |  |  ├─org-data.js
|  |  |  ├─tree-select.js
|  |  |  └tsconfig.json
|  ├─locale
|  |   ├─index.js
|  |   ├─lang
|  |   |  ├─en-US.js
|  |   |  ├─zh-CN.js
|  |   |  └zh-TW.js
|  ├─libs
|  |  ├─api.request.js
|  |  ├─axios.js
|  |  ├─excel.js
|  |  ├─render-dom.js
|  |  ├─tools.js
|  |  └util.js
|  ├─config
|  |   └index.js
|  ├─components
|  |     ├─parent-view
|  |     |      ├─index.js
|  |     |      └parent-view.vue
|  |     ├─main
|  |     |  ├─index.js
|  |     |  ├─main.scss
|  |     |  ├─main.vue
|  |     |  ├─components
|  |     |  |     ├─side-menu
|  |     |  |     |     ├─index.js
|  |     |  |     |     ├─mixin.js
|  |     |  |     |     ├─side-menu-item.vue
|  |     |  |     |     ├─side-menu.scss
|  |     |  |     |     └side-menu.vue
|  |     ├─icons
|  |     |   ├─icons.vue
|  |     |   └index.js
|  |     ├─common-icon
|  |     |      ├─common-icon.vue
|  |     |      └index.js
|  ├─assets
|  |   ├─img
|  |   |  ├─edit.png
|  |   |  ├─logo.png
|  |   |  ├─notice.png
|  |   |  ├─sgmlogo.jpg
|  |   |  ├─side_logo.png
|  |   |  ├─uploading.gif
|  |   |  └user.png
|  |   ├─images
|  |   |   ├─icon-qr-qq-wechat.png
|  |   |   ├─icon-social-bilibili.svg
|  |   |   ├─icon-social-juejin.svg
|  |   |   ├─icon-social-twitter.svg
|  |   |   ├─icon-social-zhihu.svg
|  |   |   ├─login-bg.jpg
|  |   |   ├─logo-min.jpg
|  |   |   ├─logo.jpg
|  |   |   ├─talkingdata.png
|  |   |   ├─wu_login_bg.jpg
|  |   |   ├─error-page
|  |   |   |     ├─error-401.svg
|  |   |   |     ├─error-404.svg
|  |   |   |     └error-500.svg
|  |   ├─icons
|  |   |   ├─iconfont.css
|  |   |   ├─iconfont.eot
|  |   |   ├─iconfont.svg
|  |   |   ├─iconfont.ttf
|  |   |   └iconfont.woff
|  ├─api
|  |  ├─data.js
|  |  ├─login.js
|  |  ├─routers.js
|  |  ├─urlConfig.js
|  |  └user.js
├─public
|   ├─favicon.ico
|   └index.html
```