<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    do: Function
});

const itemsRoutes = [
    { route: "/", name: "Inicio" },
    { route: "/proyectos", name: "Proyectos" },
    { route: "/curriculum-vitae", name: "Curriculum Vitae" }
]
</script>

<template>
    <nav>
        <RouterLink v-for="item in itemsRoutes" :to="item.route" @click="props.do">
            {{ item.name }}
        </RouterLink>
    </nav>
</template>
<style scoped lang="scss">
nav {
    color: white;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        font-family: "Comfortaa", cursive;
        text-decoration: none;
        color: white;
        padding: 1rem 0rem;
    }
}
</style>