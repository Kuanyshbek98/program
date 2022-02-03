<template>
  <div class="date-picker-box">
    <div class="dpb-week">
      <table>
        <thead>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="dpb-week-days">
      <div class="dpbwd-table" v-for="(item, index) in data" :key="index">
        <div class="dpbwd-table-month">
          {{ getNormalMonth(Number(index)) }}
        </div>
        <div class="dpbwd-table-items">
          <table class="dpbwd-table-items-table">
            <tbody>
              <tr v-for="week in item" :key="week">
                <td
                  :class="
                    isActive(day)
                      ? 'active'
                      : isInRange(day)
                      ? 'range'
                      : isDisable(day)
                      ? 'disable'
                      : ''
                  "
                  v-for="day in week"
                  :key="day.id"
                  @click="select(day)"
                >
                  <div class="page-table-item">
                    <em class="page-table-note">
                      {{ isBegin(day) ? beginText : isEnd(day) ? endText : "" }}
                    </em>
                    <strong class="page-table-text">
                      <!-- {{day}} -->
                      {{ day.day }}</strong
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "datePicker",
  data() {
    return {
      data: [],
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      begin: "",
      end: "",
      lastDate: "",
    };
  },
  props: {
    monthLength: {
      type: Number,
      default: 6,
    },
    beginText: {
      type: String,
      default: "入住",
    },
    endText: {
      type: String,
      default: "离店",
    },
    start: {
      type: String,
      default: "",
    },
    last: {
      type: String,
      default: "",
    },
    beginDate: {
      type: String,
      default: "",
    },
    endDate: {
      type: String,
      default: "",
    },
  },
  watch: {
    beginDate(val) {
      this.begin = val;
    },
    endDate(val) {
      this.end = val;
    },
    last(val) {
      this.lastDate = val;
    },
  },
  methods: {
    //是否为不可选择日期
    isDisable(day) {
      let _day = day.year + "-" + day.month + "-" + day.day;
      let start = this.start;
      let lastDate = this.lastDate;
      let s1 = new Date(start).getTime();
      let s2 = new Date(lastDate).getTime();
      let s = new Date(_day).getTime();
      return s1 > s || s2 < s ? true : false;
    },
    //是否选中
    isActive(day) {
      let begin = this.begin;
      let end = this.end;
      let _day = day.year + "-" + day.month + "-" + day.day;
      let s1 = new Date(begin).getTime();
      let s2 = new Date(end).getTime();
      let s = new Date(_day).getTime();
      return s == s1 || s == s2 ? true : false;
    },
    //是否为开始日期
    isBegin(day) {
      let begin = this.begin;
      let s1 = new Date(begin).getTime();
      let s = new Date(day).getTime();
      return s == s1 ? true : false;
    },
    //是否为结束日期
    isEnd(day) {
      let end = this.end;
      let s1 = new Date(end).getTime();
      let s = new Date(day).getTime();
      return s == s1 ? true : false;
    },
    //选中日期
    select(day) {
      if (this.isDisable(day)) return;

      let _day = day.year + "-" + day.month + "-" + day.day;
      if (!this.begin || (this.begin && this.end)) {
        this.begin = _day;
        this.end = "";
      } else if (this.begin && !this.end) {
        //反选日期
        if (this.isOpposite(day, this.begin)) {
          this.end = this.begin;
          this.begin = day;
        } else {
          this.end = day;
        }
        //选中日期
        this.$emit("select", this.begin, this.end);
      }
    },
    cancel() {
      this.begin = this.beginDate;
      this.end = this.endDate;
      this.$emit("select");
    },
    //获取日份,count=1为下一个月，count=-1为上一个月
    getNormalMonth(count) {
      let date = new Date();
      date.setMonth(date.getMonth() + count, 1);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let time = String(year) + "-" + String(month);
      return time;
    },
    //判断是否反转日期
    isOpposite(end, begin) {
      let s1 = new Date(begin).getTime();
      let s2 = new Date(end).getTime();
      return s2 < s1 ? true : false;
    },
    //查看是否是已经选中的日期区间中
    isInRange(day) {
      if (!day) return;
      let _day = day.year + "-" + day.month + "-" + day.day;
      let begin = this.begin;
      let end = this.end;
      let s1 = new Date(begin).getTime();
      let s2 = new Date(end).getTime();
      let s = new Date(_day).getTime();
      if (s < s2 && s > s1) return true;
    },
    //获取天数差
    getDaysSize(s1, s2) {
      let _s1 = new Date(s1);
      let _s2 = new Date(s2);
      let days = _s2.getTime() - _s1.getTime();
      let time = parseInt(days / (1000 * 60 * 60 * 24));
      return time;
    },
    //获取周几
    getWeekday(date) {
      //   let nowDate = new Date();
      //   let days = this.getDaysSize(nowDate, date);
      let mydate = new Date(date);
      let myday = mydate.getDay(); //注:0-6对应为星期日到星期六
      return myday;
    },
    //将数据格式化表格日期格式
    monthDate(year, month) {
      //或取当前月份最后一天的日期
      let day = new Date(year, month, 0);
      let lastDay = day.getDate();
      //计算当前月份第一天是星期几
      let weekday = this.getWeekday(year + "-" + month + "-01");
      //定义存放当前月份的数组
      let data = [];
      //定义日期表格数组
      let result = [];
      //计算出当前月份每一天到数组中
      for (let day = 1; day <= lastDay; day++) {
        let day = day < 10 ? "0" + day : day;
        data.push({ day, month, year });
      }
      //补全日期前几天
      for (let i = 0; i < weekday; i++) {
        data.unshift("");
      }
      //切成6行
      for (let i = 0, len = data.length; i < len; i += 7) {
        result.push(data.slice(i, i + 7));
      }
      //补全日期后几天
      let length = result[result.length - 1].length;
      if (length < 7) {
        for (let i = 0; i < 7 - length; i++) {
          result[result.length - 1].push("");
        }
      }
      return result;
    },
    //初始化表格数据
    tableDate() {
      let monthLength = this.monthLength;
      let data = [];
      // let date = new Date();
      let year = this.year; //获取完整的年份(4位)
      let month = this.month; //获取当前月份
      // console.log(year,month,monthLength)
      for (let i = 0; i < monthLength; i++) {
        let y = month + i > 12 ? year + 1 : year;
        let m = month + i > 12 ? month + i - 12 : month + i;
        // console.log(y,m)
        let re = this.monthDate(y, m < 10 ? "0" + m : m);
        data.push(re);
      }
      this.data = data;
    },
  },
  mounted() {
    this.end = this.endDate;
    this.begin = this.beginDate;
    this.lastDate = this.last;
    this.tableDate();
  },
};
</script>
<style scoped>
.date-picker-box {
  width: 100%;
  height: 120%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 24;
}
.dpb-title {
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #fff;
  font-size: 15px;
  position: relative;
}
.dpb-title > span {
  position: absolute;
  right: 12px;
  line-height: 50px;
  font-size: 13px;
}
.dpb-week > table {
  background: #fff;
  font-size: 13px;
  width: 100%;
  border-collapse: separate;
  table-layout: fixed;
}
.dpb-week > table > thead > tr > th {
  height: 30px;
  text-align: center;
  font-weight: 400;
  border-bottom: 1px solid #e0e0e0;
  width: 14.28571%;
  vertical-align: middle;
}
.dpb-week-days {
  position: relative;
  width: 100%;
  height: 75%;
  overflow: auto;
  padding-bottom: 120px;
}
.dpbwd-table-month {
  height: 30px;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  font-size: 15px;
  font-weight: 700;
  background: hsla(210, 8%, 95%, 0.9);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid #e0e0e0;
}
.page-table-item {
  box-sizing: border-box;
  position: relative;
  /*display: -webkit-box;*/
  -webkit-box-orient: vertical;
  -webkit-box-align: center;
  -webkit-box-pack: end;
}
.page-table-text {
  font-size: 13px;
  height: 15px;
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.page-table-note {
  color: #ff5000;
  font-size: 12px;
  height: 15px;
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-style: inherit;
}
.page-table-note,
.page-table-text {
  display: block;
  width: 100%;
  text-align: center;
  font-weight: 400;
}
.dpbwd-table-items-table > tbody > tr > td.disable .page-table-text,
.dpbwd-table-items-table > tbody > tr > td.disable .page-table-note {
  color: #ccc !important;
  background: none !important;
}
.dpbwd-table-items-table > tbody > tr > td.range {
  background: #fff6d6;
  border-bottom-color: #fff6d6 !important;
}
.dpbwd-table-items-table > tbody > tr > td.active {
  background: #ffc900;
  border-bottom-color: #ffc900 !important;
}
.dpbwd-table-items-table > tbody > tr > td.disable {
  background: #fafafa !important;
  border-bottom-color: #e0e0e0 !important;
}
.dpbwd-table-items-table > tbody > tr > td {
  height: 60px;
  text-align: center;
  width: 14.28571%;
  position: relative;
  border-bottom: 1px solid #e0e0e0;
}
.dpbwd-table-items-table {
  width: 100%;
  border-collapse: separate;
  table-layout: fixed;
}
</style>
