import IconClose from '~/icons/close-icon'

export default {
  name: 'OffcanvasClose',
  functional: true,
  render (h, { data }) {
    return h('button', {
      staticClass: 'uk-offcanvas-close uk-close uk-icon',
      attrs: {
        type: 'button'
      },
      on: data.on
    }, [
      h(IconClose)
    ])
  }
}
