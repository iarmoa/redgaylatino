import React from 'react';
import Boxes from '../../components/Channels/Boxes';
import MetaData from '../../components/Elements/MetaData';
import HomePageTitle from '../../components/Header/HomePageTitle';

export default function Channels(){

    return(
        <>
            <MetaData
                title = "GayLatino - Contacto"
                description= "Promovemos y defendemos la libertad, la igualdad, el acceso a salud integral, justicia y educación; para el pleno ejercicio de los derechos humanos de los hombres gays latinos en la región y en todo el mundo."
                url=""
            />
            <HomePageTitle
                title="Red GayLatino"
            />
            
            <div className="dark-bg pt-80 pb-80">
                <div className='col-sm-8 section-heading'>
                    <p>Puedes hacer click en los enlaces. Siguenos y habla con nosotres.</p>
                </div>
            </div>
            <Boxes />
        </>
    )
}