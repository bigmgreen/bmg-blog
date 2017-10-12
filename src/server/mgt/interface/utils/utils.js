'use strict';
let mysql = require('mysql');
let xss = require('xss');

//连接数据库设置-创建连接池
let pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog'
});

//每页的容量
let PAGE_SIZE = 10;

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
    PAGE_SIZE: PAGE_SIZE,
    /**
     * 获取user
     * @param param
     * @param callback
     */
    getUser: function (param, callback) {
        const {userName, pwd}=param;
        let sql =
            `
            SELECT * FROM admin WHERE 
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
        let sql = ` SELECT * FROM admin WHERE userId=${userId}`;
        excute(sql, callback);
    },
    // /**
    //  * 根据邮箱获取user
    //  * @param email
    //  * @param callback
    //  */
    // getUserByEmail: function (email, callback) {
    //     let sql = ` SELECT * FROM user WHERE email=${pool.escape(email)}`;
    //     excute(sql, callback);
    // },
    // /**
    //  * 向数据库保存邮箱验证码
    //  * @param email
    //  * @param code
    //  * @param callback
    //  */
    // saveEmailValidateCode: function (email, code, callback) {
    //     let sql = `
    //         INSERT INTO user_email_code(email, code) VALUES ("${email}","${code}")
    //     `;
    //     excute(sql, callback);
    // },
    // /**
    //  * 向数据库保存图片验证码
    //  * @param code
    //  * @param callback
    //  */
    // saveVerifyCode: function (code, callback) {
    //     let sql = `
    //         INSERT INTO user_verify_code(code) VALUES ("${code}")
    //     `;
    //     excute(sql, callback);
    // },
    // /**
    //  * 验证图片验证码
    //  * @param code
    //  * @param callback
    //  */
    // checkVerifyCode: function (code, callback) {
    //     let sql = `
    //         SELECT COUNT(*) as count from  user_verify_code WHERE code=${pool.escape(code)}
    //     `;
    //     excute(sql, callback);
    // },
    // /**
    //  * 验证邀请码
    //  * @param inviteCode
    //  * @param callback
    //  */
    // checkInviteCode: function (inviteCode, callback) {
    //     let sql = `
    //         SELECT COUNT(*) as count from  inviteCode
    //         WHERE
    //             inviteCode=${pool.escape(inviteCode)}
    //         AND
    //             status=0
    //     `;
    //     excute(sql, callback);
    // },
    // /**
    //  * 验证用户
    //  * @param userName
    //  * @param callback
    //  */
    // checkUserByName: function (userName, callback) {
    //     let sql = `
    //         SELECT * FROM user WHERE
    //             userName=${pool.escape(userName)}
    //     `;
    //     excute(sql, callback);
    // },
    // /**
    //  * 验证邮箱验证码
    //  * @param email
    //  * @param emailVerifyCode
    //  * @param callback
    //  */
    // checkEmailVerifyCode: function (email, emailVerifyCode, callback) {
    //     let sql = `
    //         SELECT COUNT(*) as count FROM user_email_code
    //             WHERE
    //             email=${pool.escape(email)}
    //             AND
    //             code=${pool.escape(emailVerifyCode)}
    //     `;
    //     excute(sql, callback);
    // },
    // /**
    //  * 删除验证过的邮箱验证码
    //  * @param email
    //  */
    // removeEmailVerifyCode: function (email) {
    //     let sql = `
    //         DELETE FROM user_email_code WHERE email=${pool.escape(email)}
    //     `;
    //     excute(sql);
    // },
    // /**
    //  * 重置密码
    //  * @param userId
    //  * @param pwd
    //  * @param callback
    //  */
    // findPwd: function (userId, pwd, callback) {
    //     let sql = `
    //         UPDATE user SET pwd=${pool.escape(pwd)}
    //         WHERE userId=${userId}
    //     `;
    //     excute(sql, callback);
    // },
    // /**
    //  * 获取首页数据
    //  * @param type
    //  * @param currentPage
    //  * @param callback
    //  * TODO 可做缓存
    //  */
    // getIndex: function (type, currentPage = 0, callback) {
    //
    //     let nav = new Promise((resolve, reject)=> {
    //         excute('SELECT * FROM nav', (err, nav)=> {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(nav);
    //             }
    //         });
    //     });
    //     let banner = new Promise((resolve, reject)=> {
    //         excute('SELECT * FROM banner', (err, banner)=> {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(banner);
    //             }
    //         });
    //     });
    //     let article = new Promise((resolve, reject)=> {
    //
    //         let sql = `SELECT * FROM content`;
    //
    //         if (type !== 'all') {
    //             sql += ` WHERE type=${pool.escape(type)}`
    //         }
    //         sql += ` order by contentId desc LIMIT ${currentPage * PAGE_SIZE},${PAGE_SIZE}`;
    //
    //         excute(sql, (err, article)=> {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(article);
    //             }
    //         });
    //     });
    //     let author = new Promise((resolve, reject)=> {
    //         excute('SELECT * FROM author', (err, author)=> {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(author);
    //             }
    //         });
    //     });
    //     let types = new Promise((resolve, reject)=> {
    //         excute('SELECT * FROM types', (err, types)=> {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(types);
    //             }
    //         });
    //     });
    //
    //     Promise.all([nav, banner, article, author, types])
    //         .then((results)=> {
    //             callback(false, results);
    //         })
    //         .catch((err)=> {
    //             callback(err);
    //         })
    //     ;
    // },
    /**
     * 获取首页文章列表数据
     * @param type
     * @param currentPage
     * @param callback
     */
    getArticle: function (type, currentPage, callback) {

        let article = new Promise((resolve, reject)=> {
            let sql = `SELECT * FROM content`;

            if (type !== 'all') {
                sql += ` WHERE type=${pool.escape(type)}`
            }
            sql += ` order by contentId desc LIMIT ${currentPage * PAGE_SIZE},${PAGE_SIZE}`;

            excute(sql, (err, result)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        let count = new Promise((resolve, reject)=> {
            excute('SELECT count(1) as count FROM content', (err, result)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        Promise.all([article, count])
            .then((results)=> {
                callback(false, results);
            })
            .catch((err)=> {
                callback(err);
            });

    },
    /**
     * 获取访客列表数据
     * @param currentPage
     * @param callback
     */
    getVisitor: function (currentPage, callback) {

        let article = new Promise((resolve, reject)=> {
            let sql = `SELECT * FROM visit_count`;

            sql += ` order by dateTime desc LIMIT ${currentPage * PAGE_SIZE},${PAGE_SIZE}`;

            excute(sql, (err, result)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        let count = new Promise((resolve, reject)=> {
            excute('SELECT count(1) as count FROM visit_count', (err, result)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        Promise.all([article, count])
            .then((results)=> {
                callback(false, results);
            })
            .catch((err)=> {
                callback(err);
            });

    },
    /**
     * 获取点赞列表
     * @param currentPage
     * @param callback
     */
    getMark: function (currentPage, callback) {

        let mark = new Promise((resolve, reject)=> {
            let sql = `SELECT contentId,title,markCount as count FROM content
                    order by dateTime desc LIMIT ${currentPage * PAGE_SIZE},${PAGE_SIZE}
                    `;


            excute(sql, (err, result)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        let count = new Promise((resolve, reject)=> {
            excute('SELECT count(1) as count FROM content', (err, result)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        Promise.all([mark, count])
            .then((results)=> {
                callback(false, results);
            })
            .catch((err)=> {
                callback(err);
            });

    },
    /**
     * 获取来源列表
     * @param currentPage
     * @param callback
     */
    getFrom: function (currentPage, callback) {

        let item = new Promise((resolve, reject)=> {
            let sql = `SELECT * FROM from_count
                    order by dateTime desc LIMIT ${currentPage * PAGE_SIZE},${PAGE_SIZE}
                    `;


            excute(sql, (err, result)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        let count = new Promise((resolve, reject)=> {
            excute('SELECT count(1) as count FROM from_count', (err, result)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        Promise.all([item, count])
            .then((results)=> {
                callback(false, results);
            })
            .catch((err)=> {
                callback(err);
            });

    },
    /**
     * 获取邀请码列表
     * @param currentPage
     * @param callback
     */
    getInvite: function (currentPage, callback) {

        let item = new Promise((resolve, reject)=> {
            let sql = `SELECT * FROM invitecode
                    order by dateTime desc LIMIT ${currentPage * PAGE_SIZE},${PAGE_SIZE}
                    `;


            excute(sql, (err, result)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        let count = new Promise((resolve, reject)=> {
            excute('SELECT count(1) as count FROM invitecode', (err, result)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        Promise.all([item, count])
            .then((results)=> {
                callback(false, results);
            })
            .catch((err)=> {
                callback(err);
            });

    },
    /**
     * 获取邀请码
     * @param inviteCode
     * @param callback
     */
    getInviteCode: function (inviteCode, callback) {

        let sql = `INSERT INTO invitecode(inviteCode,status,dateTime) VALUES ('${inviteCode}',0, ${+new Date()})`;

        excute(sql, (err, result)=> {
            if (err) {
                callback(err);
            } else {
                callback(false, result);
            }
        });

    },
    // /**
    //  * 注册
    //  * @param inviteCode
    //  * @param userName
    //  * @param email
    //  * @param pwd
    //  * @param callback
    //  */
    // register: function (inviteCode, userName, email, pwd, callback) {
    //     let sql = `
    //         INSERT INTO user(userName, email, pwd) VALUES
    //         (
    //             ${pool.escape(userName)},${pool.escape(email)},${pool.escape(pwd)}
    //         )
    //     `;
    //
    //     let _sql = `
    //         UPDATE inviteCode SET status=1
    //         WHERE inviteCode=${pool.escape(inviteCode)}
    //     `;
    //
    //     excute(sql, (err)=> {
    //         if (err) {
    //             callback(err);
    //             return;
    //         }
    //         excute(_sql, callback);
    //     });
    // },
    // /**
    //  * 获取导航信息
    //  * @param callback
    //  */
    // getNav: function (callback) {
    //     excute('SELECT * FROM nav', callback);
    // },
    /**
     * 获取详情页信息
     * @param contentId
     * @param callback
     * @returns {boolean}
     */
    getDetail: function (contentId, callback) {

        let nav = new Promise((resolve, reject)=> {
            excute('SELECT * FROM nav', (err, nav)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(nav);
                }
            });
        });
        let content = new Promise((resolve, reject)=> {
            excute(`SELECT * FROM content WHERE contentId=${contentId}`, (err, content)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(content);
                }
            });
        });
        let comment = new Promise((resolve, reject)=> {

            let sql = `
                SELECT 
                *
                FROM comment
                WHERE 
                contentId=${pool.escape(contentId)}
            `;

            sql += ` order by commentId desc LIMIT 0,${PAGE_SIZE}`;

            excute(sql, (err, comment)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(comment);
                }
            });
        });
        let author = new Promise((resolve, reject)=> {
            excute('SELECT * FROM author', (err, author)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(author);
                }
            });
        });
        let types = new Promise((resolve, reject)=> {
            excute('SELECT * FROM types', (err, types)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(types);
                }
            });
        });

        let commentCount = new Promise((resolve, reject)=> {

            let sql = `
                SELECT 
                    COUNT(*) AS count 
                FROM comment
                WHERE 
                contentId=${pool.escape(contentId)}
            `;

            excute(sql, (err, count)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(count);
                }
            });
        });

        let contentPrev = new Promise((resolve, reject)=> {
            let sql = `
                SELECT * FROM content 
                WHERE contentId<${contentId}
                order by contentId desc LIMIT 1
            `;
            excute(sql, (err, content)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(content);
                }
            });
        });

        let contentNext = new Promise((resolve, reject)=> {
            let sql = `
                SELECT * FROM content 
                WHERE contentId>${contentId}  LIMIT 1
            `;
            excute(sql, (err, content)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(content);
                }
            });
        });

        let updateBrowserCount = new Promise((resolve, reject)=> {
            let sql = `
                SELECT browserCount FROM content 
                WHERE contentId=${contentId}
            `;
            excute(sql, (err, result)=> {

                let count = parseInt(result[0]['browserCount']);
                let _sql = `
                    UPDATE  content 
                    SET     browserCount=${++count}
                    WHERE   contentId=${contentId}
                `;
                excute(_sql, (err, rows)=> {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(count, rows);
                    }
                });

            });
        });

        Promise.all([
            nav,
            content,
            comment,
            author,
            types,
            commentCount,
            contentPrev,
            contentNext,
            updateBrowserCount
        ])
            .then((results)=> {
                callback(false, results);
            })
            .catch((err)=> {
                callback(err);
            })
        ;
    },
    /**
     * 文章点赞
     * @param userId
     * @param contentId
     * @param checked
     * @param callback
     */
    mark: function (userId, contentId, checked, callback) {

        let markCountPromise = new Promise((resolve, reject)=> {
            let sql = `
                SELECT markCount,userMarked FROM content 
                WHERE contentId=${contentId}
            `;
            excute(sql, (err, result)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        let updateMarkCountPromise = new Promise((resolve, reject)=> {
            markCountPromise.then((_result)=> {

                let result = _result[0]['markCount'];
                let userMarked = _result[0]['userMarked'];
                if (checked) {
                    result++;
                    userMarked += `,${userId}`;
                } else {
                    result--;
                    let reg = new RegExp(`,${userId}`, 'g');
                    userMarked = userMarked.replace(reg, '');
                }

                let sql = `
                    UPDATE  content 
                    SET     markCount=${result},userMarked=${pool.escape(userMarked)}
                    WHERE   contentId=${contentId}
                `;
                excute(sql, (err, markCount)=> {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result, markCount);
                    }
                });
            });
        });

        updateMarkCountPromise
            .then((result)=> {
                console.log(result)
                callback(false, result);
            })
            .catch((err)=> {
                callback(err);
            });

    },
    /**
     * 获取详情页评论
     * @param contentId
     * @param currentPage
     * @param callback
     * @returns {boolean}
     */
    getComment: function (contentId, currentPage, callback) {

        let comment = new Promise((resolve, reject)=> {

            let sql = `
                SELECT 
                *
                FROM comment
                WHERE 
                contentId=${pool.escape(contentId)}
            `;

            sql += ` order by commentId desc LIMIT ${currentPage * PAGE_SIZE},${PAGE_SIZE}`;

            excute(sql, (err, comment)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(comment);
                }
            });
        });

        let commentCount = new Promise((resolve, reject)=> {

            let sql = `
                SELECT 
                    COUNT(*) AS count 
                FROM comment
                WHERE 
                contentId=${pool.escape(contentId)}
            `;

            excute(sql, (err, count)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(count);
                }
            });
        });


        Promise.all([
            comment,
            commentCount
        ])
            .then((results)=> {
                callback(false, results);
            })
            .catch((err)=> {
                callback(err);
            })
        ;
    },
    /**
     * 提交评论
     * @param contentId
     * @param critics
     * @param dateStr
     * @param content
     * @param callback
     */
    comment: function (contentId, critics, dateStr, content, callback) {
        let sql = `
            INSERT INTO comment(contentId,critics,dateStr,content) 
            VALUES 
            (
                ${pool.escape(contentId)},
                ${pool.escape(critics)},
                ${pool.escape(dateStr)},
                ${pool.escape(content)}
            )
        `;

        excute(sql, (err)=> {
            if (err) {
                callback(err);
                return;
            }

            this.getComment(contentId, 0, callback);
            this._updateContentCommentCount(contentId);
        });
    },
    /**
     * 更新文章评论数
     * @param contentId
     * @private
     */
    _updateContentCommentCount: function (contentId) {
        let getCommentCount = new Promise((resolve, reject)=> {
            let sql = `
                SELECT 
                    COUNT(*) AS count 
                FROM comment
                WHERE 
                contentId=${pool.escape(contentId)}
            `;

            excute(sql, (err, result)=> {
                if (err) {
                    reject(err)
                } else {
                    resolve(result[0]);
                }
            });
        });

        let getContentCommentCount = new Promise((resolve, reject)=> {
            let sql = `
                SELECT 
                    commentCount AS commentCount 
                FROM content
                WHERE 
                contentId=${pool.escape(contentId)}
            `;
            excute(sql, (err, result)=> {
                if (err) {
                    reject(err)
                } else {
                    resolve(result[0]);
                }
            });
        });

        Promise.all([getCommentCount, getContentCommentCount])
            .then((result)=> {

                let commentCount = parseInt(result[0]['count']);
                let contentCommentCount = parseInt(result[1]['commentCount']);

                let sql = `
                UPDATE content
                SET commentCount=${commentCount + contentCommentCount}
                WHERE 
                contentId=${pool.escape(contentId)}
            `;
                excute(sql, (err, _result)=> {
                    if (err) {
                        throw new SQLException(err);
                    }
                });
            })
            .catch((err)=> {
                if (err) {
                    throw new SQLException(err);
                }
            });

    },
    /**
     * 评论点赞
     * @param userId
     * @param commentId
     * @param checked
     * @param callback
     */
    commentMark: function (userId, commentId, checked, callback) {

        let markCountPromise = new Promise((resolve, reject)=> {
            let sql = `
                SELECT markCount,userMarked FROM comment 
                WHERE commentId=${commentId}
            `;
            excute(sql, (err, result)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        let updateMarkCountPromise = new Promise((resolve, reject)=> {
            markCountPromise.then((_result)=> {

                let result = _result[0]['markCount'];
                let userMarked = _result[0]['userMarked'];
                if (checked) {
                    result++;
                    userMarked += `,${userId}`;
                } else {
                    result--;
                    let reg = new RegExp(`,${userId}`, 'g');
                    userMarked = userMarked.replace(reg, '');
                }

                let sql = `
                    UPDATE  comment 
                    SET     markCount=${result},userMarked=${pool.escape(userMarked)}
                    WHERE   commentId=${commentId}
                `;
                excute(sql, (err, markCount)=> {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result, markCount);
                    }
                });
            });
        });

        updateMarkCountPromise
            .then((result)=> {
                console.log(result)
                callback(false, result);
            })
            .catch((err)=> {
                callback(err);
            });

    },
};