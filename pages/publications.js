import React from 'react';
import BlogGrid from '../components/Blog/BlogGrid';
import MetaData from '../components/Elements/MetaData';

export async function getServerSideProps(){
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}/publications`);
    const postList = await data.json();

    if(!postList){
        return {
            notFound: true
        }
    }

    return {
        props: {
            posts: postList.publications
        }
    }
}

export default function Publications({ posts }){

    return (
        <section className="with-bg">
            <MetaData
                title = "GayLatino - Publicaciones"
                description= "Promovemos y defendemos la libertad, la igualdad, el acceso a salud integral, justicia y educación; para el pleno ejercicio de los derechos humanos de los hombres gays latinos en la región y en todo el mundo."
                url=""
            />
            <BlogGrid posts={posts} language={"es"} />
        </section>
    )
}