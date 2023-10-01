<template>
    <section class="about-me">
        <h2 class="about-me__title">Обо мне</h2>

        <div class="about-me__main">
            <div class="about-description">
                <p class="about-description__text">
                    Я продуктовый дизайнер более 3 лет. Я смотрю на интрефейсы уже не как на набор цветов с компонентами, а как на бизнес. Интерфейс должен приумножать показатели прежде всего и служить верным помощником пользователям.
                    <br class="about-description__br">
                    <br class="about-description__br">
                    Занимаюсь комплексным анализом, сбором данных, построением бизнес-процессов, BPMN моделей, работой с метриками. Разрабатываю интерфейсы с уклоном в бизнес.
                </p>
                <UiButtonWithIcons class="about-description__cv-button"
                    :button-text="'Посмотреть полное резюме'"
                    :blue-theme="true">
                    <template v-slot:left-icon>
                        <IconsNoteWithLines />
                    </template>
                    <template v-slot:right-icon>
                        <IconsArrowLeft class="cv-button__arrow-icon" />
                    </template>
                </UiButtonWithIcons>
            </div>

            <figure class="about-illustration">
                <video class="about-illustration__video"
                    src="/media/videos/glass-orb.mp4"
                    autoplay
                    muted
                    loop>
                </video>
            </figure>
        </div>

    </section>
</template>

<style scoped>
.about-me__title {
    font-size: 40px;
    font-weight: 500;
    color: var(--black);
    width: fit-content;
    margin: 0 auto;
}

.about-me__main {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    column-gap: 56px;
    margin-top: 70px;
}

.about-description__text {
    font-size: 22px;
    font-weight: 400;
    color: var(--black);
    line-height: 1.8;
}

.about-description__cv-button {
    margin-top: 40px;
}

.cv-button__arrow-icon {
    transform: rotate(135deg);
}

.about-illustration {
    background: var(--light-gray);
    border-radius: 20px;
    padding: 44px 90px;
    height: fit-content;
}

.about-illustration__video {
    width: 100%;
    height: 100%;
}

@media(max-width: 1440px) {
    .about-me__main {
        grid-template-columns: 1fr 1.2fr;
    }

    .about-illustration {
        height: 80%;
        padding: 34px 70px;
    }
}

@media(max-width: 1024px) {
    .about-illustration {
        padding: 0;
    }
}

@media(max-width: 768px) {
    .about-me__title {
        font-size: 25px;
    }

    .about-me__main {
        display: flex;
        flex-direction: column-reverse;
        gap: 0;
        margin-top: 40px;
    }

    .about-illustration {
        height: 290px;
        margin-bottom: 40px;
    }


    .about-description__text {
        font-size: 18px;
        text-align: center;
    }

    .about-description__br:last-child {
        display: none;
    }

    .about-description__cv-button {
        margin-left: auto;
        margin-right: auto;
        width: fit-content;
    }
}
</style>