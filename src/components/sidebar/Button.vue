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
        background-color: white;
        height: 3rem;
        width: 100%;
        border: 2px black solid;
        border-radius: 0.5rem;
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
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
</style>