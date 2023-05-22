import React from 'react'
import { Container } from 'rsuite'
import firebase from 'firebase/app'
import {auth, database} from '../misc/firebase'
const SignIn = () => {
// create fun to call in handler.provider either facebook or google
const signInWithProvider=async(provider)=>{

try{  
  
  const{additionalInfo,user} =await auth.signInWithPopup(provider) 
if(additionalInfo.isNewUser)
{
  // if new user signed store into database
//set method  to store object
 await database.ref(`/profile/${user.uid}`).set({
  name:user.displayName,
  createdAt:firebase.database.ServerValue.TIMESTAMP
}

) // path in ouer da
}
Alert.sucess('signed',4000)
 //this provider obje we need to import from firebase liabary and it is static
}catch(error){
  Alert.error(error.message,4000)
}
  // handler o click event
  const onFaceBookSignIn=(provider)=>{
    signInWithProvider(new firebase.auth.FacebookAuthProvider)
  }
  const onGoogleSignIn=()=>{
    signInWithProvider(new firebase.auth.GoogleAuthProvider)
  }
  return (
    <Container>
      <Grid className='mt-page'>
        <Row>
          <Col  xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className='text-center'>
                <h2>Welcome To CHat</h2>
                <p> Progressiv chat</p>
              
              </div>
              <div className='mt-3'>
              <Button block color='blue'>
                <Icon icon="facebook" onClick={onFaceBookSignIn}>

                </Icon>
Continue with facebook
              </Button>
              <Button block color='green' onClick={onGoogleSignIn}>
                <Icon icon="google">

                </Icon>
Continue with Google
</Button>
              </div>
             
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  )
}

export default SignIn