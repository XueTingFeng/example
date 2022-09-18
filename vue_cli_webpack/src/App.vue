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

<script>

export default {
    name: "App",
    components:{
        //Home
    }
}
</script>

<style>
.title{
    color:pink;
}
</style>