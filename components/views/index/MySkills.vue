<template>
    <section class="my-skills"
        id="my-skills">
        <h2 class="my-skills__title">Что я умею?</h2>
        <UiSwiperButtons class="my-skills__swiper"
            :slides="swiperButtons" />

        <ul class="my-skills__projects">
            <UiProjectItem v-for="project in projects"
                :key="project.name"
                :project="project" />
        </ul>
    </section>
</template>

<script setup>

const swiperButtons = [
    { text: "Все сайты", link: null },
    { text: "Многостраничные сайты / лендинги", link: "websites" },
    { text: "E-commerce проекты", link: "ecommerce" },
    { text: "3D графика", link: "graphics" },
];

const projects = [
    { name: "shop-redesign-case", title: "E-commerce", image: "/media/images/shop-project.png", category: "", link: "", isNew: true },
    { name: "lms-case", title: "LMS/ERP", image: "/media/images/lms-project.png", category: "", link: "" },
    { name: "consult-landing-case", title: "Landing", image: "/media/images/landing-project.png", category: "", link: "" },
    { name: "crypto-oracul-case", title: "Crypto Oracul", image: "/media/images/crypto-project.png", category: "", link: "" },
];



</script>

<style scoped>
.my-skills__title {
    font-size: 40px;
    font-weight: 500;
    width: fit-content;
    margin: 0 auto;
}

.my-skills__swiper {
    margin-top: 50px;
}

.my-skills__projects {
    margin-top: 116px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px 20px;
}

@media(max-width: 768px) {

    .my-skills__title {
        font-size: 25px;
    }

    .my-skills__swiper {
        margin-top: 40px;
    }

    .my-skills__projects {
        display: flex;
        flex-direction: column;
    }
}
</style>