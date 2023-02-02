import React from 'react';
import MetaData from '../../components/Elements/MetaData';
import HomePageTitle from '../../components/Header/HomePageTitle';
import Donors from '../../components/Index/Donors';

export default function Who(){

    return (
        <>
            <MetaData
                title = "Qué países forman parte"
                description= "Promovemos y defendemos la libertad, la igualdad, el acceso a salud integral, justicia y educación; para el pleno ejercicio de los derechos humanos de los hombres gays latinos en la región y en todo el mundo."
                url=""
            />
            <HomePageTitle
                title="Red GayLatino"
                tagline="Red por la igualdad de derechos"
            />
            <section className='pr-40 pl-40'>
                <h4 className='mt-10 pr-20 pl-20 line-height-26 default-color'>Actualmente estamos presentes en 20+ países del continente</h4>
                <p className='mt-20 pr-20 pl-20'>Argentina, Belice, Bolivia, Brasil, Chile, Colombia, Costa Rica, Cuba, Ecuador, El Salvador, Guatemala, Honduras, México, Nicaragua, Panamá, Paraguay, Perú, Puerto Rico, República Dominicana, Uruguay, Venezuela. Nuestra sede está en la ciudad de Villeta (Paraguay), a 30 km de Asunción, la capital paraguaya. </p>
                <h4 className='mt-10 pr-20 pl-20 line-height-26 default-color'>Tenemos 7 subregiones de trabajo</h4>
                <p className='mt-20 pr-20 pl-20'>Andina</p>
                <ul>
                    <li>Bolivia</li>
                    <li>Colombia</li>
                    <li>Ecuador</li>
                    <li>Perú</li>
                </ul> 
                <p className='mt-20 pr-20 pl-20'>Brasil</p>  
                <p className='mt-20 pr-20 pl-20'>Caribe</p> 
                <ul>
                    <li>Belice</li>
                    <li>Cuba</li>
                    <li>Venezuela</li>
                    <li>República Dominicana</li>
                    <li>Puerto Rico</li>
                </ul> 
                <p className='mt-20 pr-20 pl-20'>Centroamérica</p> 
                <ul>
                    <li>Costa Rica</li>
                    <li>Nicaragua</li>
                    <li>El Salvador</li>
                    <li>Honduras</li>
                    <li>Panamá</li>
                </ul>
                <p className='mt-20 pr-20 pl-20'>Cono Sur</p>
                <ul>
                    <li>Argentina</li>
                    <li>Chile</li>
                    <li>Paraguay</li>
                    <li>Uruguay</li>
                </ul> 
                <p className='mt-20 pr-20 pl-20'>México</p> 
                <p className='mt-20 pr-20 pl-20'>Diáspora Internacional</p> 
                <ul>
                    <li>Estados Unidos</li>
                </ul>
            </section>
            
            <Donors />
        </>
    )
}