<template>
    <header class="header">
        <nav class="navbar">
            <div class="navbar__logo">
                <IconsLogoDA />
            </div>
            <ul class="navbar__links">
                <li class="navbar__link">Обо мне</li>
                <li class="navbar__link">Что я умею?</li>
                <li class="navbar__link">Контакты</li>
            </ul>
        </nav>
        <UiButtonWithIcons class="header__contact-button"
            :button-text="'Связаться со мной'"
            :blue-theme="true" />

        <button class="header__mobile-menu-button">
            <IconsBurgerMenu />
        </button>

    </header>
</template>

<style scoped>
.header {
    padding: 25px 0;
}

.header,
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar__links {
    display: flex;
    align-items: center;
    margin-left: 51px;
}

.navbar__link {
    font-size: 18px;
    font-weight: 400;
}

.navbar__link+.navbar__link {
    margin-left: 20px;
}

.header__mobile-menu-button {
    display: none;
}

@media(max-width: 768px) {

    .navbar__links,
    .header__contact-button {
        display: none;
    }

    .header__mobile-menu-button {
        display: block;
        padding: 10px;
    }

}
</style>