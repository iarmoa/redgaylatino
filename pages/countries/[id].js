import React, { useState } from 'react';
import Map from '../../components/Map/Map';
import MetaData from '../../components/Elements/MetaData';
import countries from "../../data/country-data.json"
export async function getServerSideProps({ params }){
    return {
        props: {
            countryId: params.id
        }
    }
}

export default function Countries({ countryId = "argentina"}){
    const [ country, setCountry ] = useState(countryId);

    return (
        <>
            <MetaData
                title = { "GayLatino - Paises" }
                description= { "Lista de paises pertenecientes a la red" }
                url="/countries"
            />
            <section className="clearfix pt-100 pb-100 relative">
                <div className='col-md-6'>
                    <Map country={country} setCountry={setCountry} countryData={countries} />
                </div>
                <div className='col-md-5 white-bg pr-40 pl-40 pt-40 pb-40'>
                    <h2 className='mt-10 text-uppercase font-700'>
                        { countries[country].title }
                    </h2>
                    <div dangerouslySetInnerHTML={ { __html:countries[country].content} } />
                </div>
            </section>
        </>
    )
}