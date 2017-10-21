#### 目录说明
##### doc 项目相关文档，设计文档、UE、UI、开发计划等
##### src 源码目录
##### src/components 组件目录
##### src/client 浏览端前端代码
##### src/publish 发布端前端代码
##### src/server 后端代码
##### src/server/app 浏览端后端代码
##### src/server/mgt 发布端后端代码

###使用说明
    -1.初始化数据，执行blog.sql，数据库使用MySQL
        -1.1 数据库名称blog
        -1.2 用户root
        -1.3 密码root
        -1.4 host:localhost
    -2.安装node v6+
    -3.cd src目录下执行 npm install，安装依赖文件
    -4.一次启动服务
        -3.1 npm run server 后台服务
        -3.2 npm run pds 发布端前台
        -3.3 npm run cds 浏览端前台
