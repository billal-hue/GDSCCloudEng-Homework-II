
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { initializeApp } from 'firebase/app'
// Import the functions you need from the SDKs you need
import GDSCLogo from '../assets/GDSC ENST.svg';


const firebaseConfig = {
  apiKey: "AIzaSyDrrROQoOZXRPew8KWEunLUC9rxey3c8Z0",
  authDomain: "gdsc-homework-781e1.firebaseapp.com",
  projectId: "gdsc-homework-781e1",
  storageBucket: "gdsc-homework-781e1.appspot.com",
  messagingSenderId: "549302681360",
  appId: "1:549302681360:web:bab9f0cd979d961849ef95"
};

export const app =  initializeApp(firebaseConfig);

export default function Home() {
  return (
    <div style={
      {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection: "column"

      }
    }>
      <Image src={GDSCLogo} alt={"Google Developer Student Clubs - Ecole Nationale Superieure de Technologie."} />
      <h1>GDSC - Cloud Engineering | Homework II</h1>
      <h2>Billal</h2>
      <div className='action-buttons'>
      <Link href={'/sign-up'}>
        <button>
          Registration
        </button>
      </Link>
      <Link href={'/log-in'}>
        <button>
          Login
        </button>
      </Link>
      <Link href={'/reset-password'}>
        <button>
          Reset password
        </button>
      </Link>
      </div>
    </div>
  );
}
