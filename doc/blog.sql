/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50549
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50549
File Encoding         : 65001

Date: 2017-10-21 11:41:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `userName` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `pwd` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `userId` bigint(20) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('admin', '123', '0');

-- ----------------------------
-- Table structure for `author`
-- ----------------------------
DROP TABLE IF EXISTS `author`;
CREATE TABLE `author` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of author
-- ----------------------------
INSERT INTO `author` VALUES ('1', '名称', 'zxover');
INSERT INTO `author` VALUES ('2', '专业', 'web前端');
INSERT INTO `author` VALUES ('3', '手机', '18388888888');
INSERT INTO `author` VALUES ('4', '邮箱', '1@163.com');
INSERT INTO `author` VALUES ('5', '简介', '除了帅气以外再也没有拿得出手的技术了');

-- ----------------------------
-- Table structure for `banner`
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `href` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES ('1', 'gHVrbTwRgOg_xcOTstwWqJWs.jpg', 'http://ad.jikexueyuan.com/v1/code_slot/27/creative/43/redirect?delivery_ad_id=40&_t=1508510103');

-- ----------------------------
-- Table structure for `comment`
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `commentId` int(11) NOT NULL AUTO_INCREMENT,
  `contentId` int(11) NOT NULL DEFAULT '0',
  `critics` varchar(255) NOT NULL,
  `dateTime` bigint(20) NOT NULL,
  `markCount` int(11) NOT NULL DEFAULT '0',
  `content` longtext NOT NULL,
  `userMarked` longtext,
  PRIMARY KEY (`commentId`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '1', 'zx', '1497075762689', '0', '你说了什么？？？', null);
INSERT INTO `comment` VALUES ('2', '1', 'zx', '1497075762689', '0', '你说了什么？？？', null);
INSERT INTO `comment` VALUES ('3', '1', 'zx', '1497075762689', '0', '你说了什么？？？', null);
INSERT INTO `comment` VALUES ('4', '1', 'zx', '1497075762689', '0', 'zxover~~', null);
INSERT INTO `comment` VALUES ('5', '1', 'zx', '1497075762689', '0', 'zzz', null);
INSERT INTO `comment` VALUES ('6', '1', 'zx', '1497075762689', '0', 'zx', null);
INSERT INTO `comment` VALUES ('7', '1', 'zx', '1497075762689', '0', '??', null);
INSERT INTO `comment` VALUES ('8', '1', 'zx', '1497075762689', '0', 'zz', null);
INSERT INTO `comment` VALUES ('9', '1', 'zx', '1497075762689', '0', 'z', null);
INSERT INTO `comment` VALUES ('10', '1', 'zx', '1497075762689', '1', 'z', 'null,1');
INSERT INTO `comment` VALUES ('11', '1', 'zx', '1497075762689', '1', 'z', 'null,1');
INSERT INTO `comment` VALUES ('12', '1', 'zx', '1497075762689', '0', 'lzy', null);
INSERT INTO `comment` VALUES ('13', '1', 'zx', '1497075762689', '0', 'zx', null);
INSERT INTO `comment` VALUES ('14', '7', 'zx', '1497075762689', '0', '1', null);
INSERT INTO `comment` VALUES ('15', '6', 'zx', '1497075762689', '0', '1', null);
INSERT INTO `comment` VALUES ('16', '7', 'zx', '1497075762689', '0', '1', null);
INSERT INTO `comment` VALUES ('17', '7', 'zx', '1497075762689', '0', '1', null);
INSERT INTO `comment` VALUES ('18', '7', 'zx', '1497075762689', '0', '1', null);
INSERT INTO `comment` VALUES ('19', '3', 'zx', '0', '1', 'z', 'null,1');

