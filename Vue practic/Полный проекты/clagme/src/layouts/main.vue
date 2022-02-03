<template>
  <div class="main-layout">
    <HeaderBlock v-if="!TOKEN" />
    <DefaultHeaderBlock v-if="TOKEN" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import HeaderBlock from '@/components/header/mainHeader'
import DefaultHeaderBlock from '@/components/header/defaultHeader'
export default {
  computed: {
    ...mapGetters([
      'TOKEN'
    ])
  },
  components: {
    HeaderBlock,
    DefaultHeaderBlock
  }
}
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 50px);
}

@media (max-width: 768px) {
  .main-layout {
    min-height: calc(100vh - 55px);
  }
}
</style>
