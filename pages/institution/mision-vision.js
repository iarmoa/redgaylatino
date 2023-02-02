import React from 'react';
import MetaData from '../../components/Elements/MetaData';
import HeaderTextTitle from '../../components/Header/HeaderTextTitle';
import HomePageTitle from '../../components/Header/HomePageTitle';
import Boxes from '../../components/MisionVision/boxes';

export default function MisionVision(){
    return (
        <>
            <MetaData
                title = "GayLatino - Misión y Visión"
                description= "Misión y Visión"
                url=""
            />
            <HomePageTitle
                title="Red GayLatino"
                tagline="Red por la igualdad de derechos"
            />
            <Boxes/>
            <div className="dark-bg pt-80 pb-80">
                <div className='col-sm-8 section-heading '>
                    <p>Desde el 2015 defendemos la libertad, la equidad, el acceso a la salud integral para el pleno ejercicio libre de discriminación y violencia.</p>
                </div>
            </div>
            <HeaderTextTitle title={"La Visión es una Abya Yala que respete, proteja y celebre la vida de los hombres gays latinos"}>
                <p>Hemos realizado a lo largo de éstos 7 años variados encuentros en localidades como Curitiba (Brasil), CDMX (México), Rosario (Argentina), Villeta (Paraguay) y Bogotá (Colombia). </p>
                <p>En esos espacios hemos mantenido una estrecha y fluida comunicación entre activistas para discutir sobre lo que está pasando en la región, articular iniciativas a nivel internacional y dar o solicitar apoyo ante situaciones de emergencia entre otras cuestiones que atañen a la comunidad.</p>
                <p>En mayo del 2020 en el marco del ciclo “Entre Pandemias de la Red GayLatino”, una iniciativa para hacer frente a la crisis sanitaria, la organización pudo compartir desde la solidaridad una reflexión conjunta sobre lecciones aprendidas de la respuesta al VIH, las posibles estrategias para enfrentar al COVID-19 y los desafíos para las juventudes en América Latina. </p>
                <p>Este encuentro fue muy importante para la comunidad y contó con la participación de Javier Arellano Oficial de Juventud de ONUSIDA LAC, Ricardo Baruch de la IPPF México, Matías Muñoz de la Asociación civil Ciclo Positivo Argentina y de un representante del Grupo de referencias de juventudes GayLatino.</p>
            </HeaderTextTitle>
        </>
    )
}