import React from 'react';

export default function LeftTextSection({ title, image = '/images/publicacion.png', children }){
    return (
        <section className='white-bg'>
            <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
                <div
                    className="bg-flex-holder bg-flex-cover"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            </div>
            <div className="container">
                <div className="col-md-5 col-sm-7">
                    <h2 className="font-700">{title}</h2>
                    { children }
                </div>
            </div>
        </section>
    );
}