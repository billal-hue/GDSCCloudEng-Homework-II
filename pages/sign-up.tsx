import Image from "next/image";
import React from "react";
import GDSCLogo from '../assets/GDSC ENST.svg';
import { getAuth, createUserWithEmailAndPassword as CUWEAP , updateProfile} from 'firebase/auth';
import { app } from './index';
export default function SignUp() {
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
        console.log(credentials.get('email'),credentials.get('password'))
        const auth = getAuth(app);  
        CUWEAP(auth, credentials.get('email') as string, credentials.get('password') as string)
            .then(userCredentials => {
                const user = userCredentials.user;
                updateProfile(user, {displayName: credentials.get('displayName') as string})
                    .then(() => console.log('DisplayName updated: ', credentials.get('displayName')?.toString()))
                    .catch(error => console.error(error.message.toString()));
                console.log(user);
        })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode.toString(), errorMessage.toString());
        });
    }

    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"

    }}>
        <Image src={GDSCLogo} alt={"Google Developer Student Clubs - Ecole Nationale Superieure de Technologie."} />
        <h1>Registration</h1>
        <div className="registration-form">
            <input type={'text'} name={'displayName'} placeholder={'Insert your name here'} onChange={onChangeHandler}/>
            <input type={'email'} name={'email'} placeholder={'Insert your email here'} onChange={onChangeHandler}/>
            <input type={'password'} name={'password'} placeholder={'Insert your password here'} onChange={onChangeHandler} />
            <button onClick={register}>Register now!</button>
        </div>
        <div className="your-info">
            <p>your entered displayName is {credentials.get('displayName')?.toString()}</p>
            <p>your entered email is {credentials.get('email')?.toString()}</p>
            <p>your entered password is {credentials.get('password')?.toString()}</p>
       
        </div>
    </div>
}