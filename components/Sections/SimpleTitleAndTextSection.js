import React from 'react';

export default function SimpleTitleAndTextSection({ children }){
    return (
        <section className='with-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 terms">
                        { children }
                    </div>
                </div>
            </div>
        </section>
    )
}