import React from 'react';
import BlogContent from '../../../components/Blog/BlogContent';
import MetaData from '../../../components/Elements/MetaData';
import data from '../../../data/meets-data.json';
import { useRouter } from 'next/router'

export default function Meet(){
    const lang = 'es';
    const router = useRouter();
    const { id } = router.query;
    const post = data.find(d => d.tempId === id);
    if(!post){
        return (
            <>error</>
        )
    }
    const urlId = post.urlId[0];
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
                    </div>
                        { post && <BlogContent post={post} lang={lang} type="meets"/> }
                </div>
            </div>
        </section>   
    );

}