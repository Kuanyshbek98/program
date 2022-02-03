import Vue from 'vue'

// Vue.directive('price', {
//   bind: (el, binding, vnode) => {
//     const price = (parseInt(binding.value) || 0).toString() || '0'
//     const length = price.length - 1
//     let result = ''
//     for (let i = 0; i <= length; i++) {
//       result += price[length - i] + (i % 3 === 2 ? ' ' : '')
//     }
//     el.textContent = result.split('').reverse().join('') + 'тг'
//   }
//
// })

Vue.directive('price', (el, binding) => {
  const price = (parseInt(binding.value) || 0).toString() || '0'
  const length = price.length - 1
  let result = ''
  for (let i = 0; i <= length; i++) {
    result += price[length - i] + (i % 3 === 2 ? ' ' : '')
  }
  el.textContent = result.split('').reverse().join('')
})
