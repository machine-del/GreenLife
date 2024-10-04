<script setup>
import TheHeader from '/src/components/TheHeader.vue'
import TheFooter from '/src/components/TheFooter.vue'
</script>

<template>
  <div class="page-wrapper">
    <header>
      <TheHeader />
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  box-shadow: 0px 10px 16px #5945;
}

main {
  flex-grow: 1;
}

footer {
  display: flex;
  align-items: center;
  padding: 20px 10px;
  color: #fff;
  background-color: #252525;
}
</style>
