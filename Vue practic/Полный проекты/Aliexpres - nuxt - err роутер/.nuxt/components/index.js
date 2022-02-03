export { default as Spinner } from '../..\\components\\global\\spinner.vue'
export { default as Background } from '../..\\components\\background.vue'
export { default as Base } from '../..\\components\\base.vue'
export { default as EmptyBlock } from '../..\\components\\emptyBlock.vue'
export { default as AuthBlock } from '../..\\components\\auth\\authBlock.vue'
export { default as AuthAuthorizationBlock } from '../..\\components\\auth\\authorizationBlock.vue'
export { default as AuthCodeConfirm } from '../..\\components\\auth\\codeConfirm.vue'
export { default as AuthPasswordChange } from '../..\\components\\auth\\passwordChange.vue'
export { default as AuthPasswordRecovery } from '../..\\components\\auth\\passwordRecovery.vue'
export { default as AuthRegistrationBlock } from '../..\\components\\auth\\registrationBlock.vue'
export { default as BasketEmpty } from '../..\\components\\basket\\empty.vue'
export { default as ChatBottom } from '../..\\components\\chat\\bottom.vue'
export { default as ChatItem } from '../..\\components\\chat\\item.vue'
export { default as ChatLeft } from '../..\\components\\chat\\left.vue'
export { default as ChatMessage } from '../..\\components\\chat\\message.vue'
export { default as ChatRight } from '../..\\components\\chat\\right.vue'
export { default as CommonBigProduct } from '../..\\components\\common\\bigProduct.vue'
export { default as CommonBox } from '../..\\components\\common\\box.vue'
export { default as CommonCatBrief } from '../..\\components\\common\\catBrief.vue'
export { default as CommonProductBrief } from '../..\\components\\common\\productBrief.vue'
export { default as Footer } from '../..\\components\\footer\\footer.vue'
export { default as Header } from '../..\\components\\header\\header.vue'
export { default as HomeCats } from '../..\\components\\home\\cats.vue'
export { default as ProductAddReview } from '../..\\components\\product\\addReview.vue'
export { default as ProductComment } from '../..\\components\\product\\comment.vue'
export { default as ProductImage } from '../..\\components\\product\\image.vue'
export { default as ProductInfo } from '../..\\components\\product\\info.vue'
export { default as ProductReview } from '../..\\components\\product\\review.vue'
export { default as ProductSeller } from '../..\\components\\product\\seller.vue'
export { default as ProductSimilar } from '../..\\components\\product\\similar.vue'
export { default as ProfileControlBlock } from '../..\\components\\profile\\controlBlock.vue'
export { default as ProfileFavorite } from '../..\\components\\profile\\favorite.vue'
export { default as ProfileMyCarts } from '../..\\components\\profile\\myCarts.vue'
export { default as ProfileOrderBlock } from '../..\\components\\profile\\orderBlock.vue'
export { default as ProfileOrdersBlock } from '../..\\components\\profile\\ordersBlock.vue'
export { default as ProfileBlock } from '../..\\components\\profile\\profileBlock.vue'
export { default as ProfileStatic } from '../..\\components\\profile\\static.vue'
export { default as ProfileSubscribers } from '../..\\components\\profile\\subscribers.vue'
export { default as SliderBanner } from '../..\\components\\slider\\banner.vue'
export { default as SliderProducts } from '../..\\components\\slider\\products.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
