<template>
  <div class="profile-favorite">
    <BoxBlock v-if="false" :component-name="'product'" />
    <EmptyBlock v-else class="profile-favorite__empty" :emptyInfo='emptyInfo'/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      emptyInfo: {
        img: '/empty-favorite.png',
        title: 'Нет товаров в избранных',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mus dui enim rhoncus. Venenatis eu suspendisse eu ac mattis.'
      }
    }
  },
  components: {
    BoxBlock: () => ({
      component: import('~~/components/common/box')
    }),
    EmptyBlock: () => ({
      component: import('~~/components/EmptyBlock')
    })
  }
}
</script>

<style scoped>
</style>
