import React, { useState } from 'react';
export const LoginContext = React.createContext()

export const LoginProvider = (props) => {
    const [accessToken, setAccessToken] = useState();
    const [userInfo, setUserInfo] = useState();
    const [userToken, setUserToken] = useState();
    const [userId, setUserId] = useState();

    return (
        <LoginContext.Provider value={[accessToken, setAccessToken, userInfo, setUserInfo, userToken, setUserToken, userId, setUserId]}>
            {props.children}
        </LoginContext.Provider>
    );
} 