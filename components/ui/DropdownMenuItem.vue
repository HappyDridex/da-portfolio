<template>
    <li class="dropdown-item"
        :class="{ 'dropdown-item_active': isSelected }">
        <span class="dropdown-item__text">{{ item.text }}</span>
        <div class="dropdown-item__tip">
            <span class="dropdown-item__tip-text">
                {{ item?.tip }}
            </span>
        </div>
    </li>
</template>

<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi';
import { TDropdownMenuItem } from "@/types"

defineProps({
    item: {
        type: Object as PropType<TDropdownMenuItem>,
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

    @media(max-width: 768px) {
        max-height: 40px;
        padding: 12px 20px;
    }
}

.dropdown-item__text {
    font-size: 18px;
    font-weight: 400;
    color: var(--black);

    @media(max-width: 768px) {
        font-size: 16px;
    }
}

.dropdown-item__tip {
    padding: 7px 20px;
    color: var(--blue);
    border: 1px solid var(--blue);
    border-radius: 50px;
    width: fit-content;
    margin-left: 10px;

    @media(max-width: 768px) {
        padding: 5px 14px;
    }
}

.dropdown-item__tip-text {
    font-size: 16px;
    font-weight: 400;

    @media(max-width: 768px) {
        font-size: 14px;
    }
}

.dropdown-item_active {
    justify-content: flex-start;
}
</style>