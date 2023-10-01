<template>
    <main class="container index-page-wrapper">
        <TheHeader class="index-page-wrapper__header" />
        <ViewsIndexIntroductionPreview class="index-page-wrapper__video-preview" />
        <ViewsIndexAboutMe class="index-page-wrapper__about-me" />
        <ViewsIndexMySkills class="index-page-wrapper__my-skills" />
        <ViewsIndexContactMe class="index-page-wrapper__contact-me" />
    </main>
</template>

<style scoped>
.index-page-wrapper {
    padding-bottom: 400px;
}

.index-page-wrapper__video-preview {
    margin-top: 67px;
}

.index-page-wrapper__about-me,
.index-page-wrapper__my-skills,
.index-page-wrapper__contact-me {
    margin-top: 100px;
}

@media(max-width: 768px) {
    .index-page-wrapper__video-preview {
        margin-top: 22px;
    }

    .index-page-wrapper__about-me,
    .index-page-wrapper__my-skills,
    .index-page-wrapper__contact-me {
        margin-top: 80px;
    }
}
</style>