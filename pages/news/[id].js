import React from 'react';
import BlogContent from '../../components/Blog/BlogContent';
import MetaData from '../../components/Elements/MetaData';

export async function getServerSideProps({ params }){
    try{
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}/news/${params.id}`);
        const post = await data.json();

        if(post.length === 0){
            const dataById = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}/news/view/${params.id}`);
            const postById = await dataById.json();

            if(!postById){
                return {
                    notFound: true
                }    
            }

            post.push(postById);
        }

        return {
            props: {
                post: post[0],
                urlId: params.id
            }
        }
    }catch(error){
        return {
            notFound: true
        }    
    }
}

export default function News({ post, urlId }){
    const lang = 'es';
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-md-offset-1">
                        <MetaData
                            title = { post.title[lang] }
                            description= { post.excerpt[lang] }
                            url= { 'news/' + urlId }
                            alternative= { post.title[lang] }
                            image={ process.env.NEXT_PUBLIC_SRC_IMAGES + post.image }
                        />
                        <BlogContent post={post} lang={lang} type="news"/>
                    </div>
                </div>
            </div>
        </section>   
    );

}