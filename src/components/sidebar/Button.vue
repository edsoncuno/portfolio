<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    route: String,
    text: String
})
</script>

<template>
    <div class="container">
        <RouterLink :to=route>
            <button class="button">{{ text }}</button>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;

    button {
        background-color: transparent;
        height: 3rem;
        width: 100%;
        border: 0px transparent solid;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: bold;
    }

    button:hover {
        background-color: Gainsboro;
    }

    button:active {
        background-color: black;
        color: white;
    }
}
</style>