export const state = () => ({
  bottomSheetVisible: false,
  bottomSheetHeader: null,
  bottomSheetContent: null
})

export const mutations = {
  showBottomSheet (state, { header, body }) {
    state.bottomSheetVisible = true
    state.bottomSheetHeader = header
    state.bottomSheetContent = body
  },
  hideBottomSheet (state) {
    state.bottomSheetVisible = false
    state.bottomSheetHeader = null
    state.bottomSheetContent = null
  }
}
