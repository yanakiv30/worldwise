import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = { user: null, isAthenticated: false };
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAthenticated: true };
    case "logout":
      return { ...state, user: null, isAthenticated: false };
      default:
        throw new Error("Unknown action");
  }
}

const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };
  

function AuthProvider({ children }) {
  const [{ user, isAthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function login(email, password) {
    if(email===FAKE_USER.email && password===FAKE_USER.password) dispatch({type:"login", payload:FAKE_USER});
  }

  function logout() {
    dispatch({type:"logout"});
  }

  return <AuthContext.Provider value={{user,isAthenticated,login,logout}}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const contextValue = useContext(AuthContext);
  if (contextValue === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return contextValue;
}
export {AuthProvider, useAuth};