export default function ({ store }) {
  // hide bottom sheet every route change
  store.commit('bottomSheet/hideBottomSheet')

  // reset nohero
  store.commit('navbarConfig/setNoHero', true)

  // scroll to top
  if (process.browser) {
    window.scrollTo(0, 0)
  }
}
