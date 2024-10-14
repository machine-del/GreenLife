<template>
    <section class="about">
        <div class="about__container">
            <div class="about__box">
                <div class="about__main-image">
                    <img src="../assets/images/background/TheLifestyle.jpg" alt="main">
                </div>
                <div class="about__main-text">
                    <h1>Эко-образ жизни: гармония с природой каждый день</h1>
                    <p>Узнайте, как вести устойчивый образ жизни, сохраняя здоровье и окружающую среду. Практические
                        советы, вдохновение и реальные истории!</p>
                    <button type="button" @click="openModal()">Подробнее</button>
                </div>
            </div>
            <div class="about__noise-bg"></div>
        </div>
    </section>
    <section class="popular-articles">
        <div class="popular-articles__container">
            <div class="popular-articles__box">
                <div class="popular-articles--text">
                    <h2>Полезные статьи о стиле жизни</h2>
                </div>
                <div class="popular-articles__cards">
                    <div class="popular-articles__card">
                        <div class="popular-articles__card__container">
                            <div class="popular-articles__card--image">
                                <img src="../assets/images/card/card_12.jpg" alt="card1">
                            </div>
                            <div class="popular-articles__card--title">
                                <h2>Минимализм и экология</h2>
                            </div>
                            <div class="popular-articles__card--date">
                                06.10.2024
                            </div>
                            <div class="popular-articles__card--description">
                                Исследуйте, как минимализм помогает снизить нагрузку на окружающую среду и улучшить
                                качество жизни.
                            </div>
                        </div>
                    </div>
                    <div class="popular-articles__card">
                        <div class="popular-articles__card__container">
                            <div class="popular-articles__card--image">
                                <img src="../assets/images/card/card_13.jpg" alt="card2">
                            </div>
                            <div class="popular-articles__card--title">
                                <h2>Зеленые технологии в быту</h2>
                            </div>
                            <div class="popular-articles__card--date">
                                06.10.2024
                            </div>
                            <div class="popular-articles__card--description">
                                Узнайте, как инновации помогают сделать ваш дом более экологичным и энергоэффективным.
                            </div>
                        </div>
                    </div>
                    <div class="popular-articles__card">
                        <div class="popular-articles__card__container">
                            <div class="popular-articles__card--image">
                                <img src="../assets/images/card/card_14.jpg" alt="card3">
                            </div>
                            <div class="popular-articles__card--title">
                                <h2>Путешествия с минимальным углеродным следом</h2>
                            </div>
                            <div class="popular-articles__card--date">
                                06.10.2024
                            </div>
                            <div class="popular-articles__card--description">
                                Советы по путешествиям, которые помогут вам наслаждаться миром, минимизируя негативное
                                воздействие на природу.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popular-articles--text">
                    <h2>Вдохновляющие истории</h2>
                </div>
                <div class="popular-articles__cards">
                    <div class="popular-articles__card">
                        <div class="popular-articles__card__container">
                            <div class="popular-articles__card--image">
                                <img src="../assets/images/card/card_15.jpg" alt="card4">
                            </div>
                            <div class="popular-articles__card--title">
                                <h2>Как изменить привычки и сохранить планету</h2>
                            </div>
                            <div class="popular-articles__card--date">
                                07.10.2024
                            </div>
                            <div class="popular-articles__card--description">
                                Реальные примеры людей, которые изменили свои привычки ради более экологичной жизни.
                            </div>
                        </div>
                    </div>
                    <div class="popular-articles__card">
                        <div class="popular-articles__card__container">
                            <div class="popular-articles__card--image">
                                <img src="../assets/images/card/card_16.jpg" alt="card5">
                            </div>
                            <div class="popular-articles__card--title">
                                <h2>Городской сад: Как создать зеленый уголок на балконе</h2>
                            </div>
                            <div class="popular-articles__card--date">
                                07.10.2024
                            </div>
                            <div class="popular-articles__card--description">
                                Простые идеи для создания собственного городского сада, не выходя из дома.
                            </div>
                        </div>
                    </div>
                    <div class="popular-articles__card">
                        <div class="popular-articles__card__container">
                            <div class="popular-articles__card--image">
                                <img src="../assets/images/card/card_17.jpg" alt="card6">
                            </div>
                            <div class="popular-articles__card--title">
                                <h2>Сообщества, объединенные заботой о природе</h2>
                            </div>
                            <div class="popular-articles__card--date">
                                07.10.2024
                            </div>
                            <div class="popular-articles__card--description">
                                Как локальные сообщества работают вместе для защиты окружающей среды и улучшения
                                качества жизни.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="newsletter">
        <div class="newsletter__container">
            <div class="newsletter__main-text">
                <h1>Присоединяйтесь к экологичному образу жизни</h1>
                <p>Подпишитесь на наши обновления, чтобы первыми узнавать о новых статьях, полезных советах и историях
                    людей, которые ведут жизнь в гармонии с природой.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const emit = defineEmits(['toggleModal'])
