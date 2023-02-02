import React from 'react';
import MetaData from '../../components/Elements/MetaData';
import HomePageTitle from '../../components/Header/HomePageTitle';
import Donors from '../../components/Index/Donors';

export default function Who(){

    return (
        <>
            <MetaData
                title = "GayLatino - Estatuto y Gobernanza"
                description= "Promovemos y defendemos la libertad, la igualdad, el acceso a salud integral, justicia y educación; para el pleno ejercicio de los derechos humanos de los hombres gays latinos en la región y en todo el mundo."
                url=""
            />
            <HomePageTitle
                title="Red GayLatino"
                tagline="Red por la igualdad de derechos"
            />
            <section className='pr-40 pl-40'>
            <h4><a href="#">Estatuto</a></h4>
                
            </section>
            
            <Donors />
        </>
    )
}