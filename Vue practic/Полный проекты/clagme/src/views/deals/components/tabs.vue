<template>
  <ul class="deals-tabs">
    <li v-if="TYPE === 'employee'" @click="show('send')" :class="{'deals-tabs__tab_active': $route.query.active === 'send' || !$route.query.active}" class="deals-tabs__tab">Waiting</li>
    <li @click="show('accepted')" :class="{'deals-tabs__tab_active': $route.query.active === 'accepted' || (!$route.query.active && TYPE === 'user')}" class="deals-tabs__tab">Active</li>
    <li @click="show('done')" :class="{'deals-tabs__tab_active': $route.query.active === 'done'}" class="deals-tabs__tab">Done</li>
    <li @click="show('canceled')" :class="{'deals-tabs__tab_active': $route.query.active === 'canceled'}" class="deals-tabs__tab">Canceled</li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      active: 'active'
    }
  },
  computed: {
    ...mapGetters([
      'TYPE'
    ])
  },
  methods: {
    show (value) {
      if (this.$route.query.active !== value) {
        this.$router.replace({ query: { active: value } })
      }
    }
  }
}
</script>

<style scoped>
.deals-tabs {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.deals-tabs__tab {
  width: 96px;
  text-align: center;
  background: #FFFFFF;
  border: 1px solid #EBEAED;
  padding: 8px 0;
  color: #84818A;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
}
.deals-tabs__tab:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.deals-tabs__tab:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.deals-tabs__tab_active {
  color: #5542F6;
  background: #FBFAFC;
}

@media (max-width: 768px) {
  .deals-tabs {
    margin-bottom: 0;
  }
  .deals-tabs__tab {
    width: auto;
    font-size: 12px;
    padding: 8px 10px;
  }
}
</style>
