<script setup>
defineProps({
    classicon: String,
    text: String
});
</script>

<template>
    <div class="icon">
        <font-awesome-icon :icon="classicon" />
        <div class="text">{{ text }}</div>
    </div>
</template>

<style scoped lang="scss">

.icon {
    //border: 1px black solid;
    //border-radius: 1rem;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    .text{
        font-size: 1rem;
    }
    //margin: 0.5rem;
}
</style>