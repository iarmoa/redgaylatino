import React from 'react';
import MetaData from '../../components/Elements/MetaData';
import HomePageTitle from '../../components/Header/HomePageTitle';
import GroupsForm from '../../components/Forms/GroupsForm/GroupsForm';

export default function Reference(){

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
            <GroupsForm />
        </>
    );
}