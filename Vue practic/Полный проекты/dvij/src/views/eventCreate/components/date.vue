<template>
  <div class="date">
    <h1 class="event-create__title">Время и дата</h1>
    <p class="event-create__text">
      Отметьте те дни, которые вы сможете принимать гостей
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calendar: {
        monthLength: 6,
        show: false,
        start: { year: "2018", month: "07", day: "01" },
        begin: { year: "2018", month: "07", day: "02" },
        end: { year: "2018", month: "07", day: "03" },
        select: (begin, end) => {
          this.calendar.show = false;
          this.calendar.begin = begin;
          this.calendar.end = end;
        },
      },
    };
  },
  components: {
    // DatePicker,
  },
};
</script>

<style scoped></style>
