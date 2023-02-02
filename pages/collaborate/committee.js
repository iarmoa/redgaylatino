import React from 'react';
import MetaData from '../../components/Elements/MetaData';
import HomePageTitle from '../../components/Header/HomePageTitle';

export default function Committee(){
    return (
        <>
            <MetaData
                title = "GayLatino - Ser parte"
                description= "¡Gracias por tu interés en formar parte de GayLatino!"
                url=""
            />
            <HomePageTitle
                title="Red GayLatino"
                tagline="¡Gracias por tu interés en formar parte de GayLatino!"
            />
            <div className="dark-bg pt-20 pb-20">
            </div>
        </>
    )
}