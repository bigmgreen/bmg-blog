<template>
    <h4 class="text-center">
        <label for="pager">
            <span>您在第:</span>
            <select id="pager" @change="onChange">
                <option v-for="n in pageCount" :value="n">{{n}}</option>
            </select>
            <span>页</span>
        </label>
    </h4>
</template>

<script>
    export default {
        name: 'pager',
        props: ['pageCount'],
        methods: {
            onChange (e) {

                let val = e.target.value;

                if (val>0) {
                    val--;
                }

                this.$emit('onPage', val);
            }
        }
    }
</script>

<style scoped>
    select {
        width: 100px;
        height: 2em;
        border: 0 none;
        border-radius: 50%;
        outline: 0 none;
        cursor: pointer;
    }
</style>
