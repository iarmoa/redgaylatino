import React from 'react';
import { useRouter } from 'next/router'
import BlogContent from '../../../components/Blog/BlogContent';
import MetaData from '../../../components/Elements/MetaData';
import data from '../../../data/campaign-data.json';

export default function News({params}){
    const router = useRouter();
    const { campaign } = router.query;
    const post = data.posts[0];
    const lang = "es";
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-md-offset-1">
                        <MetaData
                            title = { post.title[lang] }
                            description= { post.excerpt[lang] }
                            url= {campaign + '/' + post.url[lang]}
                            alternative= { post.title[lang] }
                            image={ process.env.NEXT_PUBLIC_SRC_IMAGES + post.image }
                        />
                        <BlogContent post={post} type="news" lang={lang} />
                    </div>
                </div>
            </div>
        </section>
    )
}