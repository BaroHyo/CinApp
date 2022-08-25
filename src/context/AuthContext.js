
import React, { createContext, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthReducer } from './AuthReducer';

export const AuthContext = createContext({});


const authInicialState = {
    status: 'checking',
    token: null,
    errorMessage: ''
}


export const AuthProvider = ({ children }) => {


    const [state, dispatch] = useReducer(AuthReducer, authInicialState);


    const signIn = async ({ codigo }) => {
        dispatch({
            type: 'signUp',
            payload: {
                codigo: codigo,
            }
        });
        await AsyncStorage.setItem('codigo', codigo);
    }
    const logOut = async () => {
        await AsyncStorage.removeItem('codigo');
        dispatch({ type: 'logout' });
    }

    const removeError = () => {
        dispatch({ type: 'removeError' });
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            logOut,
            removeError
        }}>
            {children}
        </AuthContext.Provider>
    )

}