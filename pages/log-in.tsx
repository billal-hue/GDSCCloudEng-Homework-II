import Image from "next/image";
import React from "react";
import GDSCLogo from '../assets/GDSC ENST.svg';
import { app } from "./index";
import { getAuth, signInWithEmailAndPassword as SIEAP} from 'firebase/auth'

export default function Login(props: any) { 
  // This is just for reloading the state
  const [count,setCount] = React.useState(0)
  //
  // This is for credential State
  const [credentials,setCredentials] = React.useState(new Map<String,String>)
  
  const onChangeHandler = (event:any)=> {
     credentials.set(event.target.name,event.target.value)
     setCount(count +1)
  }

  const register = async () => {

      // insert here firebase code;
      const auth = getAuth(app);
      
      SIEAP(auth, credentials.get('email') as string, credentials.get('password') as string )
        .then((userCredential) =>{
          console.log('Login as :',userCredential.user.displayName)
      })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode.toString(), errorMessage.toString());
      })

     
  }
  return <div style={ {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection: "column"

  }}>
     <Image src={GDSCLogo} alt={"Google Developer Student Clubs - Ecole Nationale Superieure de Technologie."} />
        <h1>Login</h1>
        <div className="registration-form">
            <input type={'email'} name={'email'} placeholder={'Insert your email here'} onChange={onChangeHandler}/>
            <input type={'password'} name={'password'} placeholder={'Insert your password here'} onChange={onChangeHandler} />
            <button onClick={register}>Login</button>
        </div>
        <div className="your-info">
            <p>your entered email is {credentials.get('email')?.toString()}</p>
            <p>your entered password is {credentials.get('password')?.toString()}</p>       
        </div>

  </div>
}