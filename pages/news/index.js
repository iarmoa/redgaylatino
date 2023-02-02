import React from 'react';
import BlogGrid from '../../components/Blog/BlogGrid';
import MetaData from '../../components/Elements/MetaData';

export async function getServerSideProps(){
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}/news`);
    const postList = await data.json();

    if(!postList){
        return {
            notFound: true
        }
    }

    return {
        props: {
            posts: postList.news
        }
    }
}

export default function news({posts}){

    return (
        <section className="with-bg">
            <MetaData
                title = "GayLatino - Noticias"
                description= "Promovemos y defendemos la libertad, la igualdad, el acceso a salud integral, justicia y educación; para el pleno ejercicio de los derechos humanos de los hombres gays latinos en la región y en todo el mundo."
                url=""
            />
            <BlogGrid posts={posts} prefix="news" language="es" />
        </section>
    )
}