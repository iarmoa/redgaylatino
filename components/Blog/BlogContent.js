import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon,
    WhatsappIcon,
    WhatsappShareButton
} from 'react-share';
import Image from 'next/image';

export default function BlogContent({ post, prefix, lang }){
    
    const url = prefix + '/' + post.url[lang];
    const filler = require("/public/images/publicacion.png");
    const imageURL = post.image? process.env.NEXT_PUBLIC_SRC_IMAGES + post.id + '/' + post.image : filler;

    return (
        <div className="post">
            <div className="post-img">
                <Image
                    key={post.id}
                    className="img-responsive"
                    src={imageURL}
                    layout="responsive"
                    width={1000}
                    height={520}
                    fallbacksrc={filler}
                />
            </div>
            <div className="post-info">
                <h3>
                    <a href="blog-grid.html"> { post.title[lang] }</a>
                </h3>
                <h6>{ post.published }</h6>
                <p>{ post.excerpt[lang] }</p>
            </div>
            <div className="blog-standard">
                <div  className="text-right mb-20">
                    <FacebookShareButton className="mr-10" url={url} >
                        <FacebookIcon  size={30} round={true}/>
                    </FacebookShareButton>
                    <TwitterShareButton className="mr-10" url={url} >
                        <TwitterIcon  size={30} round={true}/>
                    </TwitterShareButton>
                    <TelegramShareButton className="mr-10" url={url} >
                        <TelegramIcon  size={30} round={true}/>
                    </TelegramShareButton>
                    <WhatsappShareButton className="mr-10" url={url} >
                        <WhatsappIcon  size={30} round={true}/>
                    </WhatsappShareButton>
                </div>
                <div className="body-content pl-10 pr-10" dangerouslySetInnerHTML={{ __html: post.body[lang] }} />
            </div>                                                      
        </div>
    )
}