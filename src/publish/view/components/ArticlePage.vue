<template>
    <article>
        <header class="text-right">
            <button class="btn" @click="isShowAddModal=true" type="button">增加文章</button>
        </header>
        <div class="table-wrap">
            <table>
                <thead>
                <tr>
                    <th>序号</th>
                    <th>文章编号</th>
                    <th>标题</th>
                    <th>发布时间</th>
                    <th>文章类型</th>
                    <th>文章链接</th>
                    <th>文章图片路径</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in articles">
                    <td>{{++index}}</td>
                    <td>{{item.contentId}}</td>
                    <td :title="item.title"><p class="em-4">{{item.title}}</p></td>
                    <td>{{fmtDate(item.dateTime)}}</td>
                    <td>{{item.type}}</td>
                    <td :title="item.href"><p class="em-4">{{item.href}}</p></td>
                    <td :title="item.src"><p class="em-8">{{item.src}}</p></td>
                    <td>
                        <button class="btn" type="button" @click="showEditModal(item.contentId)">编辑</button>
                        <button class="btn" type="button" @click="showDelModal(item.contentId)">删除</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <pager v-bind:pageCount="pageCount" v-on:onPage="onPage"></pager>
        <div v-if="isShowDelModal" class="modal modal-sm">
            <div class="modal-content">
                <p>确定删除这篇文章吗？</p>
                <div>
                    <button type="button" @click="deleteArticle" class="modal-btn modal-btn-yes">删除</button>
                    <button type="button" @click="isShowDelModal=false" class="modal-btn modal-btn-no">取消</button>
                </div>
            </div>
        </div>
        <div v-if="isShowAddModal" class="modal">
            <div class="modal-content">
                <form id="addForm" enctype="multipart/form-data">
                    <div class="input">
                        <label for="title">标题</label>
                        <input type="text" id="title" name="title" maxlength="50">
                    </div>
                    <div class="input">
                        <label for="type">类型</label>
                        <select id="type" name="type">
                            <option value="JavaScript">JavaScript</option>
                            <option value="css">css</option>
                            <option value="html5">html5</option>
                            <option value="nodeJs">nodeJs</option>
                            <option value="面试题">面试题</option>
                            <option value="其他">其他</option>
                        </select>
                    </div>
                    <div class="input">
                        <label for="imgSrc">配图</label>
                        <input type="file" id="imgSrc" name="imgSrc">
                    </div>
                    <div class="input">
                        <label for="content">内容</label>
                        <textarea id="content" name="content" maxlength="20000"></textarea>
                    </div>
                    <div>
                        <button type="button" @click="addArticle" class="modal-btn modal-btn-save">保存</button>
                        <button type="button" @click="isShowAddModal=false" class="modal-btn modal-btn-no">取消</button>
                    </div>
                </form>
            </div>
        </div>
        <div v-show="isShowEditModal" class="modal">
            <div class="modal-content">
                <form id="editForm" enctype="multipart/form-data">
                    <input type="hidden" name="contentId">
                    <div class="input">
                        <label for="edit_title">标题</label>
                        <input type="text" id="edit_title" name="title" maxlength="50">
                    </div>
                    <div class="input">
                        <label for="edit_type">类型</label>
                        <select id="edit_type" name="type">
                            <option value="JavaScript">JavaScript</option>
                            <option value="css">css</option>
                            <option value="html5">html5</option>
                            <option value="nodeJs">nodeJs</option>
                            <option value="面试题">面试题</option>
                            <option value="其他">其他</option>
                        </select>
                    </div>
                    <div class="input">
                        <label for="edit_imgSrc">配图</label>
                        <input type="file" id="edit_imgSrc" name="imgSrc">
                    </div>
                    <div class="input">
                        <label for="edit_content">内容</label>
                        <textarea id="edit_content" name="content" maxlength="20000"></textarea>
                    </div>
                    <div>
                        <button type="button" @click="editArticle" class="modal-btn modal-btn-save">保存</button>
                        <button type="button" @click="isShowEditModal=false" class="modal-btn modal-btn-no">取消</button>
                    </div>
                </form>
            </div>
        </div>
    </article>
</template>

