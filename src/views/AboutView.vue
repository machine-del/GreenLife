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

.about__noise-bg {
  animation: noise-animation .25s steps(10) 0s infinite alternate-reverse none running;
  background: url("../src/assets/images/background/noise.png") rgba(0, 0, 0, 0.35);
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 300;
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
</style>
