export { default as AboutUs } from '../..\\components\\aboutUs.vue'
export { default as ContactUs } from '../..\\components\\contactUs.vue'
export { default as Cusfooter } from '../..\\components\\cusfooter.vue'
export { default as Faq } from '../..\\components\\faq.vue'
export { default as JumbotronComponent } from '../..\\components\\JumbotronComponent.vue'
export { default as NavibarComponent } from '../..\\components\\NavibarComponent.vue'
export { default as ProductPricing } from '../..\\components\\ProductPricing.vue'
export { default as Ratings } from '../..\\components\\ratings.vue'

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
