import React, { useState } from "react";
import BlogGrid from '../Blog/BlogGrid';
import HeadingSection from './HeadingSection';
import FsLightbox from "fslightbox-react";
import Icon from "../Elements/Icon";

export default function CurrentCampaign({ campaign, posts, lang }){
    
    const [toggler, setToggler] = useState(false);

    const handleToggler = () => {
        setToggler(!toggler);
      };

    return (
        <>
            { campaign.video &&
                <FsLightbox
                    toggler={toggler}
                    sources={[campaign.video]}
                />
            }
            <div className="dark-bg pt-80 pb-80">
                <HeadingSection title={campaign.title[lang]} tagline="¿En qué estamos trabajando?">
                    <div dangerouslySetInnerHTML={{ __html: campaign.description[lang] }} />
                    {   campaign.document &&
                        <button className="btn btn-color btn-circle mt-20 mr-20">
                            Descargar el documento
                        </button>
                    }
                    { campaign.video &&
                        <button
                            href="!#"
                            className="btn btn-color btn-circle popup-youtube mt-20"
                            onClick={handleToggler}
                            >
                            Ver video
                            <span className="icon">
                                <Icon className="ui-play" icon="ui-play" />
                            </span>
                        </button>
                    }
                </HeadingSection>
            </div>
            <div className="with-bg">
                <div className="container">
                    <div className="row mt-50">
                        <h3 className="ml-10 mb-20">Noticias relacionadas</h3>
                        <BlogGrid posts={posts} prefix={"campaigns/" + campaign.url[lang] } language={lang} />
                    </div>
                </div>
            </div>
        </>
        
    )
}