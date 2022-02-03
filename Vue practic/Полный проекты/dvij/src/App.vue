<template>
  <div id="app">
    <router-view />
    <Calendar />
    <DatePicker />
    <SetupCalendar/>
  </div>
</template>

<script>
// import Vue from "vue";
// import VCalendar from "v-calendar";
import { SetupCalendar } from "v-calendar";
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
  data() {
    return {
      routerParams: true,
    };
  },
  components: {
    Calendar,
    DatePicker,
    SetupCalendar,
  },
};
</script>

<style scoped></style>
