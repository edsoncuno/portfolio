<script setup>
import Photo from "./Photo.vue";
import { RouterLink } from 'vue-router';

const itemsRoutes = [
    { route: "/", name: "Inicio" },
    { route: "/proyectos", name: "Proyectos" },
    { route: "/curriculum-vitae", name: "Curriculum Vitae" }
]

</script>

<template>
    <div class="container">
        <div class="photo">
            <Photo />
        </div>
        <nav>
            <RouterLink v-for="item in itemsRoutes" :to="item.route">
                <button>{{ item.name }}</button>
            </RouterLink>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.container {
    background: url("https://i.postimg.cc/h4TPZh4n/pexels-life-of-pix-8892.jpg");
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40% 60%;
    padding: 0px 1.5rem;
    box-shadow: 0px 15px 15px 15px rgba(0, 0, 0, 0.2);

    .photo {
        width: 100%;
        height: 100%;
    }

    nav {
        width: 100%;

        button {
            font-family: "Comfortaa", cursive;
            background-color: white;
            width: 100%;
            min-height: 3rem;
            max-height: 6rem;
            border: 2px black solid;
            border-radius: 0.5rem;
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            padding: 0.5rem;
            transition: all 0.2s;
        }

        button:hover {
            background-color: #D3D3D3;
        }

        button:active {
            border: 2px white solid;
            background-color: #415D65;
            color: white;
        }
    }
}
</style>