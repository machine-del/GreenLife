<template>
  <div class="contact-modal__overlay" @click.self="closeModal" :class="{ open: isOpen }">
    <div class="contact-modal">
      <div class="contact-modal__header">
        <h2 class="contact-modal__header--title">Свяжитесь с нами</h2>
        <span class="contact-modal__header--close" @click="closeModal">
          <img src="../assets/images/icon/close.png" alt="close" width="20px" height="20px" />
        </span>
      </div>
      <div class="contact-modal__body">
        <form @submit.prevent="submitForm" id="contact-form">
          <div class="form-group">
            <label for="name">Имя</label>
            <input v-model="name" name="user_name" type="text" id="name" placeholder="Ваше имя" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" name="user_email" type="email" id="email" placeholder="Ваш email" required />
          </div>
          <div class="form-group">
            <label for="message">Сообщение</label>
            <textarea v-model="message" name="user_message" id="message" placeholder="Ваше сообщение" rows="4"
              required></textarea>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Отправить</button>
            <button type="button" class="btn btn-outline" @click="closeModal">Отмена</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue';

const { isOpen } = defineProps({ isOpen: Boolean });
const emit = defineEmits(['toggleModal']);
const closeModal = () => { emit('toggleModal') };

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  window.emailjs.sendForm(
    'service_xnmyjpa',
    'template_fhk3gkx',
    '#contact-form',
    'EAAGcARbYFPGkd1Mz'
  )
    .then(() => {
      alert('Ваше сообщение успешно отправлено!');
      closeModal();
    })
    .catch((error) => {
      console.error('Ошибка при отправке', error);
    });
};

watch(() => isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>


<style scoped>
.contact-modal__overlay {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.40);
  justify-content: center;
  align-items: center;
}

.contact-modal__overlay.open {
  display: flex;
  z-index: 99999;
}

.contact-modal {
  max-width: 600px;
  width: 100%;
  padding: 30px;
  border-radius: 10px;
  background: #fff;
}

.contact-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.contact-modal__header--title {
  color: #000;
  font-size: 24px;
  font-weight: 700;
}

.contact-modal__header--close {
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border: 1px solid #649;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 15px 20px;
  box-shadow: 0 4px 15px rgba(99, 106, 232, 0.75);
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.btn-primary {
  background-color: #636ae8;
  color: #fff;
  transition: all 0.6s ease;
}

.btn-primary:hover {
  background-color: #649;
}

.btn-outline {
  background-color: transparent;
  border: 1px solid red;
  transition: all 0.6s ease;
  color: red;
}

.btn-outline:hover {
  background-color: red;
  color: #fff;
}
</style>
