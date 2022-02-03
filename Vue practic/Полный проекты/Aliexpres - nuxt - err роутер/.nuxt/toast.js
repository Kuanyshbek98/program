import { createToastInterface } from "vue-toastification";

export default function (ctx, inject) {
  const toast = createToastInterface({"cssFile":"C:\\Users\\1\\Desktop\\ms\\node_modules\\vue-toastification\\dist\\index.css","timeout":1500,"closeOnClick":true});
  inject('toast', toast);
}
