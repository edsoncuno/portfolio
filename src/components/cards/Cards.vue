<script setup>
import Card from "./Card.vue";

defineProps({
    titulo: String,
    items: Array
});

</script>

<template>
    <div class="style">
        <div class="titulo">{{ titulo }}</div>
        <div v-for="(item, index) in items">
            <hr v-show="index != 0">
            <Card :titulo="item.titulo" :mensaje="item.mensaje" :src="item.src" :href="item.href" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.style {
    width: 100%;
    .titulo {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
}
</style>