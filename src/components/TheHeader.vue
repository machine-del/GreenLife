<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);

function toggleMenu() {
    menuOpen.value = !menuOpen.value;
}
</script>

<template>
    <div class="container">
        <div class="header-box">
            <div class="header-logo">
                <RouterLink to="/"><img src="/src/assets/images/logo/GreenLife.png" width="30px" height="30px"
                        alt="GreenLife" style="margin: 0px 20px 0px 20px;"></RouterLink>
            </div>
            <div class="header-name">
                <h1>GreenLife</h1>
            </div>
            <div class="header-nav" :class="{ 'header-nav--open': menuOpen }">
                <div class="header__burger-menu" @click="toggleMenu">
                    <div :class="{ 'header__burger-icon': true, 'header__burger-icon--open': menuOpen }">
                        <span class="header__burger-line"></span>
                        <span class="header__burger-line"></span>
                        <span class="header__burger-line"></span>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <RouterLink to="/" :class="{ 'active-link': $route.path === '/' }">Главная</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/health" :class="{ 'active-link': $route.path === '/health' }">
                                Здоровье
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/lifestyle" :class="{ 'active-link': $route.path === '/lifestyle' }">
                                Образ жизни
                            </RouterLink>
                        </li>
                        <li>
                            <button class="callme" type="button" :class="{ 'isOpen': menuOpen }">Свяжитесь с
                                нами</button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header-contact">
                <button class="callme" type="button">Свяжитесь с нами</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.header-nav {
    padding-left: 35px;
    flex-grow: 1;
}

nav>ul {
    display: flex;
    list-style-type: none;
    gap: 30px;
}

nav>ul>li>a {
    text-decoration: none;
    color: #565e6c;
    font-weight: 600;
    font-size: 16px;
}

a:hover {
    color: #649;
}

a.active-link {
    color: #636ae8;
}

a.active-link:hover {
    color: #649;
}

.header-name {
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size: 12px;
}

.header-nav>nav>ul>li>button.callme {
    display: none;
}

.header-contact>button.callme {
    background-color: #636ae8;
    border: none;
    outline: none;
    padding: 10px 10px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    margin-right: 20px;
}

.header-contact>button:hover,
.header-nav>nav>ul>li>button.callme:hover {
    background-color: #649;
}

.header__burger-menu {
    display: none;
    cursor: pointer;
    padding: 20px;
}

.header__burger-icon {
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.header__burger-line {
    background-color: #FFB820;
    height: 3px;
    width: 100%;
    border-radius: 2px;
    transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
}

.header__burger-icon--open .header__burger-line:nth-child(1) {
    transform: translateY(18px) rotate(45deg);
}

.header__burger-icon--open .header__burger-line:nth-child(2) {
    opacity: 0;
}

.header__burger-icon--open .header__burger-line:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}

@keyframes slideIn {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}

@media (max-width: 991px) {
    .header-nav ul {
        display: none;
        flex-direction: column;
        position: fixed;
        left: 0;
        top: 0;
        background-color: #1d2128;
        color: white;
        width: 300px;
        height: 100vh;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
        z-index: 999;
    }

    .header-contact>button {
        display: none;
    }

    .header-nav>nav>ul>li>button.isOpen {
        display: flex;
        background-color: #636ae8;
        border: none;
        outline: none;
        padding: 10px 10px;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
    }

    .header-contact {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav>ul>li>a {
        text-decoration: none;
        color: #fff;
        font-weight: 600;
        font-size: 30px;
    }

    .header-nav--open ul {
        display: flex;
        justify-content: center;
        align-items: center;
        animation: slideIn 1s forwards;
    }

    .header__burger-menu {
        display: flex;
        justify-content: flex-end;
    }

    .header-nav--open .header__burger-menu {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
    }
}
</style>