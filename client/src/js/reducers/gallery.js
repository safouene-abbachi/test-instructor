import { LOAD_GALLERY } from '../constants/actions-types';

const initialState = {
  gallery: {
    user: '',
    title: '',
    path: ''
  },
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_GALLERY:
      return {
        ...state,
        gallery: payload,
        loading: false
      };

    default:
      return state;
  }
};
