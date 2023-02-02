import React from 'react';
import BlogGrid from '../../../components/Blog/BlogGrid';
import MetaData from '../../../components/Elements/MetaData';
import data from "../../../data/meets-data.json";

export default function Meets(){
    return(
        <section className="with-bg">
            <MetaData
                title = "GayLatino - Encuentros"
                description= "Promovemos y defendemos la libertad, la igualdad, el acceso a salud integral, justicia y educación; para el pleno ejercicio de los derechos humanos de los hombres gays latinos en la región y en todo el mundo."
                url=""
            />
            <BlogGrid posts={data} prefix="institution/meets" language="es" />
        </section>
    );
}