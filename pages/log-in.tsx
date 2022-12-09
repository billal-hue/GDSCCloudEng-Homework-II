import Image from "next/image";
import React from "react";
import GDSCLogo from '../assets/GDSC ENST.svg';

export default function Login() { 
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
            <button onClick={register}>Register now!</button>
        </div>
        <div className="your-info">
            <p>your entered email is {credentials.get('email')?.toString()}</p>
            <p>your entered password is {credentials.get('password')?.toString()}</p>       
        </div>

  </div>
}