<template>
    <section class="project-steps">
        <h2 class="project-steps__title">{{ project.steps_title }}</h2>
        <div class="project-steps__content">
            <ul class="project-steps__list">
                <UiButtonWithDropdown class="project-steps__list-item"
                    v-for="button in project.steps"
                    :key="button.title"
                    :button-info="button" />
            </ul>
            <figure class="project-steps__illustration">
                <img class="project-steps__illustration-image"
                    :src="project.steps_img"
                    alt="Иллюстрация" />
            </figure>
        </div>
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
.project-steps__title {
    font-size: 40px;
    font-weight: 500;
    width: fit-content;
    margin: 0 auto;
}

.project-steps__content {
    margin-top: 52px;
    display: flex;
    flex-wrap: nowrap;
    column-gap: 56px;
}

.project-steps__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 60%;
}

.project-steps__illustration {
    width: 40%;
}

.project-steps__illustration-image {
    object-position: top;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>