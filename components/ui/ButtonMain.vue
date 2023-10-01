<template>
    <button class="button-main">
        <span class="button-main__text">
            {{ buttonText }}
        </span>
    </button>
</template>

<script setup>

defineProps({
    buttonText: {
        type: String,
        required: false
    }
});

</script>

<style scoped>
.button-main {
    padding: 15px 30px;
    border-radius: 50px;
    color: var(--black);
    background: var(--white);
    transition: all 0.2s ease;
}

.button-main:hover {
    color: var(--white);
    background: var(--blue);
}
</style>