<script setup>
defineProps({
    text: String,
    onCLick: Function
});
</script>
<template>
    <button @click="onClick">{{ text }}</button>
</template>

<style scoped>
button {
    width: 20rem;
    height: 5rem;
    border-radius: 1rem;
    background-color: #415D65;
    color: white;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
}
</style>