<script>
    import Pager from '../../view/components/include/Pager';
    export default {
        name: 'ArticlePage',
        data () {
            return {
                articles: [],
                types: [],
                pageCount: 0,
                isShowDelModal: false,
                isShowAddModal: false,
                isShowEditModal: false,
                contentId: -1
            }
        },
        components: {
            'pager': Pager
        },
        mounted () {
            this.onPage();
        },
        methods: {
            fmtDate (millisecond) {
                return fmtDate(millisecond);
            },
            showDelModal (contentId) {
                this.isShowDelModal = true;
                this.contentId = contentId;
            },
            showEditModal (contentId) {
                this.isShowEditModal = true;
                this.contentId = contentId;

                let form = document.querySelector('#editForm');
                // 给弹框赋值
                this.articles.forEach((value,key)=>{

                    if (contentId == value.contentId) {
                        form.title.value = value.title;
                        form.type.value = value.type;
                        form.content.value = value.content;
                    }

                });
            },
            _getErrorNode (msg,target) {
                let _span = document.createElement('span');
                _span.innerHTML=msg;
                _span.classList.add('error');
                target.parentNode.appendChild(_span);
            },
            validate({title, imgSrc, content}) {

                if (title.value === '') {
                    this._getErrorNode('标题不能为空', title);
                    return false;
                }

                const files = imgSrc.files;
                if (files.length === 0 || (files.length > 0 && (files[0].type !== 'image/png' && files[0].type !== 'image/jpg'))) {
                    this._getErrorNode('图片为空或者格式不对，只支持png和jpg', imgSrc);
                    return false;
                }

                if (content.value === '') {
                    this._getErrorNode('内容不能为空', content);
                    return false;
                }

                return true;

            },
            _submit(data, url, modalName, form) {

                if (this.validate(form)) {
                    $.post(url, data, this, {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                        }
                    }).then(()=> {
                        this.onPage();
                        this[modalName] = false;
                    });
                }

            },
            addArticle () {
                let form = document.querySelector('#addForm');
                this._submit(new FormData(form), Url.ADD, 'isShowAddModal', form);
            },
            editArticle () {

                let form = document.querySelector('#editForm');
                form.contentId = this.contentId;
                this._submit(new FormData(form), Url.EDIT, 'isShowEditModal', form);
            },
            deleteArticle () {
                $.post(Url.DELETE, {
                    contentId: this.contentId
                }, this).then(()=> {
                    this.onPage();
                    this.isShowDelModal = false;
                });
            },
            onPage (currentPage = 0) {

                $.get(Url.INDEX, {
                    type: 'all',
                    currentPage: currentPage
                }, this).then(data=> {
                    this.articles = data.items;
                    this.pageCount = data.PAGE_COUNT;
                });
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    .modal {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .modal.modal-sm .modal-content {
        width: 300px;
    }

    .modal .modal-content {
        position: absolute;
        width: 600px;
        z-index: 10;
        background-color: #fff;
        text-align: center;
        border-radius: 10px;
        top: 30px;
        left: 50%;
        margin-left: -300px;
        padding-bottom: 1em;
    }

    .modal p {
        line-height: 7;
    }

    .modal .modal-btn {
        border: 0 none;
        outline: 0 none;
        color: #fff;
        padding: 7px 18px;
        border-radius: 40%;
        cursor: pointer;
    }

    .modal .modal-btn-yes {
        background-color: rgba(222, 15, 15, 0.8);
    }

    .modal .modal-btn-save {
        background-color: rgba(81, 222, 90, 0.8);
    }

    .modal .modal-btn-no {
        background-color: rgba(0, 0, 0, 0.2);
    }

    .modal form {
        padding: 2em;
        font-size: 16px;
    }

    .modal .input {
        line-height: 40px;
        text-align: left;
        padding: 1em;
        position: relative;
    }

    .modal input[type=text],
    .modal label {
        vertical-align: middle;
        line-height: 40px;
    }

    .modal input[type=text],
    .modal textarea,
    .modal select {
        border: 0 none;
        outline: 0 none;
        box-shadow: 0 0 1px rgba(51, 51, 51, 0.3);
        display: block;
        width: 100%;
        height: 40px;
        padding-left: 1em;
    }

    .modal textarea {
        width: 97%;
        max-width: 97%;
        min-width: 97%;
        min-height: 200px;
        padding: 1em;
    }

    .modal label {
        color: #666;
    }
</style>
