<template>
  <section class="contact-page">
    <HeaderBlock />
    <HeadBlock />
    <div class="container">
      <form class="contact-page__form">
        <label class="contact-page__label">Subject</label>
        <select class="contact-page__input">
          <option disabled value="">Select a subject</option>
        </select>
        <label class="contact-page__label">Your message</label>
        <textarea class="contact-page__input contact-page__input_textarea" placeholder="Add any additional information we can use to help you"></textarea>
        <label class="contact-page__label">Attach files (optional)</label>
        <div></div>
        <button class="contact-page__btn">
          Send us a message
          <SendIcon />
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import SendIcon from '@/assets/svg/send.svg?inline'
export default {
  components: {
    HeaderBlock: () => ({
      component: import('./components/header')
    }),
    HeadBlock: () => ({
      component: import('./components/head')
    }),
    SendIcon
  },
}
</script>

<style scoped>
.contact-page__form {
  width: 555px;
  background: #FFFFFF;
  border-radius: 4px;
  padding: 32px 32px 34px;
  box-sizing: border-box;
  position: relative;
  margin: -187px auto 88px;
}
.contact-page__label {
  color: #2E2C34;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
}
.contact-page__input {
  background: #FFFFFF;
  border: 1px solid #EBEAED;
  border-radius: 4px;
  min-height: 48px;
  margin: 16px 0 24px;
  padding: 14px 12px;
}
.contact-page__input_textarea {
  height: 96px;
  padding: 14px 16px;
}
.contact-page__btn {
  margin-top: 24px;
  background-color: var(--blue-color);
  border-radius: 4px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: #FFFFFF;
}
.contact-page__btn svg {
  margin-left: 10px;
}
</style>
