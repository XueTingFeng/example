<template>
    <h1 class="title">
        hello app
    </h1>
    <!-- <Home/> -->
    <ul>
        <li>
            <router-link to="/home">home</router-link>
        </li>

        <li>
            <router-link to="/about">about</router-link>
        </li>
    </ul>

    <router-view></router-view>
</template>

<script setup>
function test() {
    let arr = []
    for (var i = 0; i < 10; i++) {
        arr[i] = function () {
            console.log(i)
        }
    }
    return arr
}

let arr = test()
for (let j = 0; j < 10; j++) {
    arr[j]()
}
</script>

<style>
.title {
    color: pink;
}
</style>