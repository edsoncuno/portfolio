<script setup>
import Sidebar from "./sidebar/Sidebar.vue";
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="layout">
        <Sidebar />
        <RouterView />
    </div>
</template>

<style>
.layout {
    /*
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 1fr;
    */
    background-color: white;
}
</style>