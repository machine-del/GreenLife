<template>
  <section class="about">
    <div class="about__container">
      <div class="about__box">
        <div class="about__main-image">
          <img src="../assets/images/background/main.png" alt="main">
        </div>
        <div class="about__main-text">
          <h1>Принять более экологичное
            будущее</h1>
          <p>Откройте для себя советы и истории о том,
            как вести
            экологичный образ жизни</p>
          <button type="button">Узнать больше</button>
        </div>
      </div>
      <div class="about__noise-bg"></div>
    </div>
  </section>
  <section class="popular-articles">
    <div class="popular-articles__container">
      <div class="popular-articles__box">
        <div class="popular-articles--text">
          <h2>Популярные статьи</h2>
        </div>
        <div class="popular-articles__cards">
          <div class="popular-articles__card">
            <div class="popular-articles__card__container">
              <div class="popular-articles__card--image">
                <img src="../assets/images/card/card_1.jpg" alt="card1">
              </div>
              <div class="popular-articles__card--title">
                <h2>Советы по здоровому питанию</h2>
              </div>
              <div class="popular-articles__card--date">
                04.10.2024
              </div>
              <div class="popular-articles__card--description">
                Узнайте, как сбалансированное питание, богатое овощами и фруктами, может укрепить ваше здоровье.
              </div>
            </div>

          </div>
          <div class="popular-articles__card">
            <div class="popular-articles__card__container">
              <div class="popular-articles__card--image">
                <img src="../assets/images/card/card_2.png" alt="card2">
              </div>
              <div class="popular-articles__card--title">
                <h2>Спасите леса</h2>
              </div>
              <div class="popular-articles__card--date">
                04.10.2024
              </div>
              <div class="popular-articles__card--description">
                Узнайте о последствиях вырубки лесов и о том, что вы можете сделать, чтобы помочь. </div>
            </div>

          </div>
          <div class="popular-articles__card">
            <div class="popular-articles__card__container">
              <div class="popular-articles__card--image">
                <img src="../assets/images/card/card_3.jpg" alt="card3">
              </div>
              <div class="popular-articles__card--title">
                <h2>Йога для здоровья</h2>
              </div>
              <div class="popular-articles__card--date">
                04.10.2024
              </div>
              <div class="popular-articles__card--description">
                Узнайте, как йога может улучшить ваше душевное и физическое состояние. </div>
            </div>
          </div>
        </div>
        <div class="popular-articles--text">
          <h2>Статьи об устойчивом развитии</h2>
        </div>
        <div class="popular-articles__cards">
          <div class="popular-articles__card">
            <div class="popular-articles__card__container">
              <div class="popular-articles__card--image">
                <img src="../assets/images/card/card_4.jpg" alt="card4">
              </div>
              <div class="popular-articles__card--title">
                <h2>Солнечная энергия</h2>
              </div>
              <div class="popular-articles__card--date">
                05.10.2024
              </div>
              <div class="popular-articles__card--description">
                Использование энергии солнца является ключевым компонентом в сокращении выбросов углекислого газа и
                обеспечении устойчивого развития. </div>
            </div>
          </div>
          <div class="popular-articles__card">
            <div class="popular-articles__card__container">
              <div class="popular-articles__card--image">
                <img src="../assets/images/card/card_5.jpg" alt="card5">
              </div>
              <div class="popular-articles__card--title">
                <h2>Городское садоводство</h2>
              </div>
              <div class="popular-articles__card--date">
                05.10.2024
              </div>
              <div class="popular-articles__card--description">
                Городское садоводство — это растущая тенденция, которая помогает обеспечить себя свежими продуктами
                питания и одновременно уменьшить углеродный след. </div>
            </div>
          </div>
          <div class="popular-articles__card">
            <div class="popular-articles__card__container">
              <div class="popular-articles__card--image">
                <img src="../assets/images/card/card_6.jpg" alt="card6">
              </div>
              <div class="popular-articles__card--title">
                <h2>Энергия ветра</h2>
              </div>
              <div class="popular-articles__card--date">
                05.10.2024
              </div>
              <div class="popular-articles__card--description">
                Энергия ветра - это чистый и возобновляемый источник, который может значительно снизить зависимость от
                ископаемого топлива.
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
        <h1>Присоединяйтесь к нашей рассылке</h1>
        <p>Будьте в курсе последних экологических советов и эксклюзивных предложений. <br> Подпишитесь на рассылку прямо
          сейчас, чтобы оказать положительное влияние!</p>
        <button type="button">Подписаться</button>
      </div>
    </div>
  </section>
</template>

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
  background-color: #636ae8;
  color: #fff;
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
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
  font-size: 14px;
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
