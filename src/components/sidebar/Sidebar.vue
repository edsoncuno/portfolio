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
    background-color: #f6f6f6;
    height: 100vh;
    width: 20vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 30% 70%;
    padding: 0px 1.5rem;
}
</style>