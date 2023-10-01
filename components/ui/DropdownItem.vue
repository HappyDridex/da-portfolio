<template>
    <li class="dropdown-item"
        :class="{ 'dropdown-item_active': isSelected }">
        <span class="dropdown-item__text">{{ item.text }}</span>
        <div class="dropdown-item__tip">{{ item?.tip }}</div>
    </li>
</template>

<script setup>
defineProps({
    item: {
        type: Object,
        required: true
    },
    isSelected: {
        type: Boolean,
        required: true
    }
})

</script>

<style scoped>
.dropdown-item {
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 54px;
    cursor: pointer;
}

.dropdown-item__text {
    font-size: 18px;
    font-weight: 400;
    color: var(--black);
}

.dropdown-item__tip {
    padding: 7px 20px;
    color: var(--blue);
    border: 1px solid var(--blue);
    border-radius: 50px;
    width: fit-content;
    margin-left: 10px;
}

.dropdown-item_active {
    justify-content: flex-start;
}
</style>