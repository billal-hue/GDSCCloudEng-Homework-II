import Image from "next/image";
import React from "react";
import GDSCLogo from '../assets/GDSC ENST.svg';
import { getAuth, sendPasswordResetEmail as SPRE } from 'firebase/auth';
import { app } from './index';

export default function RestPassword() { 
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
      SPRE(auth, credentials.get('email') as string)
        .then(() => console.log('sent successfully!'))
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
      });
     
  }
  return <div style={ {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection: "column"

  }}>
     <Image src={GDSCLogo} alt={"Google Developer Student Clubs - Ecole Nationale Superieure de Technologie."} />
        <h1>Reset your password</h1>
        <div className="registration-form">
            <input type={'email'} name={'email'} placeholder={'Insert your email here'} onChange={onChangeHandler}/>
            <button onClick={register}>Reset</button>
        </div>
        <div className="your-info">
            <p>your entered email is {credentials.get('email')?.toString()}</p>
        </div>

  </div>


}