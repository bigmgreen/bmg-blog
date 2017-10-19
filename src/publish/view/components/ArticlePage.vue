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
                <form>
                    <div class="input">
                        <label for="title">标题</label>
                        <input type="text" id="title" name="title" maxlength="50">
                    </div>
                    <div class="input">
                        <label for="type">类型</label>
                        <select id="type" name="type">
                            <option>JavaScript</option>
                            <option>css</option>
                            <option>html5</option>
                            <option>nodeJs</option>
                            <option>面试题</option>
                            <option>其他</option>
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
        <div v-if="isShowEditModal" class="modal">
            <div class="modal-content">
                <form>
                    <div class="input">
                        <label for="edit_title">标题</label>
                        <input type="text" id="edit_title" name="title" maxlength="50">
                    </div>
                    <div class="input">
                        <label for="edit_type">类型</label>
                        <select id="edit_type" name="type">
                            <option>JavaScript</option>
                            <option>css</option>
                            <option>html5</option>
                            <option>nodeJs</option>
                            <option>面试题</option>
                            <option>其他</option>
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
            },
            addArticle () {
                alert('保存')
            },
            editArticle () {
                alert('编辑')
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
