<template>
    <button class="submit-button"
        :type="type || 'submit'">
        {{ buttonText }}
    </button>
</template>

<script setup>
defineProps({
    buttonText: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    }
});
</script>

<style scoped>
.submit-button {
    padding: 22px;
    background: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-size: 18px;
    border-radius: 20px;
    transition: all 0.2s ease;

    @media(max-width: 768px) {
        padding: 16px;
        font-size: 16px;
        border-radius: 16px;
    }
}
</style>