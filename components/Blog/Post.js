import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ReadMore from "./ReadMore";

export default function Post({post, prefix = '', language}){
    
    const url  = '/' + prefix + '/';
    const filler = require("/public/images/publicacion.png");
    const imageURL = post.image? process.env.NEXT_PUBLIC_SRC_IMAGES + post.id + '/' + post.image : filler
    const resumedExcerpt = post.excerpt[language].substring(0, 200)+ '...';
    return (
        <div className="post">
            <div className="post-img">
                <Image
                    key={post.id}
                    className="img-responsive"
                    src={imageURL}
                    layout="responsive"
                    width={840}
                    height={520}
                    fallbacksrc={filler}
                />
            </div>
            <div className="post-info">
                <h3>
                    <Link href={`${url + post.url[language]}`}>{post.title[language]}</Link>
                </h3>
                <h6>{post.published}</h6>
                <p>{resumedExcerpt}</p>
                <ReadMore url={post.file? post.file :url + post.url[language]} button={post.file}>
                {post.file? "Descargar":"Leer Más"}
                </ReadMore>
            </div>
        </div>
    )
}