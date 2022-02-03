<template>
  <div class="profile">
    <div class="container profile__content flex">
      <StaticBlock class="profile__static" />
      <component :is="block" class="profile__right" />
    </div>
  </div>
</template>

<script>
import StaticBlock from '~~/components/profile/static'
export default {
  components: {
    StaticBlock,
    FavoriteBlock: () => ({
      component: import('~~/components/profile/favorite')
    }),
    SubscribersBlock: () => ({
      component: import('~~/components/profile/subscribers')
    })
  },
  computed: {
    block () {
      return this.$route.params.type + '-block'
    }
  }
}
</script>

<style scoped>
.profile {
  margin: 24px 0;
}
.profile__content {
  align-items: flex-start;
}
.profile__static {
  width: 496px;
  margin-right: 28px;
  background: #FFFFFF;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 16px;
  box-sizing: border-box;
}
.profile__right {
  width: calc(100% - 526px);
}
</style>
