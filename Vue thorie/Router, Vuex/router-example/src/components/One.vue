<template>
  <div>
    <h2>One</h2>
    <ul class="list">
      <li class="item" @click="functiona($route.params.type)">
        <router-link
          :to="{ path: `/one/${+item + 1}` }"
          :class="{ item__active: $route.params.type === '1' }"
        >
          <!--:to="{ path: `/one/${+item + 1}` }" осылай роутерді переменны арқылы беруге, өзгертуге болады -->
          1
        </router-link>
      </li>
      <li class="item" @click="functiona($route.params.type)">
        <router-link
          :to="{ name: 'Chats', params: { id: 2 } }"
          :class="{ item__active: $route.params.type === '2' }"
        >
          <!-- :to="{ name: 'Chats', params: { id: 2 } }" осылай роутерді name арқылы беруге болады  , және params арқылы id номерін жазуға болады -->
          2
        </router-link>
      </li>
      <li class="item" @click="functiona($route.params.type)">
        <!-- functiona($route.params.type) осылай функция арқылы сылка атын script-та ұстап алуға болады -->
        <router-link
          to="/one/3"
          :class="{ item__active: $route.params.type === '3' }"
        >
          <!--   :class="{ item__active: $route.params.type === '3' }" осылай <router-link - тің өзінде сылка атын ұстап алуға болады -->
          3
        </router-link>
      </li>
      <li class="item" @click="functiona($route.params.type)">
        <router-link
          :to="{ path: '/a', redirect: '/b' }"
          :class="{ item__active: $route.params.type === '4' }"
        >
          4
        </router-link>
      </li>
      <li class="item" @click="functiona($route.params.type)">
        <router-link
          to="/one/5"
          :class="{ item__active: $route.params.type === '5' }"
        >
          5
        </router-link>
      </li>
    </ul>
    {{ item }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: 0,
      film: 0,
    };
  },
  created() {
    // this.$router.push("/chats/tabs")
    // роутерге script-та осылай жібереді
    // this.$router.push({name:"One/4"})
    //  name арқылы жіберу
  },
  methods: {
    functiona(n) {
      this.item = n;
      console.log(n);
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
}
.item {
  border: 1px solid;
  padding: 0px 5px;
  margin: 0 4px;
}
.item__active {
  border: 1px solid red;
}
</style>
