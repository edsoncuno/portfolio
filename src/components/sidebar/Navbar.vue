<script setup>
import Button from "./Button.vue"

const list = [
    { route: "/", text: "Inicio" },
    { route: "/proyectos", text: "Proyectos" },
    { route: "/cv", text: "CV" }
]

</script>

<template>
    <nav class="navbar">
        <Button v-for="element in list" :route="element.route" :text="element.text" />
    </nav>
</template>

<style>
.navbar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>