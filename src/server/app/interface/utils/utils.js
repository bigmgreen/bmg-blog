'use strict';
var mysql = require('mysql');
var xss = require('xss');

//连接数据库设置-创建连接池
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog'
});

//每页的容量
var PAGE_SIZE = 10;

/**
 * 数据库操作公共接口
 * @param sql
 * @param callback
 */
function excute(sql, callback) {
    console.log("sql打印：", sql);
    pool.getConnection(function (err, connection) {
        connection.query(sql, function (err, rows, fields) {
            callback && callback(err, rows, fields);
            connection.release();
        });
    });
}

module.exports = {
    /**
     * 获取user
     * @param param
     * @param callback
     */
    getUser: function (param, callback) {
        const {userName, pwd}=param;
        var sql =
            `
            SELECT * FROM user WHERE 
                userName=${pool.escape(userName)}
            AND 
                pwd=${pool.escape(pwd)}
            `;
        excute(sql, callback);
    },
    /**
     * 根据userId获取user
     * @param userId
     * @param callback
     */
    getUserById: function (userId, callback) {
        var sql = ` SELECT * FROM user WHERE userId=${pool.escape(userId)}`;
        excute(sql, callback);
    },
    /**
     * 根据邮箱获取user
     * @param email
     * @param callback
     */
    getUserByEmail: function (email, callback) {
        var sql = ` SELECT * FROM user WHERE email=${pool.escape(email)}`;
        excute(sql, callback);
    },
    /**
     * 向数据库保存邮箱验证码
     * @param email
     * @param code
     * @param callback
     */
    saveEmailValidateCode: function (email, code, callback) {
        var sql = `
            INSERT INTO user_email_code(email, code) VALUES ("${email}","${code}")
        `;
        excute(sql, callback);
    },
    /**
     * 向数据库保存图片验证码
     * @param code
     * @param callback
     */
    saveVerifyCode: function (code, callback) {
        var sql = `
            INSERT INTO user_verify_code(code) VALUES ("${code}")
        `;
        excute(sql, callback);
    },
    /**
     * 验证图片验证码
     * @param code
     * @param callback
     */
    checkVerifyCode: function (code,callback) {
        var sql = `
            SELECT COUNT(*) as count from  user_verify_code WHERE code=${pool.escape(code)}
        `;
        excute(sql, callback);
    },
    /**
     * 验证用户
     * @param userName
     * @param callback
     */
    checkUserByName: function (userName, callback) {
        var sql = `
            SELECT * FROM user WHERE 
                userName=${pool.escape(userName)}
        `;
        excute(sql, callback);
    },
    /**
     * 验证邮箱验证码
     * @param email
     * @param emailVerifyCode
     * @param callback
     */
    checkEmailVerifyCode: function (email, emailVerifyCode, callback) {
        var sql = `
            SELECT COUNT(*) as count FROM user_email_code 
                WHERE 
                email=${pool.escape(email)}
                AND
                code=${pool.escape(emailVerifyCode)}
        `;
        excute(sql, callback);
    },
    /**
     * 删除验证过的邮箱验证码
     * @param email
     */
    removeEmailVerifyCode: function (email) {
        var sql = `
            DELETE FROM user_email_code WHERE email=${pool.escape(email)}
        `;
        excute(sql);
    },
    /**
     * 重置密码
     * @param userId
     * @param pwd
     * @param callback
     */
    findPwd: function (userId, pwd,callback) {
        var sql = `
            UPDATE user SET pwd=${pool.escape(pwd)} 
            WHERE userId=${userId}
        `;
        excute(sql, callback);
    },




    /**
     * 获取对应类型的总条数
     * @param param
     * @param callback
     */
    getTotalByType: function (param, callback) {
        var sql = 'SELECT COUNT(*) as count FROM news_list';

        var num = !isNaN(param.type) ? param.type : -1;

        if (param.type == -1) {
            sql = sql + ' WHERE status = 1';
        } else {
            sql = sql + ' WHERE status = 0';
        }

        if (param.type != 0 && param.type != -1) {
            sql = sql + ' AND TYPE=' + mysql.format(num);
        }
        excute(sql, callback);
    },
    /**
     * 获取精选数据
     * @param param
     * @param callback
     */
    getAll: function (param, callback) {
        var num = !isNaN(param.pageNumber) ? param.pageNumber : 0;

        var sql = 'SELECT * FROM news_list WHERE status = 0 order by id desc LIMIT '
            + mysql.format(num * PAGE_SIZE) + ',' + PAGE_SIZE;
        excute(sql, callback);
    },
    /**
     * 根据类型获取数据
     * @param param
     * @param callback
     */
    getNewsByType: function (param, callback) {
        var num = !isNaN(param.pageNumber) ? param.pageNumber : 0;
        var type = !isNaN(param.type) ? param.type : -1;
        var sql = 'SELECT * FROM news_list WHERE status = 0 AND TYPE ='
            + mysql.format(type) + ' order by id desc LIMIT '
            + mysql.format(num * PAGE_SIZE)
            + ',' + PAGE_SIZE;
        excute(sql, callback);
    },
    /**
     * 获取回收站的数据
     * @param param
     * @param callback
     */
    getDelNewsByType: function (param, callback) {
        var num = !isNaN(param.pageNumber) ? param.pageNumber : 0;
        var pageNumber = num * PAGE_SIZE;
        var sql = 'SELECT * FROM news_list WHERE status = 1 order by id desc LIMIT ' + mysql.format(pageNumber) + ',' + PAGE_SIZE;
        excute(sql, callback);
    },
    /**
     * 增加一条数据
     * @param param
     * @param callback
     */
    add: function (param, callback) {
        var sql = 'INSERT INTO `news_list`(`title`, `imgSrc`, `date`, `type`, `from`) VALUES ('
            + xss(pool.escape(param.title)) + ','
            + xss(pool.escape(param.imgSrc)) + ','
            + xss(pool.escape(param.date)) + ','
            + xss(pool.escape(param.type)) + ','
            + xss(pool.escape(param.from)) + ')';
        excute(sql, callback);
    },
    /**
     * 按照id删除某个记录
     * @param param
     * @param callback
     */
    del: function (param, callback) {
        var id = !isNaN(param.id) ? param.id : -1;
        var sql = 'UPDATE `news_list` SET `status`=1 WHERE id=' + mysql.format(id);
        excute(sql, callback);
    },
    /**
     * 按照id编辑某个记录
     * @param param
     * @param callback
     */
    update: function (param, callback) {
        var sql = 'UPDATE `news_list` SET `title`='
            + xss(pool.escape(param.title)) + ',`imgSrc`='
            + xss(pool.escape(param.imgSrc)) + ',`date`='
            + xss(pool.escape(param.date)) + ',`from`='
            + xss(pool.escape(param.from)) + ' WHERE id='
            + xss(pool.escape(param.id));
        excute(sql, callback);
    },
    /**
     * 恢复某一条记录
     * @param param
     * @param callback
     */
    recovery: function (param, callback) {
        var id = !isNaN(param.id) ? param.id : -1;
        var sql = 'UPDATE `news_list` SET `status`=0 WHERE id=' + mysql.format(id);
        excute(sql, callback);
    }
};