import { LOAD_USERS, LOAD_FAIL } from '../constants/actions-types';

const initialState = {
  users: {
    name: '',
    surName: '',
    birthYear: '',
    birthPlace: ''
  },
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      };

    case LOAD_FAIL:
      return {
        ...state,
        users: [
          {
            name: '',
            surName: '',
            birthYear: '',
            birthPlace: ''
          }
        ],
        loading: false
      };

    default:
      return state;
  }
};
