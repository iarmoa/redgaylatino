import React from 'react';
import MetaData from '../../components/Elements/MetaData';
import HomePageTitle from '../../components/Header/HomePageTitle';
import Donors from '../../components/Index/Donors';

export default function Who() {

    return (
        <>
            <MetaData
                title="GayLatino - Juventudes GayLatino"
                description="Promovemos y defendemos la libertad, la igualdad, el acceso a salud integral, justicia y educación; para el pleno ejercicio de los derechos humanos de los hombres gays latinos en la región y en todo el mundo."
                url=""
            />
            <HomePageTitle
                title="Red GayLatino"
                tagline="Red por la igualdad de derechos"
            />
            <section className='pr-40 pl-40'>
                <h4 className='mt-10 pr-20 pl-20 line-height-26 default-color'>El Grupo de Referencia de Juventudes (GRJ)</h4>
                <p className='mt-20 pr-20 pl-20'>Esta iniciativa se trata del primer grupo temático y de referencia de GayLatino, establecido y aprobado por el Comité Ejecutivo a mediados del mes de jJunio de 2017. El GRJ está compuesto en su amplia mayoría por jóvenes gay Latinos y otros activistas por la defensa de la salud y los derechos humanos en sus respectivas subregiones de América Latina y el Caribe, basados en el fuerte apoyo de nuestros miembros para llevar a cabo las metas establecidas en nuestro Plan Estratégico GayLatino 2017-2021.</p>
                <h4 className='mt-10 pr-20 pl-20 line-height-26 default-color'>Objetivos</h4>
                <ul>
                    <li>Posicionar las demandas relacionadas con la salud y los derechos humanos de HSH a nivel mundial</li>
                    <li>roporcionar un foro para una mayor colaboración y apoyo a los defensores que trabajan en temas relacionados con la salud de HSH  y derechos humanos</li>
                    <li>Fortalecer los esfuerzos de la programación existente de HSH y proporcionar apoyo a estos esfuerzos cuando sea apropiado</li>
                    <li>Apoyar y facilitar un compromiso más amplio entre las redes de HSH y los defensores de los jóvenes a nivel regional y mundial</li>
                    <li>Apoyar las asociaciones entre jóvenes y adultos y los diálogos intergeneracionales a nivel nacional, regional y mundial.</li>
                    <li>Servir como un punto de comunicación primordial para los miembros del GRJ y el secretariado de GayLatino</li>
                </ul>
                <h4 className='mt-10 pr-20 pl-20 line-height-26 default-color'>Actividades (campañas, iniciativas, las actividades que vamos a desarrollar en estos meses)</h4>
                
                <p className='mt-20 pr-20 pl-20'>El GRJ asesora y coordina el trabajo de GayLatino en materia de juventudes, la defensa de la autonomía de los jóvenes gay Latinos dentro de la respuesta regional y global al VIH mediante el desarrollo de habilidades, trabajo en redes de colaboración y la participación activa en los procesos de toma de decisiones que afectan a jóvenes gays, bisexuales y otros.</p>

                <h4 className='mt-10 pr-20 pl-20 line-height-26 default-color'>Algunas actividades ya realizadas:</h4>
                <p className='mt-20 pr-20 pl-20'>Participación en:</p>
                <ul>
                    <li>Civil Society Hearing - United Nation Headquarters. New York, 2016</li>
                    <li>Campaña regional por el Dia de la salud sexual, 2017</li>
                    <li>Encuentro Regional GayLatino, Rosario 2017</li>
                    <li>Planificación estratégica GRJ, Asunción 2018</li>
                    <li>Conferencia Mundial de SIDA, Amsterdam 2018</li>
                    <li>Conferencia Internacional sobre ciencia en VIH, México 2019</li>
                    <li>Campamento “Juventudes Ya!”, organizado por UNFPA LAC - México 2019</li>
                </ul>
                <h4 className='mt-10 pr-20 pl-20 line-height-26 default-color'>Actividades a realizar:</h4>
              
                <p className='mt-20 pr-20 pl-20'>Diagnóstico regional sobre las necesidades principales y percepciones de jovenes gay, bisexuales y HSH sobre el contexto social y político. </p>
            </section>

            <Donors />
        </>
    )
}