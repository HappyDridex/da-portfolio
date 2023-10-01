<template>
    <swiper class="swiper-buttons"
        :slides-per-view="'auto'"
        :space-between="20">
        <swiper-slide class="swiper-buttons__slide"
            v-for="slide in slides"
            @click="onSlideClick(slide.link)">
            <UiButtonWithIcons :button-text="slide.text"
                :is-active="(route?.query?.category || null) === slide?.link" />
        </swiper-slide>

    </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

defineProps({
    slides: {
        type: Array,
        required: true,
        default: []
    }
});

const router = useRouter();
const route = useRoute();

function onSlideClick(link) {
    if (link === null) {
        router.replace({
            query: null
        });
    } else {
        router.push({
            query: {
                category: link
            }
        });
    }
}
</script>

<style scoped>
.swiper-buttons {
    width: fit-content;
}

.swiper-buttons__slide {
    width: auto;
}

@media(max-width: 1024px) {
    .swiper-buttons {
        width: 100%;
    }
}
</style>