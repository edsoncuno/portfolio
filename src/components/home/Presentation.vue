<script setup>
const saludo = "Hola";
const nombre = "Soy Edson Cuno"
const titulo = "Estudiante de Ingeniería Informática";
const mensaje = "Soy Edson Diego Cuno Tipso. Nací y resido en Lima - Perú. Soy estudiante de la Universidad Ricardo Palma, interesado en el desarrollo de aplicaciones y servicos web.";
</script>

<template>
    <div class="style">
        <div class="saludo">{{ saludo }}</div>
        <div class="nombre">{{ nombre }}</div>
        <div class="titulo">{{ titulo }}</div>
        <div class="mensaje">{{ mensaje }}</div>
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