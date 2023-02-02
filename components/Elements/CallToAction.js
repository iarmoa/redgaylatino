import React from 'react';
import Image from 'next/image';

export default function CallToAction({ title, url, logo, style ="default", label }){

    return (
        <section className={ `pt-50 pb-50 ${style}-bg` }>
            <div className="container">
                <div className="row">
                    <div className='col-md-5'>
                        <div className="cta-heading-left">
                            <p className='subtitle mt-20'>Puesto</p>
                            <h3>{title}</h3>
                        </div>
                    </div>
                    <div className='col-md-6 col-md-offset-1'>
                        <div className='cta-heading-right'>
                            <p className="mt-20 content-text">T&eacute;rminos de Referencia</p>
                            <p className="content-text">{label}</p>
                            <div className='mt-10'>
                                <Image src={logo} alt="" layout='intrinsic' height={58} width={100}/>
                            </div>
                            <a className={ "btn btn-rounded btn-white mt-10"} href={url} target="_blank">
                                Abrir documento
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}