export default function ({ store }) {
  // hide bottom sheet every route change
  store.commit('bottomSheet/hideBottomSheet')

  // scroll to top
  if (process.browser) {
    window.scrollTo(0, 0)
  }
}
