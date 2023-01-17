<script setup>
import { RouterView } from 'vue-router'
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import HeaderSmall from "./HeaderSmall.vue"
import SiderbarSmall from "./SidebarSmall.vue";

import { ref } from 'vue';

const isActiveSidebarSmall = ref(false);

function handleSidebarSmall() {
    if (isActiveSidebarSmall.value) {
        isActiveSidebarSmall.value = false;
    } else {
        isActiveSidebarSmall.value = true;
    }
}

function hiddenSidebarSmall() {
    isActiveSidebarSmall.value = false;
}

</script>
<template>
    <div class="layout">
        <div class="sidebar">
            <Sidebar />
        </div>
        <div class="view">
            <RouterView />
        </div>
        <div class="header">
            <Header />
        </div>
        <div class="headersmall">
            <HeaderSmall :do="handleSidebarSmall" />
        </div>
        <div class="sidebarsmall" :class="{ activesidebarsmall: isActiveSidebarSmall }">
            <SiderbarSmall :do="hiddenSidebarSmall"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.layout {
    width: 100%;
    position: relative;

    .sidebar {
        width: 20%;
        position: fixed;
        top: 0;
        left: 0;
    }

    .view {
        margin-left: 20%;
        width: 80%;
    }

    .header {
        display: none;
        width: 100%;
        height: 4rem;
        position: fixed;
        top: 0;
        left: 0;
    }

    .headersmall {
        display: none;
        width: 100%;
        height: 4rem;
        position: fixed;
        top: 0;
        left: 0;
    }

    .sidebarsmall {
        width: 100%;
        height: auto;
        position: fixed;
        top: 4rem;
        left: -100%;
        transition: all 0.3s;
    }

    .activesidebarsmall {
        left: 0;
    }

    @media all and (max-width: 1050px) {
        .sidebar {
            display: none;
        }

        .view {
            width: 100%;
            margin-left: 0%;
            margin-top: 4rem;
        }

        .header {
            display: block;
        }
    }

    @media all and (max-width: 530px) {
        .header {
            display: none;
        }

        .headersmall {
            display: block;
        }

        /*
        .sidebarsmall {
            left: 0;
        }
        */
    }
}
</style>