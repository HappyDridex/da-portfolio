<template>
    <button class="button-main">{{ buttonText }}</button>
</template>

<script setup>
defineProps({
    buttonText: {
        type: String,
        required: true
    }
});
</script>

<style scoped>
.button-main {
    padding: 15px 30px;
    font-size: 18px;
    color: var(--dark-font);
    font-weight: 400;
    border-radius: 50px;
    border: 1px solid var(--gray);
}
</style>