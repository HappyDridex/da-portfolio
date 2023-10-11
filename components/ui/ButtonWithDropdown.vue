<template>
    <div class="button-with-dropdown"
        ref="wrapperRef"
        :style="{ maxHeight: `${dropdownHeight}px` }">

        <button class="button-with-dropdown__button dropdown-button"
            @click="dropdownIsOpened = !dropdownIsOpened">
            <p class="dropdown-button__title">{{ buttonInfo.title }}</p>
            <div class="dropdown-button__info">
                <span class="dropdown-button__info-readtime">{{ buttonInfo.readtime }}</span>
                <IconsPlusInRound class="dropdown-button__info-icon" />
            </div>
        </button>

        <p class="button-with-dropdown__description">
            {{ buttonInfo.description }}
        </p>

        <ul class="button-with-dropdown__illustrations-list dropdown-illustration-list"
            v-if="!!buttonInfo?.images?.length">
            <li class="dropdown-illustration-list__list-item"
                v-for="(image, idx) in buttonInfo.images"
                :key="idx">
                <img class="dropdown-illustration-list__image"
                    :src="image"
                    alt="Иллюстрация">
            </li>
        </ul>

    </div>
</template>

<script setup lang=ts>
import { IButtonWithDropDownProps } from "@/types"
import { PropType } from "nuxt/dist/app/compat/capi";

defineProps({
    buttonInfo: {
        type: Object as PropType<IButtonWithDropDownProps>,
        required: true
    }
});

const wrapperRef = ref(null);
const dropdownIsOpened = ref(false);

const { dropdownHeight } = useDropdown(wrapperRef, ".button-with-dropdown__button, .button-with-dropdown__text, .button-with-dropdown__illustrations-list", dropdownIsOpened);


</script>

<style scoped>
.button-with-dropdown {
    border: 1.5px solid var(--gray-dark);
    border-radius: 20px;
    overflow: hidden;
    transition: max-height 0.5s ease;
}


.dropdown-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.dropdown-button__title {
    font-size: 20px;
    font-weight: 400;
    padding: 30px;
}

.dropdown-button__info {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 30px;
}

.dropdown-button__info-readtime {
    font-size: 16px;
    font-weight: 400;
    color: #7A7A7A;
}

.button-with-dropdown__description {
    padding: 0 30px;
    line-height: 1.5;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    color: var(--black);
}

.button-with-dropdown__illustrations-list {
    padding: 25px;
}

.dropdown-illustration-list {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.dropdown-illustration-list__list-item {
    background: var(--gray);
    border-radius: 20px;
    overflow: hidden;
}

.dropdown-illustration-list__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>