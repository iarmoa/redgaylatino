import React from 'react';
import MetaData from '../../components/Elements/MetaData';
import HeaderTextTitle from '../../components/Header/HeaderTextTitle';
import HomePageTitle from '../../components/Header/HomePageTitle';
import LeftTextSection from '../../components/Sections/LeftTextSection';
import SimpleTitleAndTextSection from '../../components/Sections/SimpleTitleAndTextSection';

export default function Who(){

    return (
        <>
            <MetaData
                title = "GayLatino - Qué es GayLatino"
                description= "Promovemos y defendemos la libertad, la igualdad, el acceso a salud integral, justicia y educación; para el pleno ejercicio de los derechos humanos de los hombres gays latinos en la región y en todo el mundo."
                url=""
            />
            <HomePageTitle
                title="Red GayLatino"
                tagline="Red por la igualdad de derechos"
            />
            <HeaderTextTitle title={"¿Qué es GayLatino?"} classNameStyles={"pt-70"}>
                <p>
                    Durante siglos el patriarcado, el machismo, el colonialismo y el racismo han
                    vulnerado a los hombres gays, bisexuales y trans &quot;latinos&quot;. En las últimas décadas,
                    ante los fundamentalismos, el aumento del discurso de odio ha impactado en
                    nuestras vidas y derechos. Por si fuera poco, la COVID-19 ha exacerbado las
                    diferentes crisis sanitaria, económica y social en nuestros países, en un contexto de
                    emergencia climática.
                </p>
                <p>
                    Ante este panorama de violación a los derechos humanos básicos, los hombres gay,
                    bisexuales, trans y hombres que tienen sexo con otros hombres (HSH)
                    latinoamericanos nos unimos para fomar GayLatino, una red de activistas que busca
                    crear una cultura de apoyo para que hombres gays, bisexuales y trans de Abya Yala
                    sus familias y comunidades podamos lograr sociedades más justas e igualitarias
                    orientadas al buen vivir.
                </p>
            </HeaderTextTitle>
            <LeftTextSection title={"Los activistas gays de América Latina y el Caribe unimos fuerzas"}>
                <p className='mt-20'>
                    GayLatino nace en el 2015, en Brasil, cuando 60 activistas de países como
                    Argentina, Bolivia, Brasil, Chile, Colombia, Estados Unidos, Guatemala, México,
                    Nicaragua, Paraguay, Perú y Uruguay levantaron su voz con un propósito colectivo:
                    contribuir a la historia del movimiento regional LGBTI+ para promover la garantía
                    plena de los derechos humanos, incluyendo además la atención al VIH, la conquista
                    del matrimonio igualitario y de todos los derechos para todas las personas.
                </p>
                <p className='mt-20'>
                    Por medio de esta unión, y con la mirada puesta en la realidad que padece la
                    comunidad en sus respectivos países, se fueron enriqueciendo las diferentes
                    miradas y liderazgos humanos sin dejar de lado el derecho pleno al placer y al
                    cuidado. Desde esa perspectiva descolonizadora se han incluido múltiples
                    masculinidades, sexualidades no binarias, diversidades étnicas, culturales y de
                    corporalidades.
                </p>
            </LeftTextSection>
            <SimpleTitleAndTextSection className="mt-70">
                <h2 className="font-700">Queremos iguales derechos, buen vivir, para todas las personas</h2>
                    <p>Esta red busca además que todos los hombres gay, bisexuales, trans y hombres que tienen sexo con otros hombres de Abya Yala puedan acceder a un trabajo, a una vivienda digna, a la educación, a servicios de salud integrales, a la justicia y seguridad, todas condiciones de vida básicas negadas por discriminaciones históricas y cotidianas.</p>
                    <p>GayLatino no sólo es una red de activismo sino una comunidad de apoyo y contención para compañeres que estén pasando por situaciones de violación a sus derechos fundamentales encuentren espacios en los cuales puedan sentirse seguros y contenidos.</p>
                    <p>Para que esa necesidad de apoyo pueda llegar a los gobiernos y la ciudadanía toda, se abocan en campañas de comunicación de manera a contribuir con  la eliminación del estigma, la desinformación y así lograr que sean incorporadas perspectivas concernientes al VIH y derechos humanos vinculados con los hombres gay, bisexuales y HSH.</p>
            </SimpleTitleAndTextSection>
        </>
    )
}