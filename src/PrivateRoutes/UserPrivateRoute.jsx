import React, { useEffect } from 'react'
import { useState } from 'react';
import LogInPage from '../pages/LoginPage/LoginPage';
import useAuth from '../utils/providers/AuthProvider'

function UserPrivateRoute({children}) {

    const {user} = useAuth();

    const [isFirst, setIsFirst] = useState(true);

    useEffect(() => {
      setIsFirst(false)
 
    }, [])

    if(user && !isFirst){
        return children;
    }else if(isFirst){
        return <div style={{height:"100vh"}}></div>
    }else{
        return <LogInPage></LogInPage>
    }
}

export default UserPrivateRoute