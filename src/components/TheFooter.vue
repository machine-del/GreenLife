<template>
    <div class="container">
        <div class="footer-box">
            <div class="footer-newsletter">
                <h2 for="email" class="footer-newsletter__text">Присоединяйтесь к нашей рассылке</h2>
                <br>
                <form @submit.prevent="sendEmail" id="contact-form">
                    <input name="toEmail" type="email" placeholder="email" required />
                    <input type="submit" value="Подписаться" />
                </form>
            </div>
            <div class="copyright">
                <p>&copy; 2024 GreenLife, Inc. </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const sendEmail = () => {
    window.emailjs.sendForm(
        'service_xnmyjpa',
        'template_x0vtuyv',
        '#contact-form',
        'EAAGcARbYFPGkd1Mz'
    )
        .then(() => {
            alert("Сообщение успешно отправлено!");
        })
        .catch((error) => {
            console.error('Ошибка при отправке', error);
        });
};
</script>

<style scoped>
.footer-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    padding: 0 20px;
}

.footer-newsletter__text {
    padding: 10px 0px 0px 0px;
    font-size: 16px;
    display: flex;
    justify-content: center;
}

.footer-newsletter input[type='email'] {
    background-color: #1d2128;
    outline: none;
    border: 1px solid #636ae8;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding: 10px 0px 10px 10px;
    color: #fff;
}

.footer-newsletter input[type='email']:focus {
    border: 1px solid #ff4800;
}

.footer-newsletter input[type='submit'] {
    background-color: #636ae8;
    border: none;
    padding: 11px 10px;
    color: #fff;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    cursor: pointer;
}

.footer-newsletter input[type='submit']:hover {
    background-color: #649;
}

@media (max-width: 720px) {
    .footer-box {
        flex-direction: column;
    }

    .footer-newsletter input[type='email'] {
        padding: 5px 0px 5px 10px;
        margin-bottom: 20px;
        width: 170px;
    }

    .footer-newsletter input[type='submit'] {
        padding: 6px 10px;
        font-size: 15px;
    }
}

@media (max-width: 360px) {
    .footer-newsletter input[type='submit'] {
        padding: 7.6px 0px;
        font-size: 13px;
    }
}
</style>