-- ----------------------------
-- Table structure for `content`
-- ----------------------------
DROP TABLE IF EXISTS `content`;
CREATE TABLE `content` (
  `contentId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `dateTime` bigint(255) NOT NULL,
  `markCount` int(10) unsigned DEFAULT '0',
  `browserCount` int(10) unsigned DEFAULT '0',
  `userMarked` longtext,
  `type` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  `commentCount` int(11) DEFAULT '0',
  PRIMARY KEY (`contentId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of content
-- ----------------------------
INSERT INTO `content` VALUES ('4', '用 Nuxt 开发部署一个 v2ex', '先放出Github地址：github.com/OrangeXC/n2…\r\n\r\n里面有线上网站的链接，因为链接随时可能变，在这里不直接给网站链接。\r\n\r\n之前写过一篇 nuxt 入门级的文章 Vue 基于 NUXT 的 SSR，主要说一下 nuxt 是什么，以及为什么使用。\r\n\r\n这里声明一下，不建议去阅读上一篇文章，因为当时写博文的时候是 0.8.0 版本，目前是 1.0.0alpha4，已经有一部分改动，建议去看最新的nuxt文档\r\n\r\n了解 nuxt 后，就可以轻松的看下文了，简单易懂，也没写什么复杂的项目。\r\n\r\n本着自己学习的目的分享给大家，因为上篇文章之后有好多读者问 orange，怎么开发，怎么部署到服务器。\r\n\r\n下面进入正题\r\n\r\n环境搭建\r\n\r\nnuxt 相关的脚手架已经集成到了 vue-cli，同时提供 starter、express、koa、adonuxt\r\n\r\n这里我们用的是 koa2（脚手架会询问使用 koa1 或 koa2）\r\n\r\nvue init nuxt/koa <project-name>\r\ncd <project-name> # move to your project\r\nnpm install # or yarn install*[see note below]\r\nnpm run dev\r\n此时监听 3000 端口，如果有 bug，别犹豫，先升级 node 版本到最新。\r\n项目跑起来之后，有一个简单的轮廓，两个页面，index 和 about。\r\n\r\nv2ex API\r\n\r\n写一个三方 API 项目时，首先要看看人家都支持什么 API，才能决定我们如何展示页面。\r\n\r\n来看看官方 API 文档\r\n\r\n这个文档说来仔细，但是仅仅提供了 4 个 API，对于我们来说远远不够，那本站的 API 从哪里来的呢\r\n\r\nGithub 的确是个好网站，我找到了这个项目下的一个文件：github.com/ochapman/v2…\r\n\r\n不会 go 语言的没关系，我也不熟悉 go 语言，读一读会发现给出了比官方文档更多的 API，当然还有更详细的 API 暂且不谈。\r\n\r\n本项目取的就是这个文件里（隐藏）的 API\r\n\r\n热门话题\r\n最新话题\r\n节点列表\r\n节点信息\r\n话题详情\r\n话题评论\r\n用户详情\r\n用户话题\r\n我们也就实现了上面列表这么多接口的前端展示\r\n\r\n路由结构\r\n\r\nnuxt 的特点之一就是以目录结构划分路由。\r\n\r\nrouter 由 pages 目录决定，那么分析接口可以得到以下目录结构\r\n\r\npages\r\n  |\r\n  |-- member\r\n  |    |\r\n  |    |-- _name.vue\r\n  |\r\n  |-- node\r\n  |    |\r\n  |    |-- _name.vue\r\n  |\r\n  |-- topic\r\n  |   |\r\n  |   |-- _id.vue\r\n  |\r\n  |-- index.vue\r\n  |\r\n  |-- new.vue\r\n很清晰的可以看出我们的路由结构，细心的会发现 params 有的是 name 有的是 id，为什么？\r\n\r\n这里详细解释下，v2ex 接口提供了 id 和 name 两种 url 传参形式，任何一种查询都可以匹配结果，唯独 topic 只能 id 查询，因为 name 不唯一，那用户和节点也提供了 id 查询啊，这里的坑就在评论的 @ 部分，当 @ 一个人时，在评论可以直接链到个人详情页，v2ex 在评论里默认解析的就是 username 对应的链接，所以为了统一，其它地方也用的 name，另外无形当中提供了 search，在对应 url 后面替换成要查找的节点或用户名就可以直接跳转过去。\r\n组件\r\n\r\n这里只说两个最应该抽离的业务组件\r\n\r\n话题 list\r\n评论 list\r\n话题 list 几乎每个列表页面里都有，而评论 list 在每个详情页里都有\r\n\r\n基础组件用的是 muse-ui，比较喜欢 Material 整体的设计风格，刚好在 muse-ui 的 2.0.3 版本支持了 SSR。\r\n\r\n下面说下引入三方库相关的问题\r\n\r\n引入三方库\r\n\r\nmuse-ui 建议使用 plugins 的方式引入，因为涉及到 Vue.use 挂载方法\r\n\r\n在 plugins 下新建 muse-ui.js 如下\r\n\r\nimport Vue from \'vue\'\r\nimport MuseUI from \'muse-ui\'\r\nVue.use(MuseUI)\r\n然后在 nuxt.config.js 里面加上\r\n\r\nplugins: [\r\n  { src: \'~plugins/muse-ui.js\', ssr: true }\r\n]\r\n另外值得注意的是，需要全局引入 google 字体库，这里我直接插入到了 head 的 link 标签里\r\n\r\nlink: [\r\n  { rel: \'stylesheet\', href: \'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic\' },\r\n  { rel: \'stylesheet\', href: \'https://fonts.googleapis.com/icon?family=Material+Icons\' }\r\n]\r\nhttp 请求用的是前后端同构的 axios 库\r\n\r\n打包的时候注意要在配置文件加进去\r\n\r\nbuild: {\r\n  vendor: [\'axios\']\r\n}\r\n异步请求\r\n\r\nnuxt 提供了 asyncData，可以在页面加载之前请求数据。\r\n\r\n在这里使用 es7 的 async/await 来实现数据请求\r\n\r\n例如：pages/index.vue\r\n\r\nasync asyncData () {\r\n  try {\r\n    const { data } = await axios.get(`https://proxy-uuptfgaypk.now.sh/topics/hot.json`)\r\n    return {\r\n      hotList: data\r\n    }\r\n  } catch (err) {\r\n    console.error(err)\r\n  }\r\n}\r\n可读性还是挺高的，请求回来的 object，取到里面的 data 赋值给 hotList，省去了 .then 的操作\r\n\r\n在详情页需要同时得到话题详细内容和评论，走的是两个接口\r\n\r\n那么问题来了，怎么才能同时请求多个资源，当多个资源全部请求完成时才返回。\r\n\r\nawait 只能顺次请求，promis + await ？？？\r\n\r\n不不不，只要 promis 的 all 方法就可以了，axios 有相应的封装\r\n\r\nasyncData ({ params, error }) {\r\n  return axios.all([\r\n    axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?id=${params.id}`),\r\n    axios.get(`https://proxy-uuptfgaypk.now.sh/replies/show.json?topic_id=${params.id}`)\r\n  ])\r\n  .then(axios.spread(function (detail, comments) {\r\n    return {\r\n      detail: detail.data[0],\r\n      comments: comments.data\r\n    }\r\n  }))\r\n  .catch(error => console.log(error))\r\n}\r\n这样一来解决了同时请求多个接口的问题。\r\n\r\nCORS\r\n\r\n跨域 http 请求，在这里不详细解释，给大家 MDN 链接\r\n\r\n细心的小伙伴发现上文代码的 url 是 http://proxy...，为什么不是官方给的 https://www.v2ex.com/api\r\n\r\n那是因为跨域请求时浏览器限制请求跨域资源，正常走官方的请求会报错，信息如下\r\n\r\nXMLHttpRequest cannot load https://www.v2ex.com/api/topics/latest.json. No \'Access-Control-Allow-Origin\' header is present on the requested resource. Origin \'localhost:3000\' is therefore not allowed access.\r\n报错很明显没有 Access-Control-Allow-Origin 返回头，打开控制台发现有数据返回，但是被浏览器拦截了，并没有加载到页面中去\r\n\r\n初次玩服务端渲染的还会遇到的问题就是我什么首屏刷新不会报错，而路由跳转的请求会报错呢？\r\n\r\n这要从服务端渲染机制说起，首屏的请求是在服务端完成，服务端不存在跨域问题，而接下来的交互操作和页面跳转是在浏览器端进行，所以产生了类似的问题。够简单直接吧，不相信的可以自己打 console，看是在终端控制台输出还是浏览器控制台输出。\r\n找到了问题接下来就需要解决问题，上面有说在服务端不存在跨域请求的问题。\r\n\r\n那么我们就自己写一层 proxy 就好啦，写一个 node 服务，转发请求，然后在返回头里加上，Access-Control-Allow-Origin: *\r\n\r\n这个服务实际上不到十行的代码，用到两个依赖，express 和 request\r\n\r\nconst express = require(\'express\')\r\nconst request = require(\'request\')\r\nconst app = express()\r\napp.use(\'/\', function(req, res) {\r\n  const url = \'https://www.v2ex.com/api\' + req.url\r\n  req.pipe(request(url)).pipe(res.set(\'Access-Control-Allow-Origin\', \'*\'))\r\n})\r\napp.listen(process.env.PORT || 3001)\r\n开发环境下先启动代理服务，然后将 url 指向本地服务就可以了\r\n\r\n上面的方法呢，说实话有点蠢，实际项目当中呢可以直接让后端返回的接口支持跨域，当然了任何人都可以使用你们的 API，不是十分合理\r\n\r\n再有就是 nuxt 官方有个 modules 组件库不知道大家有没有注意，地址：github.com/nuxt/module…\r\n\r\n里面其中有 axios 和 proxy 的封装，意在解决 axios 的 baseUrl 和 proxy 跨域限制，安装配置都十分方便，本次为什么没用？\r\n\r\n好问题，因为存在未知的坑，代码没有丝毫报错，就是不生效，只能静等 nuxt 官方修复主库与插件之间的 bug。\r\n\r\n部署\r\n\r\n怎么部署是大家最关心的问题，项目倒是好写，只要你会 vue 看看文档就可以写。\r\n\r\n部署实际上官方提供了两个命令，打包和运行\r\n\r\nnpm run build\r\nnpm start\r\n这里需要一个安装了 node 的服务器，可以安装一个 pm2 来跑 node 服务\r\n\r\n当然喜欢 docker，也可以用 docker 去部署\r\n\r\n之前又有人问了，看了这两个东西，依旧不会部署，那我也无能为力了，只能说，科学上网，教程一大堆。\r\n\r\n如果就是想跑一个自己的 DEMO 玩玩，不想单独买服务器，也不涉及到企业项目部署和安全问题\r\n\r\n那么好！给两个可以免费跑 node 服务的供应商 heroku 和 now.sh\r\n\r\nnuxt 项目怎么如何跑在这两个服务上官网有写 zh.nuxtjs.org/faq/heroku-…\r\n\r\n本项目是跑在 now.sh 上的，这也就解释了为什么说这个在线链接打开速度超级慢，因为我们用的是三方的免费服务，为了提高服务器资源的利用率，减小服务器压力，当一段时间没人访问网站时，会自动把网站设置为 frozen\r\n\r\nThe deployment n2ex-yrgirchtae.now.sh was frozen\r\nThe deployment proxy-uuptfgaypk.now.sh was frozen\r\nThe deployment n2ex-nzkjwvytxe.now.sh was unfrozen\r\n这是我控制台的最新报告，当有人访问时会切换到 unfrozen，算了下默认 frozen 时间是 15min 内无访问后。\r\n\r\n不知道 heroku 是不是也有类似问题\r\n\r\n未来\r\n\r\n这个项目会持续更新，逐步加新的功能，大家感兴趣的可以提 issue，或者直接提 pr 给我。\r\n\r\n总结\r\n\r\n从项目分析到开发部署上线，一个 nuxt 项目就这样完成了，开发遇到的坑也随着项目递进渗透进去了，项目十分简单，没使用 vuex，写到这里，依旧不推荐大家深入使用，但是十分推荐玩一玩，抛开了 SSR 复杂的那一面，用着还是挺爽的。', '1508552828650', '0', '2', null, 'JavaScript', 'JyEwiDCn9kNBVtvc9RvAr5uP.png', '0');
INSERT INTO `content` VALUES ('5', '深入理解BFC原理及应用', 'Block Formatting Context，中文直译为块级格式上下文。BFC就是一种布局方式，在这种布局方式下，盒子们自所在的containing block顶部一个接一个垂直排列，水平方向上撑满整个宽度（除非内部盒子自己建立了新的BFC）。两个相邻的BFC之间的距离由margin决定。在同一个BFC内部，两个垂直方向相邻的块级元素的margin会发生“塌陷”。\r\n\r\n文档这里也间接指出了垂直相邻盒子margin合并的解决办法：就是给这两个盒子也创建BFC。\r\n\r\n通俗一点，可以把BFC理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。\r\n\r\n如何创建BFC\r\n\r\n再来看一下官方文档怎么说的\r\n\r\nFloats, absolutely positioned elements, block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes, and block boxes with \'overflow\' other than \'visible\' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.\r\n总结一下就是：\r\n\r\nfloat属性不为none\r\noverflow不为visible(可以是hidden、scroll、auto)\r\nposition为absolute或fixed\r\ndisplay为inline-block、table-cell、table-caption\r\nBFC的作用\r\n\r\n1. 清除内部浮动\r\n我们在布局时经常会遇到这个问题：对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为0。解决这个问题，只需要把把父元素变成一个BFC就行了。常用的办法是给父元素设置overflow:hidden。\r\n2. 垂直margin合并\r\n在CSS当中，相邻的两个盒子的外边距可以结合成一个单独的外边距。这种合并外边距的方式被称为折叠，并且因而所结合成的外边距称为折叠外边距。\r\n折叠的结果：\r\n\r\n两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。\r\n两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。\r\n两个外边距一正一负时，折叠结果是两者的相加的和。\r\n这个同样可以利用BFC解决。关于原理在前文已经讲过了。\r\n3. 创建自适应两栏布局\r\n在很多网站中，我们常看到这样的一种结构，左图片+右文字的两栏结构。\r\n\r\n//CSS\r\n*{\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .box {\r\n        width:300px;\r\n        border: 1px solid #000;\r\n    }\r\n    .img {\r\n        float: left;\r\n    }\r\n    .info {\r\n        background: #f1f1f1;\r\n        color: #222;\r\n    }\r\n//HTML\r\n<div class=\"box\">\r\n        <img src=\"03.jpg\" alt=\"\" class=\"img\">\r\n        <p class=\"info\">信息信息信息信息信息信息</p>\r\n    </div>\r\n\r\n\r\n显然，这是文字受到了图片浮动的影响。当然，如果你想做文本绕排的效果，浮动是不二之选。不过在这里，这显然不是我们想要的。此时我们可以为P元素的内容建立一个BFC，让其内容消除对外界浮动元素的影响。给文字加上overflow:hidden\r\n', '1508553179550', '0', '5', null, 'css', 'tDJrvdYVdsZ4Mk6aAUF-yDfp.jpg', '0');
INSERT INTO `content` VALUES ('6', 'HTML 5中又新增加main标签', 'HTML 5新增加的标签元素已经够多的了，在2013年2月份，又增加了<main>标签，参考： \r\nhttp://www.w3.org/html/wg/drafts/html/master/grouping-content.html#the-main-element \r\n\r\n  其中定义如下： \r\nThe main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application. \r\n\r\nAuthors must not include more than one main element in a document. \r\n\r\nAuthors must not include the main element as a child of an article, aside, footer, header or nav element \r\n\r\n   也就是说，它是表达了document中的body的主要内容，但不能在一个document中有多个main,不能在article,aside,footer,header或者nav中包含main.', '1508557154696', '0', '0', null, 'html5', '3YeLP3UNoxhYwTc5etqigPIM.jpg', '0');
INSERT INTO `content` VALUES ('7', 'node.js之path模块', 'node之path模块\r\n\r\n//引用该模块\r\nvar path = require(\"path\");\r\n1、路径解析，得到规范化的路径格式\r\n\r\n//对window系统，目录分隔为\'\\\', 对于UNIX系统，分隔符为\'/\'，针对\'..\'返回上一级；/与\\\\都被统一转换\r\n//path.normalize(p);\r\n\r\nvar myPath = path.normalize(__dirname + \'/test/a//b//../c/utilyou.mp3\');\r\nconsole.log(myPath); //windows: E:\\workspace\\NodeJS\\app\\fs\\test\\a\\c\\utilyou.mp3\r\n2、路径结合、合并，路径最后不会带目录分隔符\r\n\r\n//path.join([path1],[path2]..[pathn]);\r\n/**\r\n * [path1] 路径或表示目录的字符，\r\n */\r\n\r\nvar path1 = \'path1\',\r\n    path2 = \'path2//pp\\\\\',\r\n    path3 = \'../path3\';\r\n\r\nvar myPath = path.join(path1, path2, path3);\r\nconsole.log(myPath); //path1\\path2\\path3\r\n3、获取绝对路径\r\n\r\n//path.resolve(path1, [path2]..[pathn]);\r\n\r\n//以应用程序为起点，根据参数字符串解析出一个绝对路径\r\n\r\n/**\r\n * path 必须至少一个路径字符串值\r\n * [pathn] 可选路径字符串\r\n */\r\n\r\nvar myPath = path.resolve(\'path1\', \'path2\', \'a/b\\\\c/\');\r\nconsole.log(myPath);//E:\\workspace\\NodeJS\\path1\\path2\\a\\b\\c\r\n4、获取相对路径\r\n\r\n//path.relative(from, to);\r\n//获取两路径之间的相对关系\r\n\r\n/**\r\n * from 当前路径，并且方法返回值是基于from指定到to的相对路径\r\n * to   到哪路径，\r\n */\r\n\r\nvar from = \'c:\\\\from\\\\a\\\\\',\r\n    to = \'c:/test/b\';\r\n\r\nvar _path = path.relative(from, to);\r\nconsole.log(_path); //..\\..\\test\\b; 表示从from到to的相对路径\r\n5、path.dirname(p)\r\n\r\n// 获取路径中目录名\r\n\r\nvar myPath = path.dirname(__dirname + \'/test/util you.mp3\');\r\nconsole.log(myPath);\r\n6、path.basename(path, [ext])\r\n\r\n// 获取路径中文件名,后缀是可选的，如果加，请使用\'.ext\'方式来匹配，则返回值中不包括后缀名；\r\n\r\nvar myPath = path.basename(__dirname + \'/test/util you.mp3\', \'.mp3\');\r\nconsole.log(myPath);\r\n7、path.extname(path)\r\n\r\n//获取路径中的扩展名，如果没有\'.\'，则返回空\r\n8、path.sep属性\r\n\r\n//返回操作系统中文件分隔符； window是\'\\\\\', Unix是\'/\'\r\n9、path.delimiter属性\r\n\r\n//返回操作系统中目录分隔符，如window是\';\', Unix中是\':\'\r\n\r\n作者：明明三省\r\n链接：http://www.jianshu.com/p/fe41ee02efc8\r\n來源：简书\r\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。', '1508553820608', '0', '0', null, 'nodeJs', 'fHutTO-H5MewfgLeZAeT6E6K.jpg', '0');
INSERT INTO `content` VALUES ('8', '面试分享：一年经验初探阿里巴巴前端社招', '虽然没想着换工作，但是经常关注一些招聘网站的信息，某一天，在某boss上有个人找我，叫我发一下简历，我一看是阿里的某技术专家，虽然之前也有阿里的在某boss上给我要简历，但是我深知自己经验不足，然后给boss说我是16届的，只有一年经验，然后就没有然后了。这次我依然这么回复，但是这boss说，没关系，他喜欢基础好的，让我可以试一试，于是我也抱着试一试的心态发了简历。\r\n\r\n简历发过去之后，boss就给我打了电话，让我简单的介绍一下自己，我就噼里啪啦说了一些，还说了一些题外话。然后boss就开始问我问题。\r\n\r\n由于面了四轮，所以最开始的面试记忆有点模糊了，细细回想，又感觉记忆犹新。\r\n\r\n电话初探\r\n\r\n说一下你了解CSS盒模型。 \r\n我就说了一下IE的怪异盒模型和标注浏览器的盒模型，然后可以通过box-sizing属性控制两种盒模型的变换。\r\n说一下box-sizing的应用场景。 \r\n这个也不难，简单说了一两个应用场景，具体就不一一细说了。\r\n说一下你了解的弹性FLEX布局. \r\n这个我也比较了解，各种概念和属性能想到的说了一大堆，也扯到了Grid布局，基本这个也没啥问题。\r\n说一下一个未知宽高元素怎么上下左右垂直居中。 \r\n说了一下flex弹性布局的实现，说了一下兼容性，扯到了postcss的一些东西，然后说了一下常规的兼容性比较好的实现。\r\n说一下原型链，对象，构造函数之间的一些联系。 \r\n这个我之前写过相关的文章，自己也有比较深入的理解，所以这个也不在话下，噼里啪啦说了一大堆，也不知道面试官听得咋样。\r\nDOM事件的绑定的几种方式 \r\n说了三种，然后说了一些冒泡，默认事件，以及DOM2，DOM3级的一些标准。\r\n说一下你项目中用到的技术栈，以及觉得得意和出色的点，以及让你头疼的点，怎么解决的。 \r\n这个因人而异，开放性问题，主要考察平时项目的一些积累吧，这个我回答感觉也比较ok。\r\n有没有了解http2.0,websocket,https，说一下你的理解以及你所了解的特性。 \r\n这个我看过一些文章，但是没有什么印象，扯了一些概念，但是回答的不是很深。\r\n第一轮电话初探，大约面了50分钟，就记起来这么多，还有一些细节问题可能淡忘了，总体来说，面的都是以基础为主，然后boss说把我简历推荐给内部，进行正式的社招流程。\r\n\r\n一轮技术面\r\n\r\n然后当天晚上一个女的面试官就给我打电话了，说八点半进行下一轮技术面试，没想到效率这么快，我都没怎么准备。这次就直接省略自我介绍了。\r\n\r\nwebpack的入口文件怎么配置，多个入口怎么分割啥的，我也没太听清楚。 \r\n这个自己就说了一下自己的理解，以及自己用node写的多入口怎么配置，然后面试官说不是多入口配置，然后我又说了一下自己的理解，然后这题就过了。\r\n我看到你的项目用到了Babel的一个插件：transform-runtime以及stage-2，你说一下他们的作用。 \r\n这个我也还算比较了解，就说了一下ES的一些API，比如generator啥的默认不转换，只转换语法，需要这个来转换，然后说profill啥的，扯了一下stage-1，stage-2，stage-3，这个问题回答还算清楚。\r\n我看到你的webpack配置用到webpack.optimize.UglifyJsPlugin这个插件，有没有觉得压缩速度很慢，有什么办法提升速度。 \r\n这个我主要回答了一下，我之前也没怎么了解，一个想到是缓存原理，压缩只重新压缩改变的，还有就是减少冗余的代码，压缩只用于生产阶段，然后面试官问还有呢？我就说，还可以从硬件上提升，可以得到质的飞跃，比如换台I9处理器的电脑。。。。\r\n简历上看见你了解http协议。说一下200和304的理解和区别 \r\n这个噼里啪啦说了一堆，协商缓存和强制缓存的区别，流程，还有一些细节，提到了expires,Cache-Control,If-none-match,Etag,last-Modified的匹配和特征，这一块之前有过比较详细的了解，所以还是应答如流。\r\nDOM事件中target和currentTarget的区别 \r\n这个没答上来。。。\r\n说一下你平时怎么解决跨域的。以及后续JSONP的原理和实现以及cors怎么设置。 \r\n我就说了一下Jason和cors,然后问我JSONP的原理以及cors怎么设置，这一块自己也实践过，所以还是对答如流的。\r\n说一下深拷贝的实现原理。 \r\n这个也还好，就是考虑的细节不是很周全，先是说了一种JSON.stringify和JSON.parse的实现，以及这种实现的缺点，主要就是非标准JSOn格式无法拷贝以及兼容性问题，然后问了我有么有用过IE8的一个什么JSON框架，我也不记得是什么了，因为我压根没听过，然后说了一下尾递归实现深拷贝的原理，还问了我typeof null是啥，这个当然是Object。。。\r\n说一下项目中觉得可以改进的地方以及做的很优秀的地方？ \r\n这个也是因人而异，开放性问题，大致扯了一下自己的经历，也还OK。\r\n最后问了有什么需要问的地方，面试到这里基本就结束了，大约面了一个多钟头，还是蛮累的。总体来说，回答的广度和深度以及细节都还算OK，觉得这轮面试基本没什么悬念。\r\n\r\n二轮技术面\r\n\r\n过了几天，接到阿里另一个面试官的电话，上一轮面试通过了，这次是二轮技术面，说估计一个钟头。这次依然跳过自我介绍之类的，直奔主题。\r\n\r\n有没有自己写过webpack的loader,他的原理以及啥的，记得也不太清楚。 \r\n这个我就说了一下，然后loader配置啥的，也还ok。\r\n有没有去研究webpack的一些原理和机制，怎么实现的。 \r\n这个我简单说了一下我自己了解的，因为这一块我也没深入去研究，所以说的应该比较浅。\r\nbabel把ES6转成ES5或者ES3之类的原理是什么，有没有去研究。 \r\n这一块我说了一下自己的思路，大致也还OK，我也没去深入研究怎么转换的，之前好像看过类似的文章，自己也只观察过转换之后的代码是啥样的，至于怎么转换的规则，真的没去深入观察。\r\ngit大型项目的团队合作，以及持续集成啥的。 \r\n这里我就说了一下自己了解的git flow方面的东西，因为没有实战经验，所以我就选择性说明了这一块的不熟练，然后面试官也没细问。\r\n什么是函数柯里化？以及说一下JS的API有哪些应用到了函数柯里化的实现？ \r\n这个我就说了一下函数柯里化一些了解，以及在函数式编程的应用，最后说了一下JS中bind函数和数组的reduce方法用到了函数柯里化。\r\nES6的箭头函数this问题，以及拓展运算符。 \r\n这一块主要是API和概念的问题，扯了一些规范以及严格模式下其他情况this只想问题。\r\nJS模块化Commonjs,UMD,CMD规范的了解，以及ES6的模块化跟其他几种的区别，以及出现的意义。 \r\n这个也是说了一下自己的理解和认知，自己对模块化历史以及一些规范都有所涉猎，这一块也还凑合。\r\n说一下Vue实现双向数据绑定的原理，以及vue.js和react.js异同点，如果让你选框架，你怎么怎么权衡这两个框架，分析一下。 \r\n主要是发布订阅的设计模式，还有就是ES5的Object.defineProperty的getter和setter机制，然后顺便扯了一下Angular的脏检测，以及alvon.js最先用到这种方式。然后扯了一下vue.js和react.js异同点，权衡框架选择，调研分析之类，噼里啪啦说了一大堆。\r\n我看你也写博客，说一下草稿的交互细节以及实现原理。 \r\n这一款就按照自己用过简书或者掘金，SG这类草稿的体验，详细说了一下，这个开放性问题，说到点基本就OK。我们每天晚上八点在腾讯课堂都有前端的免费课程， 你要来听课学习一下吗？有没有兴趣呢？\r\n最后面试官问我有什么想问的吗，面试到这里基本就结束了，差不多面了一个小时，说过几天就会给答复，如果过了就会去阿里园区进行下一轮的技术面。（web前端学习交流群：328058344 禁止闲聊，非喜勿进！）\r\n\r\n三轮技术面\r\n\r\n上一轮发挥感觉没前两轮发挥好，所以还是有点不自信的，没想到第三天后，就来电话了，通知我去阿里园区面试。 \r\n因为阿里西溪园区距离我不到十公里，我就踩着共享单车一点钟就出发了，天气比较热，飘在路上，百感交集，身边一辆法拉利轰鸣而过，又一辆兰博基尼呼啸而过，我心里一万头草泥马奔腾，MLGB，心里暗想，为神马开这车的人不是此刻看文章的你？ \r\n走到半路了，面试官给我打电话了，说我怎么还没到，说约定的是两点钟，我一下子就懵逼了，短信只有一个游客访问ID，并没有通知我具体时间，反正不管谁的疏忽，我肯定是要迟到了，于是我快马加鞭，踩着贼难骑的共享单车，背着微风，一路狂奔，到阿里园区已是汗流浃背，油光满面，气喘乎乎。。。 \r\n面试迟到了，印象肯定不好，加上满头大汗的形象也不太好，加上自己饥渴难耐，这面是估计要GG了，一进来就直奔主题，这次是两个大Boss面试我。\r\n\r\n第一个面试官\r\n先自我介绍一下，说一下项目的技术栈，以及项目中遇到的一些问题啥的。 \r\n这个问题就是个开场白，简要说明一下，问题都不大，这个面试官就是第一次打电话给我面试的那个boss，所以技术那块boss心里也有个底细，所以没再问技术问题。\r\n一个业务场景，面对产品不断迭代，以及需求的变动该怎么应对，具体技术方案实现。 \r\n具体业务场景，我就不一一描述，Boss在白板上画了一个大致的模块图，然后做了一些需求描述。然后需求一层一层的改变，然后往下挖，主要是考察应对产品能力，以及对代码的可维护性和可拓展性这些考察，开放性问题，我觉得还考察一些沟通交流方面的能力，因为有些地方面试官故意说得很含糊，反正就是一个综合能力，以及对产品的理解，中间谈到怎么实现，也问到了一些具体的点，记得问到的有一下几个。\r\n① 怎么获取一个元素到视图顶部的距离。 \r\n② getBoundingClientRect获取的top和offsetTop获取的top区别 \r\n③事件委托\r\n\r\n第二个面试官\r\n业务场景：比如说百度的一个服务不想让阿里使用，如果识别到是阿里的请求，然后跳转到404或者拒绝服务之类的？ \r\n主要是考察http协议头Referer，然后怎么判断是阿里的ip或者啥的，我也不太清楚。\r\n二分查找的时间复杂度怎么求，是多少 \r\n。。。排序的还算清楚一点，查找真的不知所措，没回答上来，也没猜，意义不大，不会就是不会。\r\nXSS是什么，攻击原理，怎么预防。 \r\n这个很简单，跨站脚本攻击XSS(cross site scripting)，攻击类型主要有两种：反射型和存储型，简单说了一下如何防御：\r\n①转义 \r\n②DOM解析白名单 \r\n③第三方库 \r\n④CSP \r\n自己对web安全这块系统学习过，前前后后大约了解了很多，对于XSS,CSRF,点击劫持，Cookie安全，HTTP窃听篡改，密码安全，SQL注入，社会工程学都有一定了解，所以这个自然也不在话下。\r\n\r\n线性顺序存储结构和链式存储结构有什么区别？以及优缺点。 \r\n我是类比JS数组和对象来回答的，反正还算凑合吧，自己都数据结构这块多少还是有些印象，所以入了前端，对数据结构和算法确实一直淡忘了。\r\n分析一下移动端日历，PC端日历以及桌面日历的一些不同和需要注意的地方。 \r\n这个我能想到的大致都说了一遍，不同的场景交互和细节以及功能都有所偏差，以及功能的侧重都可能不同。\r\n白板写代码，用最简洁的代码实现数组去重。 \r\n我写了两种实现方式：ES6实现： \r\n\r\n[...new Set([1,2,3,1,\'a\',1,\'a\'])] \r\n\r\nES5实现： \r\n[1,2,3,1,\'a\',1,\'a\'].filter(function(ele,index,array){ return index===array.indexOf(ele)})\r\n\r\n怎么实现草稿，多终端同步，以及冲突问题？ \r\n这个回答的不算好，本来也想到类比git的处理方式，但是说的时候往另外一个方面说了，导致与面试官想要的结果不一样。\r\n\r\n最后说目前的工作经验达不到P6水平，业务类稍弱，阿里现在社招只要P6的高级工程师，但是可以以第二梯队进去，就是以第三方签署就业协议，一年后可以转正，就是俗称的外包。多少还是有点遗憾，面了四轮面了个外包，最后放弃这份工作了。\r\n\r\n最后，感谢boss一直以来的关照和器重。', '1508554352188', '0', '6', null, '面试题', 'HHAGhrhBFu3SU2NdWTNQ43rU.png', '0');
INSERT INTO `content` VALUES ('9', 'DeepMind新一代围棋程序AlphaGo Zero再次登上Nature', '人工智能研究已经在多个领域取得飞速进展，从语音识别、图像分类到基因组学和药物研发。在很多情况下，这些是利用大量人类专业知识和数据的专家系统。\r\n但是，人类知识成本太高，未必可靠，或者只是很难获取。因此，AI 研究的一个长久目标就是跨国这一步，创建在最有难度的领域中无需人类输入就能达到超人性能的算法。在我们最近发表在 Nature 上的论文中，我们展示了通往该目标的关键一步。\r\n这篇文章介绍了 AlphaGo Zero，AlphaGo 的最新版本。AlphaGo 曾打败围棋世界冠军，Zero 甚至更强大，可以说是历史上最强的围棋选手。\r\n之前的 AlphaGo 版本首先基于数千场人类围棋比赛来训练如何学习围棋。但 AlphaGo Zero 跳过了这一步，从自己完全随机的下围棋开始来学习围棋。通过这种方式，它快速超越了人类棋手的水平，并且以 100:0 的比分打败了之前战胜世界冠军的 AlphaGo。\r\nAlphaGo Zero 利用新型强化学习完成这样的壮举，在训练过程中它是自己的老师。该系统的神经网络最初对围棋一无所知，然后它通过将该神经网络与强大的搜索算法结合进行自我对弈。神经网络在下棋过程中得到调整和更新，来预测棋招和比赛的最终胜者。\r\n更新后的神经网络重新与搜索算法连接，创建新的更强大的 AlphaGo Zero，然后重复上述流程。每次迭代中，系统的性能取得小幅上升，自我对弈的比赛质量不断上升，带来更加准确的神经网络和历史最强的 AlphaGo Zero 版本。\r\n这项技术比起前几个版本的 AlphaGo 更加强大，因为它不再受人类知识极限的约束。相反，它从一张白纸的状态开始，和世界最强的围棋选手 AlphaGo（它自己）学习下棋。\r\n它与之前的版本在以下几个方面存在差异：\r\nAlphaGo Zero 只需要围棋棋盘中的黑子和白子作为输入，而前几个版本的 AlphaGo 还包括少量手工设计的特征。\r\n它只有一个神经网络，而再不是两个。早期几个版本的 AlphaGo 使用「决策网络」选择下一步棋的位置，使用「价值网络」预测每一个位置上决定的胜者。这两个网络在 AlphaGo Zero 中被结合起来，从而使其更高效地训练和评估赛况。\r\nAlphaGo Zero 不使用「rollouts」（其它围棋程序使用的快速、随机的下棋方式，以从当前的棋盘位置分布预测哪一个棋手会赢），取而代之，它依靠其优质的神经网络评估下棋位置。\r\n所有这些区别都有助于提高系统的性能，并使其更加一般化，然而算法上的变化才是系统更加强大和高效的重要原因。\r\n\r\n由于硬件和算法的进步才使得 AlphaGo 能持续地变得越来越高效——Zero 版本只需 4 块 TPU 即可运行。\r\n仅仅经过三天的自我对抗训练，AlphaGo Zero很干脆地以100:0的战绩打败了之前的AlphaGo版本（它曾18次击败世界冠军李世石）。又经过40天的自我对抗训练，AlphaGo Zero变得更加强大，甚至优于打败世界头号选手柯洁的AlphaGo版本「Master」。\r\n\r\n等级分排名（在围棋等竞争性比赛中对选手的相关技巧的水平的度量）：显示 AlphaGo 如何在发展过程中逐渐变得强大。\r\n在几百万盘 AlphaGo 自我博弈的竞赛之后，系统在尝试中逐渐学会了围棋游戏，在短短几天内积累了人类数千年的知识。AlphaGo Zero 同时还发现了新的知识，发展出非常规和具有创意性的下法，这些技术已经超越了此前 AlphaGo 与李世石和柯洁对弈时展现的水平。\r\n\r\nAlphaGo 展现的创造力让我们有理由相信人工智能将会成为人类智慧的放大器，帮助我们实现自己的使命，去解决人类面临的最具挑战的问题。\r\n尽管 AlphaGo Zero 仍然在发展初期，但是它完成了通向该目标的关键一步。如果类似的技术可以应用到蛋白质折叠等其他结构化问题中，减少能量消耗或搜索最新的材料，则它带来的突破有可能给整个社会带来积极的影响。\r\n\r\n论文：Mastering the game of Go without human knowledge\r\n\r\n论文地址：https://deepmind.com/documents/119/agz_unformatted_nature.pdf\r\n\r\n长期以来，人工智能有一个目标就是算法能够在难度较高的领域从零开始学得超人的性能。近期，AlphaGo 成为在围棋领域第一个打败人类世界冠军的程序。AlphaGo 中的树搜索使用深度神经网络评估位置，选择棋招。这些神经网络通过监督学习从人类专家的棋招中学习，然后通过强化学习进行自我对弈。本文，我们介绍一种算法，该算法仅依靠强化学习，不使用游戏规则以外的人类数据、指导或领域知识。AlphaGo 成为自己的老师：我们训练一种神经网络来预测 AlphaGo 的下一步以及 AlphaGo 游戏的获胜者。该神经网络提升树搜索的能力，带来下一次迭代中更高质量的棋招选择和更强大的自我对弈。新程序 AlphaGo Zero 从头开始学习，并达到了超人的性能，以 100-0 的比分打败曾经战胜人类世界冠军的 AlphaGo。\r\nAlphaGo Zero 所采用的神经网络是一种新颖的强化学习算法，即自我对抗（self-play）的竞争性训练。此前，OpenAI 曾发表论文表示自我对抗训练可以在简单环境下产生远超环境复杂度的行为。而这一次 AlphaGo Zero 和此前 AlphaGo Fan 与 AlphaGo Lee 的很大区别就是采用了这种自我对抗式的训练策略。\r\n图 1：AlphaGo Zero 中的自我对抗强化学习\r\n\r\na：AlphaGo Zero 和自己进行 s_1,...,s_T 对弈。在每一个位置 s_t 处使用最新的神经网络 f_θ执行蒙特卡罗树搜索（MCTS）α_θ（见图 2）。根据 MCTS 计算的搜索概率选择棋招（a_t ∼ π_t）。最终位置 s_T 的得分根据游戏规则计算，进而计算游戏获胜者 z。b： AlphaGo Zero 中的神经网络训练。神经网络使用原始棋盘位置 s_t 作为输入，使用参数θ将其传播通过多个卷积层，然后输出代表棋招概率分布的向量 p_t，和代表当前选手在 s_t 获胜的概率标量值 v_t。神经网络的参数θ得到更新以最大化策略向量 p_t 和搜索概率π_t 的相似性，并将预测获胜者 v_t 和获胜者 z 之间的误差最小化（见公式 1）。新的参数将在下一次迭代的自我对抗中使用。\r\n\r\n根据神经网络 f_θ，在每一个位置 s 处执行 MCTS 搜索。\r\n\r\n图2：AlphaGo Zero中的MCTS。\r\n\r\na：每一次模拟通过选择最大化行动价值Q的边来遍历整棵树，加上上面的（依赖于一个已储存的先验概率P）置信边界U，并访问边的总数N（每遍历一次增加1）。 b，叶结点得到扩展，并且相关的位置由神经网络 (P(s, ·),V(s)) = f_θ(s)评估；P值的向量存储在s的外向边（outgoing edges）中。 c，行动价值Q被更新以追踪当前行动下的子树的所有评估V的平均值。 d，一旦搜索完成，会返回搜索概率值（search probabilities）π，和N^(1/τ)成比例，其中N是每一次行动自根状态（root state）以来的访问总数，τ是控制温度（temperature）的参数。', '1508554494959', '0', '2', null, '其他', 'cFRLivozkb_Vlqr5wEVrDOLZ.png', '0');

-- ----------------------------
-- Table structure for `from_count`
-- ----------------------------
DROP TABLE IF EXISTS `from_count`;
CREATE TABLE `from_count` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dateTime` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of from_count
-- ----------------------------
INSERT INTO `from_count` VALUES ('1', '127.0.0.1', '1506437961593');

-- ----------------------------
-- Table structure for `invitecode`
-- ----------------------------
DROP TABLE IF EXISTS `invitecode`;
CREATE TABLE `invitecode` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `inviteCode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `dateTime` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of invitecode
-- ----------------------------
INSERT INTO `invitecode` VALUES ('1', '123456', '1', '1506437961593');
INSERT INTO `invitecode` VALUES ('2', '111111', '1', '1506437961593');
INSERT INTO `invitecode` VALUES ('3', '222', '0', '1507768377195');
INSERT INTO `invitecode` VALUES ('4', '377752', '0', '1507768515940');
INSERT INTO `invitecode` VALUES ('5', '864608', '0', '1507768648157');
INSERT INTO `invitecode` VALUES ('6', '86fc60', '0', '1507768649352');
INSERT INTO `invitecode` VALUES ('7', '876dbf', '0', '1507768650095');
INSERT INTO `invitecode` VALUES ('8', 'a277e6', '0', '1507768695460');
INSERT INTO `invitecode` VALUES ('9', 'a34d10', '0', '1507768696857');
INSERT INTO `invitecode` VALUES ('10', 'bea6e6', '0', '1508247202101');
INSERT INTO `invitecode` VALUES ('11', 'bf4019', '1', '1508247203105');

-- ----------------------------
-- Table structure for `nav`
-- ----------------------------
DROP TABLE IF EXISTS `nav`;
CREATE TABLE `nav` (
  `type` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `text` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `href` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `id` int(20) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of nav
-- ----------------------------
INSERT INTO `nav` VALUES ('all', '首页', 'index.html?type=all', '1');
INSERT INTO `nav` VALUES ('html5', 'html5', 'index.html?type=html5', '2');
INSERT INTO `nav` VALUES ('JavaScript', 'JavaScript', 'index.html?type=JavaScript', '3');
INSERT INTO `nav` VALUES ('nodeJs', 'nodeJs', 'index.html?type=nodeJs', '4');

-- ----------------------------
-- Table structure for `share`
-- ----------------------------
DROP TABLE IF EXISTS `share`;
CREATE TABLE `share` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `contentId` bigint(20) NOT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `userId` bigint(20) NOT NULL,
  `userName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dateTime` bigint(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of share
-- ----------------------------
INSERT INTO `share` VALUES ('1', '1', 'h', '1', 'zx', '1497075762689');

-- ----------------------------
-- Table structure for `types`
-- ----------------------------
DROP TABLE IF EXISTS `types`;
CREATE TABLE `types` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `count` int(20) DEFAULT NULL,
  `href` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of types
-- ----------------------------
INSERT INTO `types` VALUES ('1', 'JavaScript', 'JavaScript', '1', 'index.html?type=javascript');
INSERT INTO `types` VALUES ('2', 'css', 'css', '1', 'index.html?type=css');
INSERT INTO `types` VALUES ('3', 'html5', 'html5', '1', 'index.html?type=html5');
INSERT INTO `types` VALUES ('4', 'nodeJs', 'nodeJs', '1', 'index.html?type=nodeJs');
INSERT INTO `types` VALUES ('5', '面试题', '面试题', '1', 'index.html?type=面试题');
INSERT INTO `types` VALUES ('6', '其他', '其他', '1', 'index.html?type=其他');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userName` varchar(50) NOT NULL,
  `userId` int(30) NOT NULL AUTO_INCREMENT,
  `pwd` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('zx', '1', '111111', '1043943494@qq.com');
INSERT INTO `user` VALUES ('zx1', '2', '111111', '10439413494@qq.com');
INSERT INTO `user` VALUES ('zx11', '3', '111111', '104394113494@qq.com');
INSERT INTO `user` VALUES ('zxx', '4', '111111', '1@qq.com');
INSERT INTO `user` VALUES ('zzz', '5', '111111', '2@qq.com');
INSERT INTO `user` VALUES ('zzzz', '6', '111111', '11@qq.com');
INSERT INTO `user` VALUES ('qq', '7', '111111', '2@q.com');
INSERT INTO `user` VALUES ('lzy', '8', '111111', 'zx@qq.com');

-- ----------------------------
-- Table structure for `user_email_code`
-- ----------------------------
DROP TABLE IF EXISTS `user_email_code`;
CREATE TABLE `user_email_code` (
  `codeId` int(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `code` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`codeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user_email_code
-- ----------------------------

-- ----------------------------
-- Table structure for `user_verify_code`
-- ----------------------------
DROP TABLE IF EXISTS `user_verify_code`;
CREATE TABLE `user_verify_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user_verify_code
-- ----------------------------
INSERT INTO `user_verify_code` VALUES ('1', '2707');
INSERT INTO `user_verify_code` VALUES ('2', '8726');
INSERT INTO `user_verify_code` VALUES ('3', '2688');
INSERT INTO `user_verify_code` VALUES ('4', '8503');
INSERT INTO `user_verify_code` VALUES ('5', '1747');
INSERT INTO `user_verify_code` VALUES ('6', '8083');
INSERT INTO `user_verify_code` VALUES ('7', '2284');
INSERT INTO `user_verify_code` VALUES ('8', '4076');
INSERT INTO `user_verify_code` VALUES ('9', '2500');
INSERT INTO `user_verify_code` VALUES ('10', '2499');
INSERT INTO `user_verify_code` VALUES ('11', '4304');
INSERT INTO `user_verify_code` VALUES ('12', '3800');
INSERT INTO `user_verify_code` VALUES ('13', '2791');
INSERT INTO `user_verify_code` VALUES ('14', '4733');
INSERT INTO `user_verify_code` VALUES ('15', '9044');
INSERT INTO `user_verify_code` VALUES ('16', '8024');
INSERT INTO `user_verify_code` VALUES ('17', '8908');
INSERT INTO `user_verify_code` VALUES ('18', '9048');
INSERT INTO `user_verify_code` VALUES ('19', '8237');
INSERT INTO `user_verify_code` VALUES ('20', '9801');
INSERT INTO `user_verify_code` VALUES ('21', '3605');
INSERT INTO `user_verify_code` VALUES ('22', '4055');
INSERT INTO `user_verify_code` VALUES ('23', '2675');
INSERT INTO `user_verify_code` VALUES ('24', '4827');
INSERT INTO `user_verify_code` VALUES ('25', '2189');
INSERT INTO `user_verify_code` VALUES ('26', '2023');
INSERT INTO `user_verify_code` VALUES ('27', '3056');
INSERT INTO `user_verify_code` VALUES ('28', '6150');
INSERT INTO `user_verify_code` VALUES ('29', '6466');
INSERT INTO `user_verify_code` VALUES ('30', '4099');
INSERT INTO `user_verify_code` VALUES ('31', '6860');
INSERT INTO `user_verify_code` VALUES ('32', '1207');
INSERT INTO `user_verify_code` VALUES ('33', '6732');
INSERT INTO `user_verify_code` VALUES ('34', '6147');
INSERT INTO `user_verify_code` VALUES ('35', '4582');
INSERT INTO `user_verify_code` VALUES ('36', '7424');

-- ----------------------------
-- Table structure for `visit_count`
-- ----------------------------
DROP TABLE IF EXISTS `visit_count`;
CREATE TABLE `visit_count` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userId` bigint(20) NOT NULL,
  `ip` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dateTime` bigint(20) NOT NULL,
  `userName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of visit_count
-- ----------------------------
INSERT INTO `visit_count` VALUES ('1', '1', '127.0.0.1', '1506343947226', 'zx');
INSERT INTO `visit_count` VALUES ('2', '1', 'http://localhost:8081', '1506433192957', 'zx');
INSERT INTO `visit_count` VALUES ('3', '1', 'http://localhost:8081', '1506433399524', 'zx');
INSERT INTO `visit_count` VALUES ('4', '1', 'http://localhost:8081', '1508247518711', 'zx');
INSERT INTO `visit_count` VALUES ('5', '1', 'http://localhost:8081', '1508498116105', 'zx');
