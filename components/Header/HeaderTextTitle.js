import React from "react";

const HeaderTextTitle = ({ title, tagline, children, classNameStyles="" }) => {
    return(
        <section className={classNameStyles}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 section-heading ">
                        <h2>{title}</h2>
                        <h4 className={"text-uppercase "}>{ tagline }</h4>
                        <p className="mt-30">
                            { children }
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeaderTextTitle;