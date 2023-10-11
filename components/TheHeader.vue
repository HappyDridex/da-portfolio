<template>
    <header class="header container">
        <nav class="navbar">
            <a class="navbar__logo"
                @click="navigateTo('/')">
                <IconsLogoDA />
            </a>
            <ul class="navbar__links">
                <li class="navbar__link">
                    <NuxtLink :to="{ path: '/', hash: '#about-me' }">
                        Обо мне
                    </NuxtLink>
                </li>
                <li class="navbar__link">
                    <NuxtLink :to="{ path: '/', hash: '#my-skills' }">
                        Что я умею?
                    </NuxtLink>
                </li>
                <li class="navbar__link">
                    <NuxtLink :to="{ path: '/', hash: '#contact-me' }">
                        Контакты
                    </NuxtLink>
                </li>
            </ul>
        </nav>
        <UiButtonWithIcons class="header__contact-button"
            :button-text="'Связаться со мной'"
            :blue-theme="true"
            @click="navigateTo({ path: '', hash: '#contact-me' })" />

        <button class="header__mobile-menu-button">
            <IconsBurgerMenu />
        </button>

    </header>
</template>

<style scoped>
.header {
    padding-top: 25px;
    padding-bottom: 25px;
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