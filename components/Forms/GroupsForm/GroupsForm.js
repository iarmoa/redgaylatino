import React, { useState } from 'react';
import SubmitedMessage from '../SubmitedMesssage';
import FormActions from '../FormActions';
import ReCAPTCHA from "react-google-recaptcha";
import GroupFormContent from './GroupFormContent';

export default function GroupsForm(){

    const [page, setPage] = useState(0);
    const [data, setData] = useState({ experienceOptions: [], skills: [], referenceGroup: []});
    const [isLoading, setLoading] = useState(false);
    const [submited, submit] = useState(false);    
    const [startDate, setStartDate] = useState(new Date());

    const captchaRef = React.createRef();

    const onReCAPTCHAChange = (captchaCode) => {
        if(!captchaCode) {
          return;
        }
        captchaRef.current.reset();
    }

    const onSubmit = async () => {
        setLoading(true);
        const captcha = await captchaRef.current.executeAsync();
        data['captcha'] = captcha;
        data['title'] = "Solicitud. Referente de grupo";
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status === 200) {
            submit(true);
        }
        setLoading(false);
    }

    const onTextBoxChange = (e) => {
        data[e.target.name] = e.target.value;
        setData(data);
    }

    const onOptionChange = (e, fieldName) => {
        data[fieldName] = e;
        setData(data);
    }

    const onOptionChecked = (e, fieldName) => {
        if(e.target.checked){
            data[fieldName].push(e.target.value);
        }else{
            for( var i = 0; i < data[fieldName].length; i++){ 
                                   
                if ( data[fieldName][i] === e.target.value) { 
                    data[fieldName].splice(i, 1); 
                    i--; 
                }
            }
        
        }
        setData(data);
    }

    const onCalendarChange = (e, fieldName) => {
        const dd = String(e.getDate()).padStart(2, '0');
        const mm = String(e.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = e.getFullYear();
        const fullDate = `${dd}-${mm}-${yyyy}`
        data[fieldName] = fullDate;
        setStartDate(e);
        setData(data);
    }
        
    if(submited){
        return <SubmitedMessage />
    }

    return (
        <section>
            <div className="container">
                <h2>Propuesta de Creación de un Grupo de Referencia para GayLatino</h2>
                <div className="row">
                    <GroupFormContent
                        data={data}
                        page={page}
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
                        agree={true} 
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