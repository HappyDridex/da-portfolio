<template>
    <ul class="dropdown-menu"
        :style="{ maxHeight: `${dropdownHeight}px` }"
        ref="menuRef">
        <UiDropdownMenuItem class="dropdown-menu__item"
            v-for="item in dropdownItems"
            :key="item.text"
            :item="item"
            :is-selected="item === selectedItem"
            @click="item === selectedItem ? dropdownIsOpened = !dropdownIsOpened : onItemClick(item)" />
        <IconsChevronUp class="dropdown-menu__chevron"
            :class="{ 'dropdown-menu__chevron_opened': dropdownIsOpened }" />
    </ul>
</template>

<script setup lang="ts">

const menuRef = ref(null)
const dropdownIsOpened = ref(false);

const { dropdownHeight } = useDropdown(menuRef, ".dropdown-menu__item", dropdownIsOpened);

const dropdownItems = ref([
    { text: "Несрочный заказ", tip: "-10%" },
    { text: "Срочный заказ", tip: "-20%" },
    { text: "Суперсрочный заказ", tip: "-30%" }
]);

const selectedItem = computed(() => dropdownItems.value[0]);

const onItemClick = (item: Record<string, string>) => {
    dropdownItems.value.sort((a, b) => {
        return a === item ? -1 : b === item ? 1 : 0;
    });
    dropdownIsOpened.value = false;
};

</script>

<style scoped>
.dropdown-menu {
    border: 1.5px solid var(--gray-dark);
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    position: relative;
    transition: max-height 0.2s ease;
    overflow: hidden;

    @media(max-width: 768px) {
        border-radius: 16px;
    }
}

.dropdown-menu__item+.dropdown-menu__item {
    border-top: 1px solid var(--gray-dark);
}

.dropdown-menu__chevron {
    position: absolute;
    right: 13px;
    top: 20px;
    transition: transform 0.2s ease 0.05s;

    @media(max-width: 768px) {
        top: 12px;
        border-radius: 16px;
    }
}

.dropdown-menu__chevron_opened {
    transform: rotate(180deg);
}
</style>