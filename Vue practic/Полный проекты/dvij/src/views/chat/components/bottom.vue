<template>
  <div class="chat-bottom flex">
    <Choose v-bind:value="choose" />
    <form class="chat-bottom__form">
      <textarea
        class="chat-bottom__field"
        placeholder="Ввыведите сообщение и номер телефона(перезвоным многовенно)"
      >
      </textarea>
      <div class="chat-bottom__icon">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="512.000000pt"
          height="512.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#9fa5c0"
            stroke="none"
          >
            <path
              d="M2380 4954 c-160 -18 -230 -29 -330 -51 -900 -197 -1601 -880 -1820
                  -1775 -52 -211 -64 -322 -64 -568 0 -246 12 -357 64 -568 324 -1322 1672
                  -2108 2985 -1740 684 191 1265 700 1544 1351 386 898 203 1915 -473 2626 -87
                  91 -266 240 -387 321 -306 204 -620 326 -996 385 -93 15 -448 28 -523 19z
                  m381 -324 c718 -73 1344 -506 1663 -1151 417 -843 210 -1873 -499 -2486 -764
                  -660 -1883 -683 -2665 -55 -888 714 -1038 1998 -338 2903 427 552 1141 859
                  1839 789z"
            />
            <path
              d="M1490 3295 c-103 -32 -170 -125 -170 -236 0 -75 22 -129 71 -177 47
                  -47 83 -63 149 -69 79 -8 145 16 198 70 52 53 72 101 72 174 0 112 -70 207
                  -174 238 -60 18 -87 18 -146 0z"
            />
            <path
              d="M3480 3295 c-60 -19 -122 -73 -149 -130 -27 -58 -28 -153 -2 -210 24
                  -54 100 -119 156 -135 164 -46 314 68 315 238 0 113 -68 206 -174 237 -60 18
                  -87 18 -146 0z"
            />
            <path
              d="M1632 1843 c-36 -7 -100 -77 -108 -117 -13 -73 1 -105 84 -186 182
                  -176 450 -310 715 -354 128 -22 346 -22 474 0 259 43 521 172 706 344 82 77
                  103 116 94 181 -11 84 -97 147 -182 135 -33 -5 -59 -22 -127 -80 -195 -167
                  -396 -255 -632 -275 -308 -26 -597 71 -828 278 -80 72 -122 88 -196 74z"
            />
          </g>
        </svg>

        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="512.000000pt"
          height="512.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#9fa5c0"
            stroke="none"
          >
            <path
              d="M3725 4500 c-82 -12 -165 -39 -250 -83 -78 -39 -108 -68 -1153 -1111
-658 -657 -1088 -1094 -1113 -1130 -60 -90 -83 -176 -77 -299 4 -91 9 -111 41
-180 82 -177 254 -287 446 -287 95 1 148 13 231 52 60 29 149 115 1118 1082
579 578 1060 1063 1068 1078 21 40 17 73 -12 107 -29 35 -80 49 -115 31 -13
-7 -499 -486 -1079 -1065 -1169 -1167 -1078 -1085 -1216 -1085 -117 0 -240 90
-273 200 -6 20 -11 66 -11 101 0 130 -62 61 1118 1240 971 969 1073 1068 1132
1097 359 177 835 -63 976 -493 22 -65 27 -100 28 -190 1 -132 -22 -220 -83
-311 -25 -36 -455 -473 -1113 -1130 -1135 -1133 -1127 -1125 -1303 -1209 -170
-80 -380 -116 -566 -97 -251 27 -467 126 -646 295 -102 97 -164 182 -228 312
-174 354 -148 752 73 1090 34 52 265 289 904 930 l858 861 0 43 c0 58 -41 101
-97 101 -37 0 -58 -21 -881 -842 -464 -464 -865 -870 -892 -903 -116 -145
-208 -339 -251 -530 -29 -131 -32 -396 -5 -520 50 -231 148 -429 291 -593 442
-503 1158 -595 1715 -219 103 69 2239 2199 2306 2299 262 391 85 972 -379
1241 -169 98 -386 143 -562 117z"
            />
          </g>
        </svg>
      </div>
    </form>
  </div>
</template>

<script>
import Choose from "@/components/choose";
export default {
  data() {
    return {
      choose: {
        backBG: "#CC341F",
        backColor: "#fff",
        nextBG: "#1FCC79",
        eventCreate: false,
        backlink: () => "/",
        nextlink: () => "/favorites",
      },
    };
  },
  components: {
    Choose,
  },
};
</script>

<style scoped>
.chat-bottom {
  padding: 0;
  box-sizing: border-box;
  width: 100%;
}
.chat-bottom__form {
  width: 100%;
  height: 91px;
  border: 1px solid #1fcc79;
  padding: 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.5px;
  background: #fafafa;
  color: #9fa5c0;
  position: relative;
}
.chat-bottom__field {
  background: #fafafa;
  border-radius: 25px;
  width: 100%;
  height: 91px;
  padding: 12px 85px 5px 30px;
  font-size: 1rem;
  resize: none;
}
.chat-bottom__icon {
  position: absolute;
  top: 15px;
  right: 20px;
}
.chat-bottom__icon svg {
  width: 25px;
  height: 25px;
  margin: 0 5px;
}
</style>
