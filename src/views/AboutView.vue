<template>
  <section class="about">
    <div class="about__container">
      <div class="about__box">
        <div class="about__main-image">
          <img src="../assets/images/background/main.png" alt="main">
        </div>
        <div class="about__main-text">
          <h1 style="font-weight: 600; font-size: 3em; padding-bottom: 20px;">Принять более экологичное
            будущее</h1>
          <h2 style="font-weight: 500; font-size: 2em; margin-bottom: 20px;">Откройте для себя советы и истории о том,
            как вести
            экологичный образ жизни</h2>
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
                <img src="../assets/images/card/card_2.png" alt="card1">
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
                <img src="../assets/images/card/card_3.jpg" alt="card1">
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

button {
  background-color: #636ae8;
  color: #fff;
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
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

@media (max-width: 768px) {
  .popular-articles__card {
    flex-basis: 45%;
  }
}

@media (max-width: 480px) {
  .popular-articles__card {
    flex-basis: 100%;
  }
}
</style>
