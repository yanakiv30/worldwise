import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState={user:null,isAthenticated:false};
function reducer(state,action){
    
}

function AuthProvider({children}){

    const [{user, isAthenticated},dispatch] = useReducer(reducer, initialState)
function login(email,password) {};

function logout() {}

    return <AuthContext.Provider>{children}</AuthContext.Provider>
}

function useAuth(){
    const contextValue = useContext(AuthContext)
    if (contextValue===undefined) throw new Error("AuthContext was used outside AuthProvider");
    return contextValue
}