<script setup>
const saludo = "Hola";
const nombre = "Soy Edson Cuno"
const titulo = "Estudiante de Ingeniería Informática";
const mensaje = "I made this template for everyone who needs to create a personal website easily and quickly. This template includes Project Section, CV Section, Store, Paginated Blog, RSS Feed, SEO Friendly, Responsive Desing and 29 Visual themes. I hope you find it useful!";
</script>

<template>
    <div class="style">
        <div class="saludo">{{ saludo }}</div>
        <div class="nombre">{{ nombre }}</div>
        <div class="titulo">{{ titulo }}</div>
        <div class="mensaje">{{mensaje}}</div>
    </div>
</template>
<style scoped lang="scss">
.style {
    display: flex;
    flex-direction: column;

    .saludo {
        font-size: 1.5rem;
    }

    .nombre {
        font-size: 3rem;
        font-weight: bold;
    }

    .titulo {
        font-size: 2rem;
    }

    .mensaje {
        padding-top: 1rem;
        font-size: 1.2rem;
    }
}
</style>