import React from 'react';
import ProgressBar from '../Elements/ProgressBar';

export default function FormActions({ page = 0, setPage, agree = false, data, onSubmit, isLoading }){
    return (
        <>
            <div className='col-md-1 mr-20'>
                <button className="btn btn-color btn-sm btn-circle" onClick={() => setPage(page - 1)} disabled={!agree || page === 0}>
                    Anterior
                </button>
            </div>
            <div className='col-md-2'>
                <ProgressBar percentage={Math.ceil((page + 1)*100)/4} labelClass='contact-form' />
            </div>
            <div className='col-md-1 mr-20'>
                <button className="btn btn-color btn-sm btn-circle" onClick={() => setPage(page + 1)} disabled={!agree || page === 3}>
                    Siguiente
                </button>
            </div>
            <div className='col-md-1 col-md-offset-6'>
                <button className="btn btn-color btn-sm btn-circle" onClick={(e) =>onSubmit(e)} disabled={!(agree && data.email && data.name && page === 3 && !isLoading)}>
                    { isLoading? 'Enviando solicitud' : 'Enviar' }
                </button>
            </div>
        </>
    )
}