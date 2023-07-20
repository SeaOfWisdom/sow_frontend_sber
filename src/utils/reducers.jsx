const INITIAL_STATE = {
  walletData: {
    isConnect: false,
    accountAddress: '',
    tokenBalance: 0,
    isError: false,
  },
  loading: true,
  loadingText: '',
  openAuth: false,
  account: {
    role: 0,
    user_role: 0,
  },
};

// eslint-disable-next-line default-param-last
const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_WALLET':
      return {
        ...state,
        walletData: action.payload,
      };
    case 'SET_BALANCE':
      return {
        ...state,
        walletData: { ...state?.walletData, tokenBalance: action.payload },
      };
    case 'SET_ACCOUNT':
      // eslint-disable-next-line no-case-declarations
      let selectRole = localStorage.getItem('selectRole');
      // eslint-disable-next-line
      if (selectRole && parseInt(selectRole) > action?.payload?.role) {
        selectRole = action?.payload?.role;
        localStorage.setItem('selectRole', selectRole);
      }
      // eslint-disable-next-line no-case-declarations
      const data = {
        ...state?.account,
        ...action?.payload,
        user_role: action?.payload?.role ?? 0,
        role: +(selectRole || (action?.payload?.role ?? 0)),
      };
      return {
        ...state,
        account: data,
      };
    case 'SET_ROLE':
      if (action?.payload) {
        localStorage.setItem('selectRole', action?.payload);
      } else {
        localStorage.removeItem('selectRole');
      }
      return {
        ...state,
        account: { ...state?.account, role: action?.payload ?? 0 },
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
        loadingText: action?.loading__text ?? '',
      };
    case 'SET_OPEN_AUTH':
      return {
        ...state,
        openAuth: action.payload,
      };
    default:
      return state;
  }
};
export default reducers;
