//to make home priavte .we will craete new component private route.in this inhance some condition
import React from 'react'
import { Route } from 'react-router-dom'
import { useProfile } from '../context/profile.context'
//destructe every thing
const PrivateRoute = ({children,...routeProps}) => {
 
    const {profile,isLoading}=useProfile()
    
    if(isLoading && !profile){
        return(<Container>
<Loader center vertical
size="md" content="loading" speed="slow"/>
        </Container>
   ) }
    if(!profile && !isLoading )
    {
        return <Redirect to='/sign'/>


    }
    return (
    <Route {...routeProps}>
        {children}
    </Route>
    
  )
}

export default PrivateRoute