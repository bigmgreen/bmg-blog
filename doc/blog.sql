/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50549
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50549
File Encoding         : 65001

Date: 2017-09-26 08:10:17
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
INSERT INTO `banner` VALUES ('1', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', 'https://www.baidu.com/');

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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

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
  `href` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  `alt` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `commentCount` int(11) DEFAULT '0',
  PRIMARY KEY (`contentId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of content
-- ----------------------------
INSERT INTO `content` VALUES ('1', '星球大战', '星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战', '1497075762689', '1', '151', ' ,1', 'html5', 'detail.html?id=1', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', null, '0');
INSERT INTO `content` VALUES ('2', '星球大战', '星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战', '1497075762689', '0', '43', null, 'html5', 'detail.html?id=2', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', null, '0');
INSERT INTO `content` VALUES ('3', '星球大战', '星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战', '1497075762689', '0', '2', null, 'html5', 'detail.html?id=3', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', null, '0');
INSERT INTO `content` VALUES ('4', '星球大战', '星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战', '1497075762689', '0', '2', null, 'html5', 'detail.html?id=4', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', null, '0');
INSERT INTO `content` VALUES ('5', '星球大战', '星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战', '1497075762689', '0', '1', null, 'html5', 'detail.html?id=5', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', null, '0');
INSERT INTO `content` VALUES ('6', '星球大战', '星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战', '1497075762689', '0', '2', null, 'html5', 'detail.html?id=6', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', null, '0');
INSERT INTO `content` VALUES ('7', '星球大战', '星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战星球大战', '1497075762689', '0', '12', null, 'html5', 'detail.html?id=7', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', null, '4');

-- ----------------------------
-- Table structure for `invitecode`
-- ----------------------------
DROP TABLE IF EXISTS `invitecode`;
CREATE TABLE `invitecode` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `inviteCode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of invitecode
-- ----------------------------
INSERT INTO `invitecode` VALUES ('1', '123456', '1');
INSERT INTO `invitecode` VALUES ('2', '111111', '1');

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
INSERT INTO `nav` VALUES ('index', '首页', 'index.html?type=index', '1');
INSERT INTO `nav` VALUES ('html5', 'html5', 'index.html?type=html5', '2');
INSERT INTO `nav` VALUES ('angular', 'angular', 'index.html?type=angular', '3');
INSERT INTO `nav` VALUES ('react', 'react', 'index.html?type=react', '4');

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
INSERT INTO `types` VALUES ('1', 'JavaScript', 'JavaScript', '2017', 'index.html?type=javascript');
INSERT INTO `types` VALUES ('2', 'css', 'css', '2017', 'index.html?type=css');
INSERT INTO `types` VALUES ('3', 'html5', 'html5', '2017', 'index.html?type=html5');
INSERT INTO `types` VALUES ('4', 'nodeJs', 'nodeJs', '2017', 'index.html?type=nodeJs');
INSERT INTO `types` VALUES ('5', '面试题', '面试题', '2017', 'index.html?type=面试题');
INSERT INTO `types` VALUES ('6', '其他', '其他', '2017', 'index.html?type=其他');

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

-- ----------------------------
-- Table structure for `visit_count`
-- ----------------------------
DROP TABLE IF EXISTS `visit_count`;
CREATE TABLE `visit_count` (
  `userId` bigint(20) NOT NULL,
  `ip` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dateTime` bigint(20) NOT NULL,
  `userName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of visit_count
-- ----------------------------
INSERT INTO `visit_count` VALUES ('1', '127.0.0.1', '1506343947226', 'zx');
