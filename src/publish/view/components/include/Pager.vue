<template>
    <h4 class="text-center">
        <label for="pager">
            <span>您在第:</span>
            <select id="pager">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <span>页</span>
        </label>
    </h4>
</template>

<script>
    export default {
        name: 'pager'
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
