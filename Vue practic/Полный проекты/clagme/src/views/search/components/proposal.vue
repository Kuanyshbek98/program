<template>
  <div class="modal">
    <div class="search-proposal modal-content">
      <h3 class="search-proposal__title">Submit proposal</h3>
      <p class="search-proposal__text">
        Your general profile will be submitted with this proposal. If you'd like to submit proposals with customized skills, rates, and experience, create a specialized profile.
      </p>
      <form @submit.prevent="send()" class="search-proposal">
        <div class="search-proposal__field">
          <label for="bid" class="search-proposal__label">Bid</label>
          <input v-model="price" id="bid" type="number" class="search-proposal__input" placeholder="Total amount the clagger will see on your proposal">
          <a class="search-proposal__icon">$</a>
        </div>
        <div class="search-proposal__field">
          <label for="time" class="search-proposal__label">Amount of time(in hour)</label>
          <input v-model="hours" id="time" type="number" class="search-proposal__input" placeholder="How long this project takes?">
          <a class="search-proposal__actions">
            <button type="button" @click="hours--" :disabled="!hours" class="search-proposal__action search-proposal__minus">
              <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8333 1.83317H0.166626V0.166504H11.8333V1.83317Z" fill="#B6B4BA"/>
              </svg>
            </button>
            <button type="button" @click="hours++" class="search-proposal__action search-proposal__plus">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8334 6.83317H6.83342V11.8332H5.16675V6.83317H0.166748V5.1665H5.16675V0.166504H6.83342V5.1665H11.8334V6.83317Z" fill="#5542F6"/>
              </svg>
            </button>
          </a>
        </div>
        <div class="search-proposal__field">
          <label class="search-proposal__label">Task description</label>
          <textarea v-model="description" class="search-proposal__input search-proposal__textarea" placeholder="Description in detail"></textarea>
        </div>
        <template v-if="hours && price">
          <p class="search-proposal__price flex">
            <span>Price of work per hour</span>
            <span>${{ price }}.00 USD</span>
          </p>
          <p class="search-proposal__fee flex">
            <span>Clagme Service Fee</span>
            <span>$150.00 USD</span>
          </p>
          <p class="search-proposal__total flex">
            <a>
              Approximate total price
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.00004 0.333496C3.32004 0.333496 0.333374 3.32016 0.333374 7.00016C0.333374 10.6802 3.32004 13.6668 7.00004 13.6668C10.68 13.6668 13.6667 10.6802 13.6667 7.00016C13.6667 3.32016 10.68 0.333496 7.00004 0.333496ZM7.66671 11.6668H6.33337V10.3335H7.66671V11.6668ZM9.04671 6.50016L8.44671 7.1135C7.96671 7.60016 7.66671 8.00016 7.66671 9.00016H6.33337V8.66683C6.33337 7.9335 6.63337 7.26683 7.11337 6.78016L7.94004 5.94016C8.18671 5.70016 8.33337 5.36683 8.33337 5.00016C8.33337 4.26683 7.73337 3.66683 7.00004 3.66683C6.26671 3.66683 5.66671 4.26683 5.66671 5.00016H4.33337C4.33337 3.52683 5.52671 2.3335 7.00004 2.3335C8.47337 2.3335 9.66671 3.52683 9.66671 5.00016C9.66671 5.58683 9.42671 6.12016 9.04671 6.50016Z" fill="#5542F6"/>
              </svg>
            </a>
            <span>${{ price * hours + 150 }}.00 USD</span>
          </p>
        </template>
        <button class="search-proposal__btn">Send</button>
      </form>
    </div>
    <div @click="$emit('close')" class="close"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// import MinusIcon from '@/assets/svg/minus.svg?inline'
// import PlusIcon from '@/assets/svg/plus.svg?inline'
export default {
  data() {
    return {
      description: '',
      price: '',
      hours: 0
    }
  },
  computed: {
    ...mapGetters([
      'PROPOSAL_DATA'
    ])
  },
  methods: {
    async send () {
      const formData = new FormData()
      formData.append('resume_id', this.PROPOSAL_DATA.id)
      formData.append('description', this.description)
      formData.append('price', this.price)
      formData.append('hours', this.hours)
      await this.$api.post('/employee/send-offer', formData)
        .then(() => {
          this.$toast.success('Your application is accepted!')
          this.$emit('close')
        })
        .catch((e) => {
          if (e.response) {
            this.$toast.error(e.response.data.message)
          }
        })
    }
  },
  components: {
    // MinusIcon,
    // PlusIcon
  },
}
</script>

<style>
.search-proposal {
  width: 457px;
}
.search-proposal__title {
  font-size: 28px;
  line-height: 36px;
  color: #2E2C34;
  margin: 0 0 12px;
}
.search-proposal__text {
  color: #2E2C34;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 32px;
}
.search-proposal__label {
  font-size: 14px;
  line-height: 20px;
  color: #504F54;
}
.search-proposal__input {
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #EBEAED;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 8px 0;
  padding: 14px 16px;
}
.search-proposal__textarea {
  height: 100px;
  margin-bottom: 32px;
  resize: none;
  border-radius: 0;
}
.search-proposal__btn {
  background: var(--blue-color);
  border-radius: 4px;
  width: 164px;
  height: 40px;
  color: #FFFFFF;
}
.search-proposal__btn:disabled {
  background: #E3E1E5;
}
.search-proposal__field {
  position: relative;
}
.search-proposal__icon {
  position: absolute;
  bottom: 20px;
  right: 16px;
}
.search-proposal__actions {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
}
.search-proposal__action {
  width: 32px;
  height: 32px;
  background-color: #FFFFFF;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12));
  border-radius: 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-proposal__minus {
  fill: #B6B4BA;
  margin-right: 8px;
}
.search-proposal__plus {
  fill: var(--blue-color);
}
.search-proposal__price {
  color: #2E2C34;
  font-size: 14px;
  line-height: 20px;
}
.search-proposal__fee {
  color: #504F54;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 0;
  border: 1px solid #E3E1E5;
  border-left: none;
  border-right: none;
}
.search-proposal__total {
  color: #504F54;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 32px;
}
</style>
