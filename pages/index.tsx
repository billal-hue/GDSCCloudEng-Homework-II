
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// Import the functions you need from the SDKs you need
import GDSCLogo from '../assets/GDSC ENST.svg';
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
