<template>
    <li class="project-item">
        <div v-if="project?.isNew"
            class="project-item__new-badge">
            <div class="project-item__new-badge-content">
                <IconsThumbsUp />
                <span>Новинка</span>
            </div>
        </div>

        <h3 class="project-item__name">{{ project.title }}</h3>
        <figure class="project-item__content">
            <img class="project-item__image"
                :src="project.image"
                alt="Фото проекта">
        </figure>
        <UiButtonMain class="project-item__submit-button"
            :button-text="'Посмотреть'"
            @click="navigateTo(`/projects/${project.name}`)" />
    </li>
</template>

<script setup>
defineProps({
    project: {
        type: Object,
        required: true
    },
});
</script>

<style scoped>
.project-item {
    width: 100%;
    height: 466px;
    border-radius: 30px;
    background: var(--gray);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 48px;
    padding-bottom: 34px;
    position: relative;
}

.project-item__new-badge {
    position: absolute;
    top: 0;
    z-index: -1;
    transform: translateY(-50%);
    width: calc(100% - 40px);
    height: 95px;
    background: var(--green-light);
    border-radius: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.project-item__new-badge-content {
    padding: 13px;
    display: flex;
    align-items: center;
    color: var(--white);
    gap: 10px;
}

.project-item__name {
    font-size: 25px;
    font-weight: 700;
}

.project-item__content {
    position: absolute;
    z-index: 0;
    top: 125px;
    bottom: 0;
    max-width: 80%;
}

.project-item__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top;
}

.project-item__name,
.project-item__submit-button {
    position: relative;
    z-index: 1;
}

@media(max-width: 1440px) {
    .project-item {
        height: 426px;
    }
}

@media(max-width: 1024px) {
    .project-item {
        height: 386px;
    }
}

@media(max-width: 768px) {
    .project-item {
        height: 426px;
    }
}
</style>