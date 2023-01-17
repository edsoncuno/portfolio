<script setup>
import { RouterLink } from 'vue-router';

const itemsRoutes = [
    { route: "/", name: "Inicio" },
    { route: "/proyectos", name: "Proyectos" },
    { route: "/curriculum-vitae", name: "Curriculum Vitae" }
]
</script>

<template>
    <header>
        <nav>
            <RouterLink v-for="item in itemsRoutes" :to="item.route">
                <button class="button">{{ item.name }}</button>
            </RouterLink>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;

    nav {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        button {
            font-family: "Comfortaa", cursive;
            color: white;
            background-color: black;
            border: none;
            height: 70%;
            border-radius: 3rem;
            font-weight: bold;
            transition: all 0.3s;
            font-size: 1.5rem;
            padding: 0.5rem;
        }

        button:active {
            background-color: white;
            color: black;
        }
    }
}
</style>