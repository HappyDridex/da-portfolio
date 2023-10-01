<template>
    <button class="button-with-icons"
        :class="{
            'button-with-icons_blue': blueTheme,
            'button-with-icons__active': isActive

        }">
        <slot name="left-icon" />
        <span class="button-with-icons__text">
            {{ buttonText }}
        </span>
        <slot name="right-icon" />
    </button>
</template>

<script setup>
const props = defineProps({
    buttonText: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: false
    },
    blueTheme: {
        type: Boolean,
        required: false
    },
});

</script>

<style scoped>
.button-with-icons {
    padding: 15px 30px;
    font-size: 18px;
    font-weight: 400;
    border-radius: 50px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    color: var(--black);
    background: var(--white);
    border: 1px solid var(--gray-dark);
}

.button-with-icons__text {
    width: max-content;
}

.button-with-icons:hover {
    border: 1px solid var(--blue);
}

.button-with-icons_blue:hover {
    color: var(--white);
    background: var(--blue);
}

:slotted(svg:first-child) {
    margin-right: 12px;
}

:slotted(svg:last-child) {
    margin-left: 36px;
}

.button-with-icons_blue {
    color: var(--blue);
    border: 1px solid var(--blue);
}

.button-with-icons__active {
    color: var(--blue);
    border: 1px solid var(--blue);
}
</style>