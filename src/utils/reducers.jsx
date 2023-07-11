const INITIAL_STATE = {
  walletData: {
    isConnect: false,
    accountAddress: "",
    tokenBalance: -1, //  -1 Tokent Not Found
    isError: false,
  },
  loading: false,
  loading__text: "",
  open_auth: false,
  account: {
    role: 0,
    user_role: 0,
  },
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_WALLET":
      return {
        ...state,
        walletData: action.payload, 
      };
    case "SET_BALANCE":
      return {
        ...state,
        walletData:  {...state?.walletData,  tokenBalance: action.payload}, 
      };
    case "SET_ACCOUNT":
      let select_role = localStorage.getItem('select_role');
      if(select_role && parseInt(select_role)>action?.payload?.role){
        select_role = action?.payload?.role;
        localStorage.setItem('select_role', select_role);
      }
      const data = { 
        ...state?.account, 
        ...action?.payload, 
        user_role: action?.payload?.role ?? 0, 
        role: +(select_role?select_role:action?.payload?.role??0)
      } 
      return {
        ...state,
        account: data
      }; 
    case "SET_ROLE":
      if(action?.payload){
        localStorage.setItem('select_role', action?.payload)
      }else{
        localStorage.removeItem('select_role')
      }
      return {
        ...state,
        account: { ...state?.account, role: action?.payload ?? 0 },
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
        loading__text: action?.loading__text ?? "",
      };
    case "SET_OPEN_AUTH":
      return {
        ...state,
        open_auth: action.payload,
      };
    default:
      return state;
  }
};
export default reducers;