const openModal = () => {
    emit('toggleModal')
}
</script>

<style scoped>
.about__container {
    position: relative;
}

.about__main-image {
    width: 100%;
    height: 100vh;
}

.about__main-image img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.about__main-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    z-index: 400;
    width: 100%;
    display: flex;
    padding: 0px 20px 0px 20px;
    flex-direction: column;
    align-items: center;
}

.about__main-text>h1 {
    font-weight: 600;
    font-size: 3em;
    padding-bottom: 20px;
}

.about__main-text>p {
    font-weight: 500;
    font-size: 2em;
    margin-bottom: 20px;
}

button {
    position: relative;
    background-color: #636ae8;
    color: #fff;
    padding: 15px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(99, 106, 232, 0.75);
    transition: all 0.3s ease;
}

button:hover {
    background-color: #649;
}

.popular-articles__container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.popular-articles__box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}

.popular-articles__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.popular-articles__card {
    flex-basis: 30%;
    margin: 20px;
}

.popular-articles--text {
    display: flex;
    justify-content: center;
    margin: 56px 0px 52px 0px;
}

.popular-articles__card--image img {
    width: 400px;
    height: 300px;
}

.popular-articles__card--title {
    font-weight: 700;
    font-size: 11px;
    padding-top: 8px;
    transition: all 0.7s ease;
}

.popular-articles__card--title:hover {
    color: orange;
}

.popular-articles__card--date {
    padding: 8px 0px;
}

.popular-articles__card--description {
    margin-bottom: 90px;
}

.popular-articles__card--description,
.popular-articles__card--date {
    color: #9095a0;
    width: 350px;
    transition: all 0.7s ease;
    font-size: 16px;
    font-weight: 500;
}

.popular-articles__card--description:hover,
.popular-articles__card--date:hover {
    color: #636ae8;
}

.newsletter {
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.newsletter__container {
    max-width: 1400px;
}

.newsletter__main-text h1 {
    text-align: center;
    color: #636ae8;
    font-size: 48px;
    font-weight: 700;
}

.newsletter__main-text p {
    padding: 50px 20px;
    font-size: 21px;
    color: #9095a0;
}

.newsletter__main-text button {
    display: flex;
    margin: 0 auto;
}

.about__noise-bg {
    animation: noise-animation .25s steps(10) 0s infinite alternate-reverse none running;
    background: url("../src/assets/images/background/noise.png") rgba(0, 0, 0, 0.35);
    height: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
}

@keyframes noise-animation {
    0% {
        background-position: 0 0;
    }

    10% {
        background-position: -5% -5%;
    }

    20% {
        background-position: -10% 5%;
    }

    30% {
        background-position: 5% -10%;
    }

    40% {
        background-position: -5% 15%;
    }

    50% {
        background-position: -10% 5%;
    }

    60% {
        background-position: 5% 5%;
    }

    70% {
        background-position: 0 10%;
    }

    80% {
        background-position: -5% -5%;
    }

    90% {
        background-position: 10% 5%;
    }
}

@media (max-width: 991px) {
    .about__main-text>h1 {
        font-size: 2em;
    }

    .about__main-text>p {
        font-size: 1.3em;
    }

    .newsletter__main-text h1 {
        font-size: 28px;
    }

    .newsletter__main-text p {
        padding: 30px 20px;
        font-size: 17px;
    }
}

@media (max-width: 768px) {
    .popular-articles__card {
        flex-basis: 45%;
    }

    .newsletter__main-text h1 {
        font-size: 25px;
    }

    .newsletter__container {
        max-width: 350px;
    }

    .newsletter__main-text p {
        padding: 20px 20px;
        font-size: 15px;
        color: #9095a0;
    }

    .popular-articles--text {
        font-size: 14px;
    }

    .popular-articles__card--image img {
        width: 300px;
        height: 200px;
    }

    .popular-articles__card--title {
        font-weight: 700;
        font-size: 12px;
        padding-top: 8px;
    }

    .popular-articles__card--date {
        padding: 8px 0px;
    }

    .popular-articles__card--description {
        margin-bottom: 50px;
    }

    .popular-articles__card--description,
    .popular-articles__card--date {
        width: 300px;
        font-size: 14px;
        font-weight: 500;
    }

    button {
        padding: 10px 20px;
    }
}

@media (max-width: 480px) {
    .popular-articles__card {
        flex-basis: 100%;
    }

    .about__main-text>h1 {
        font-size: 1.3em;
    }

    .about__main-text>h2 {
        font-size: 1em;
    }

    .popular-articles--text {
        font-size: 12px;
    }

    .popular-articles__card {
        flex-basis: 30%;
        margin: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>