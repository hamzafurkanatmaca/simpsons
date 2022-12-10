export default function reducer(state, action) {
  switch (action.type) {
    case 'HIDE_LOADER':
      state.homeMainData.loading = false;
      return {...state};
      break;
    case 'SHOW_LOADER':
      state.homeMainData.loading = true;
      return {...state};
      break;
    case 'SET_SIMPSONS':
      const {simpsons} = action.payload;
      state.homeMainData.simpsons = simpsons;
      return {...state};
      break;
    default:
      break;
  }
}
