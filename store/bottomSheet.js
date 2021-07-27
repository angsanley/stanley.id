export const state = () => ({
  bottomSheetVisible: false,
  bottomSheetContent: null
})

export const mutations = {
  showBottomSheet (state, content) {
    state.bottomSheetVisible = true
    state.bottomSheetContent = content
  },
  hideBottomSheet (state) {
    state.bottomSheetVisible = false
    state.bottomSheetContent = null
  }
}
