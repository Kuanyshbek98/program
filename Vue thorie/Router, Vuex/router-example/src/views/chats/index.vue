<template>
  <section class="chats">
    <HeaderBlock title="Чаты" />
    <TabsBlock />
    <Messages />
  </section>
</template>

<script>
import HeaderBlock from "@/components/header/header";
export default {
  components: {
    HeaderBlock,
    TabsBlock: () => ({
      component: import("./components/tabs.vue"),
    }),
    Messages: () => ({
      component: import("./components/messages.vue"),
    }),
  },
};
</script>

<style lang="scss" scoped></style>
