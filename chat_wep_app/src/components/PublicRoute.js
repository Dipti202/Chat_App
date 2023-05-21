//to make home priavte .we will craete new component private route.in this inhance some condition
import React from 'react'
import { Route } from 'react-router-dom'
//destructe every thing
const PublicRoute = ({children,...routeProps}) => {
 
    const profile=false
    if(profile)
    {
        return <Redirect to='/'/>


    }
    return (
    <Route {...routeProps}>
        {children}
    </Route>
    
  )
}

export default PrivateRoute