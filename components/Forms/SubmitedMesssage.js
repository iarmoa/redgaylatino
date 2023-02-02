import React from 'react';
import Icon from '../Elements/Icon';

export default function SubmitedMessage(){
    return (
        <section>
            <div className="container">
                <div className="row">
                <div className="col-md-12 feature-box text-center col-sm-6">
                    <Icon
                        icon={"icofont-letterbox"}
                        className={"font-40px circle-icon fade-icon icofont-letterbox"}
                    />
                    <h4>Gracias por enviarnos tu informaci&oacute;n :)</h4>
                    <p>Ya hemos recibido tus datos y nos pondremos en contacto tan pronto como podamos.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}