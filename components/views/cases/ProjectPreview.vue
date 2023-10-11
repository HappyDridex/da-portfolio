<template>
    <section class="case-project__preview-section">
        <h2 class="case-project__title">{{ project.preview_title }}</h2>
        <figure class="case-project__preview-illustration">
            <img class="case-project__preview-illustration-image"
                :src="project.preview_img"
                alt="Иллюстрация" />
        </figure>
    </section>
</template>

<script setup lang="ts">

defineProps({
    project: {
        type: Object,
        required: true
    }
})

</script>

<style scoped>
.case-project__title {
    font-size: 40px;
    font-weight: 500;
    width: fit-content;
    margin: 0 auto;
}

.case-project__preview-illustration {
    margin-top: 54px;
    width: 100%;
}

.case-project__preview-illustration-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>