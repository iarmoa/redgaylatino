import React from 'react';
import CallToAction from '../../components/Elements/CallToAction';
import MetaData from '../../components/Elements/MetaData';
import HomePageTitle from '../../components/Header/HomePageTitle';
import data from '../../data/project-data.json';

export async function getServerSideProps({ params }){
    return {
        props: {
            projectId: params.projectId
        }
    }
}

export default function Project({ projectId }){
    return (
        <>
            <MetaData
                title = { "GayLatino - Convocatorias " + data[projectId]?.projectName }
                description= { "Convocatorias abiertas al proyect " + data[projectId]?.projectName}
                url={ "/calls/" + data[projectId]?.projectName }
            />
            <HomePageTitle
                title={ data[projectId]?.projectName }
                tagline="Convocatoras a proyectos"
            />
            <div className="dark-bg pt-20 pb-20">
            </div>
            {
                data[projectId].currentCalls.map(call => {
                    return (
                        <CallToAction 
                            id={call.id}
                            style={call.id%2 === 0? "dark":"default"}
                            title={call.title}
                            url={call.urlId}
                            label={call.label}
                            logo={`${process.env.NEXT_PUBLIC_SRC_IMAGES}/logos/${call.logo}`}
                        />
                    )
                })
            }
        </>
    );
}