/**
 * 详情页对象类
 * @type {{}}
 */
module.exports = function Index(header, content, comment, author, types) {
    this.header = header;
    this.content = content;
    this.comment = comment;
    this.author = author;
    this.types = types;
};