<template>
    <ul class="dropdown-menu"
        ref="menu"
        :style="{ maxHeight: `${dropdownHeight}px` }">
        <UiDropdownItem class="dropdown-menu__item"
            v-for="item in dropdownItems"
            :key="item.text"
            :item="item"
            :is-selected="item === selectedItem"
            @click="item === selectedItem ? dropdownIsOpened = !dropdownIsOpened : onItemClick(item)" />
        <IconsChevronUp class="dropdown-menu__chevron"
            :class="{ 'dropdown-menu__chevron_opened': dropdownIsOpened }" />
    </ul>
</template>

<script setup>

const dropdownIsOpened = ref(false);
const menu = ref(null);
const dropdownHeight = ref(0);

const dropdownItems = ref([
    { text: "Несрочный заказ", tip: "-10%" },
    { text: "Срочный заказ", tip: "-20%" },
    { text: "Суперсрочный заказ", tip: "-30%" }
]);

const selectedItem = computed(() => dropdownItems.value[0]);

const onItemClick = (item) => {
    dropdownItems.value.sort((a, b) => {
        return a === item ? -1 : b === item ? 1 : 0;
    });
    dropdownIsOpened.value = false;
};

const getDropdownHeight = (dropdownIsOpened = false) => {
    const menuItems = [...document.querySelectorAll(".dropdown-menu__item")];

    if (!dropdownIsOpened) {
        return menuItems[0].offsetHeight;
    } else {
        return menuItems.reduce((acc, el) => {
            return acc + el.offsetHeight || 0;
        }, 0);
    }
};

watch(dropdownIsOpened,
    (val) => {
        if (!menu.value) {
            return;
        }
        dropdownHeight.value = getDropdownHeight(val);
    });

onMounted(() => {
    dropdownHeight.value = getDropdownHeight();
})

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
}

.dropdown-menu__item+.dropdown-menu__item {
    border-top: 1px solid var(--gray-dark);
}

.dropdown-menu__chevron {
    position: absolute;
    right: 13px;
    top: 12px;
    transition: transform 0.2s ease 0.05s;
}

.dropdown-menu__chevron_opened {
    transform: rotate(180deg);
}
</style>