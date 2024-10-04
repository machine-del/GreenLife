<script setup>

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
            <div class="header-nav">
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
                    </ul>
                </nav>
            </div>
            <div class="header-contact">
                <button type="button">Свяжитесь с нами</button>
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

.header-name {
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size: 12px;
}

.header-contact>button {
    background-color: #636ae8;
    border: none;
    outline: none;
    padding: 10px 10px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    margin-right: 20px;
}
</style>