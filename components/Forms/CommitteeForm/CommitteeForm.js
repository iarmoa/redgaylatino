import React from 'react';
import SubmitedMessage from '../SubmitedMesssage';


const CriteriaPage =  () =>  {
    return (
        <div className="col-md-12 terms">
            <p>Los comités locales forman parte del foro regional y está conformado por activistas de un mismo país o territorio, interesados en los fines de la red, asociados al foro regional y refrendados por la sub región en la que se hallen ubicados.</p>
            <p>Los comités locales son coordinados por los delegados de la red en cada país. Para contactar con el delegado GayLatino de tu país puedes ver la lista completa <a href="https://www.redgaylatino.org/countries">aquí</a></p>
        </div>
    )
}

export default function CommitteeForm(){

    if(submited){
        return <SubmitedMessage />
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <ForumFormContent 
                        page={page} 
                        agree={agree} 
                        setAgree={setAgree}
                        data={data}
                        startDate={startDate}
                        onTextBoxChange={onTextBoxChange}
                        onCalendarChange={onCalendarChange}
                        onOptionChange={onOptionChange}
                        onOptionChecked={onOptionChecked}       
                    />
                </div>
                <div className='row mt-20 ml-10 mb-10'>
                    <small>Los campos nombre y email son obligatorios (*)</small>
                </div>
                <div className="row">
                    <FormActions 
                        page={page} 
                        setPage={setPage} 
                        agree={agree} 
                        data={data}
                        onSubmit={onSubmit}
                        isLoading={isLoading}
                    />
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <ReCAPTCHA
                            ref={captchaRef}
                            size="invisible"
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={onReCAPTCHAChange}
                        />
                    </div>
                </div>                
            </div>
        </section>
    )
}