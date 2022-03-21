import React, {useState} from 'react';
export const LoginContext = React.createContext()

export const LoginProvider = (props) => {
    const [accessToken, setAccessToken] = useState();
    const [userInfo, setUserInfo] = useState();

    return ( 
        <LoginContext.Provider value={[accessToken, setAccessToken, userInfo, setUserInfo]}>
            {props.children}
        </LoginContext.Provider>
    );
}