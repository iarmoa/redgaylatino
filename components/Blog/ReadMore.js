import React from 'react';
import Link from 'next/link';

export default function ReadMore({ children, url = '/', button }){

    if(button){
        return (
            <a   
                className="btn btn-color mt-30"
                onClick={(e) => {e.preventDefault(); if(typeof window !== 'undefined') window.open(url)} }
            >
                {children}
            </a>
        )
    }else{
        return (
            <Link href={url}>{children}</Link>
        )
    }
}