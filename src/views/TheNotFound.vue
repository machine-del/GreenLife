<template>
  <section class="notFound">
    <div class="noise-bg"></div>
    <div class="notFound__container">
      <h1>Упс! Страница не найдена ;(</h1>
      <router-link to="/">К сожалению, мы не смогли найти запрашиваемую вами страницу. <br /> Возможно, она была
        удалена,
        перемещена или никогда не существовала.</router-link>
    </div>
  </section>
</template>

<script setup>
</script>

<style setup>
.notFound {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #575555;
  color: #fff;
}

.notFound__container {
  z-index: 10;
  padding: 30px;
  margin: 10px;
  border: 1px solid #ff6363;
  border-radius: 15px;
}

.notFound__container h1 {
  text-align: center;
  padding: 0px 0px 20px 0px;
  font-size: 28px;
}

a {
  font-size: 20px;
  color: #f8c5c5;
  text-decoration: none;
}

a:hover {
  color: #ffffff;
  content: 'GoodLuck';
}

.noise-bg {
  animation: noise-animation .25s steps(10) 0s infinite alternate-reverse none running;
  background: url("../assets/images/background/noise.png") rgba(0, 0, 0, 0.35);
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

@media (max-width: 720px) {
  .notFound__container h1 {
    font-size: 24px;
  }

  .notFound__container a {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .notFound__container h1 {
    font-size: 18px;
  }

  .notFound__container a {
    font-size: 14px;
  }
}

@media (max-width: 380px) {
  .notFound__container h1 {
    font-size: 16px;
  }

  .notFound__container a {
    font-size: 13px;
  }
}
</style>