<template>
    <main class="container index-page-wrapper">
        <ViewsIndexIntroductionPreview class="index-page-wrapper__video-preview" />
        <ViewsIndexAboutMe class="index-page-wrapper__about-me" />
        <ViewsIndexMySkills class="index-page-wrapper__my-skills" />
        <ViewsIndexContactMe class="index-page-wrapper__contact-me" />
    </main>
</template>

<script setup>
definePageMeta({
    layout: "default"
});
</script>

<style scoped>
.index-page-wrapper {
    padding-bottom: 400px;

    @media(max-width: 768px) {
        padding-bottom: 200px;
    }
}

.index-page-wrapper__video-preview {
    margin-top: 67px;

    @media(max-width: 768px) {
        margin-top: 22px;
    }
}

.index-page-wrapper__about-me,
.index-page-wrapper__my-skills,
.index-page-wrapper__contact-me {
    margin-top: 100px;

    @media(max-width: 768px) {
        margin-top: 80px;
    }
}
</style>