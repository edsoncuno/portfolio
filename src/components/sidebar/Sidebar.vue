<script setup>
    import Foto from "./Foto.vue";
    import Navbar from "./Navbar.vue";
</script>

<template>
    <div class="sidebar">
        <Foto/>
        <Navbar/>
    </div>
</template>

<style>
.sidebar {
    position: fixed;
    background: url("https://i.postimg.cc/sgQYKHQf/cloud-1600x2400.jpg");
    height: 100vh;
    width: 20vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 30% 70%;
    padding: 0px 1.5rem;
}
</style>