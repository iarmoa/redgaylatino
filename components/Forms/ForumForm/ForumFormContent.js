import React from 'react';
import criterias from '../../../data/criteria-form-data.json';
import { questions } from '../../../lib/contactEmailConstants';
import { TextInput, CalendarInput, NumberInput, EmailInput, RadioButton, CheckBox, TextArea } from '../../Elements/Forms';

const CriteriaPage =  ({ setAgree, agree = false }) =>  {
    return (
        <div className="col-md-12 terms">
            <h5>Por favor, lee detenidamente los criterios de selección e incorporación de nuevos miembros descriptos en los Estatutos Civiles.</h5>
            {
                criterias.map( criteria => { 
                    return(
                        <>
                            <h2 className="font-700">{ criteria.title }</h2>
                            <div dangerouslySetInnerHTML={{ __html:criteria.body }} />
                        </>
                    );
                })
            }
            <div className='checkbox'>
                <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)}/>
                <label>He le&iacute;do los criterios y quiero ser parte de Gay Latino</label>
                </div>
        </div>
    )
}

const PersonalInformation = ({ data, startDate, onTextBoxChange, onCalendarChange }) => {
    return (
        <div className="col-md-12 terms">
            <h5>Informaci&oacute;n general</h5>
            <div className="row">
                <div className='col-md-5'>
                    <TextInput name="name" value={data.name} onChange={(e)=> onTextBoxChange(e) } label={questions['name']} required={true}/>
                </div>
                <div className='col-md-5 col-md-offset-1'>
                    <CalendarInput name="birthDate" value={startDate} onChange={ (e) => onCalendarChange(e, 'birthDate') } label={questions['birthDate']} />
                </div>
            </div>
            <div className="row">
                <div className='col-md-5'>
                    <TextInput name="sexualOrientation" value={data.sexualOrientation} onChange={ (e) => onTextBoxChange(e) } label={questions['sexualOrientation']} placeholder={"Gay/Lesbiana/Bisexual/Trans/Queer/Otros.."} />
                </div>
                <div className='col-md-2 col-md-offset-1'>
                    <NumberInput name="age" value={data.age} onChange={ (e) => onTextBoxChange(e) }  label={questions['age']}  />
                </div>
            </div> 
            <div className="row">
                <div className='col-md-5'>
                    <TextInput name="country" value={data.country} onChange={ (e) => onTextBoxChange(e) } label={questions['country']} />
                </div>
                <div className='col-md-5 col-md-offset-1'>
                    <TextInput name="city" value={data.city} onChange={ (e) => onTextBoxChange(e) }   label={questions['city']} />
                </div>
            </div>     
            <div className="row">
                <div className='col-md-5'>
                    <TextInput name="originCountry" value={data.originCountry} onChange={ (e) => onTextBoxChange(e) } label={questions['originCountry']} />
                </div>
            </div>      
        </div>
    )
}

const ContactInformation = ({ data, onTextBoxChange }) => {
    return (
        <div className="col-md-12 terms">
            <h5>Informaci&oacute;n de contacto</h5>
            <div className="row">
                <div className='col-md-5'>
                    <EmailInput name="email" value={data.email} onChange={ (e) => onTextBoxChange(e) } label={questions['email']} tip={"¿Cuál es el correo que usas regularmente?"} required={true} />
                </div>
                <div className='col-md-5 col-md-offset-1'>
                    <EmailInput name="secondaryEmail" value={data.secondaryEmail} onChange={ (e) => onTextBoxChange(e) } label={questions['secondaryEmail']} tip={"Sólo si cuentas con un correo alternativo. Esto no es obligatorio."}/>
                </div>
            </div>
            <div className="row">
                <div className='col-md-5'>
                    <TextInput name="phone" value={data.phone} onChange={ (e) => onTextBoxChange(e) } label={questions['phone']} tip={"Incluye tu codigo del pais"} />
                </div>
                <div className='col-md-5 col-md-offset-1'>
                    <TextInput name="whatsapp" value={data.whatsapp} onChange={ (e) => onTextBoxChange(e) } label={questions['whatsapp']} tip={"Si utilizas WhatsApp como medio de comunicación (si es distinto del anterior)"}/>
                </div>
            </div>
            <div className="row">
                <div className='col-md-5'>
                    <TextInput name="facebook" value={data.facebook} onChange={ (e) => onTextBoxChange(e) } label={questions['facebook']}  tip={"Dínos cómo encontrarte (enlace al perfil o nombre de usuario)"} />
                </div>
            </div>          
        </div>
    )
}

const GroupInformation = ({ data, onTextBoxChange, onOptionChange, onOptionChecked }) => {
    const options = ['Si', 'No', 'No, pero estoy interesado'];
    const optionsTwo = ['Si', 'No', 'Tal vez'];
    const checkboxOptions = [
        "Habilidades para elaboración, seguimiento y presentación de informes",
        "Habilidades en informática, manejo de correos electrónicos y redes sociales",
        "Experiencia en el campo de VIH, derechos humanos y/o temas LGBT",
        "Capacidad y dinamismo para trabajar con grupos diversos",
        "Posibilidad de trabajar de forma estratégica en grupos",
        "Habilidades de diplomacia y comodidad con hablar en público",
        "Experiencia demostrable en foros nacionales, regionales e internacionales"
    ]
    return (
        <div className="col-md-12 terms">
            <h5>Informaci&oacute;n general</h5>
            <div className="row">
                <div className='col-md-12'>
                    <RadioButton 
                        label={questions['localGroups']}
                        options={options}
                        name="localGroups"
                        onChange={(e) => onOptionChange(e, "localGroups")}
                    />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <TextInput 
                        name={"localGroupsName"}
                        label={questions['localGroupsName']}
                        tip={"Brevemente describe la modalidad en la que apoyas (ej. coordinador, apoyo logístico, vocero, etc) y cualquier información relevante para tu aplicación. Máx 300 caracteres."}
                        value={data.localGroupsName} onChange={ (e) => onTextBoxChange(e) }
                    />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <RadioButton 
                        label={questions['outsideGroups']} 
                        name="outsideGroups"
                        options={options}
                        onChange={(e) => onOptionChange(e, "outsideGroups")}
                    />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <TextInput 
                        name={"outsideGroupsName"}
                        label={questions['outsideGroupsName']} 
                        value={data.outsideGroupsName} onChange={ (e) => onTextBoxChange(e) }
                   />
                </div>
            </div>
            <div className="row">
                <div className='col-md-6'>
                    <RadioButton 
                        label={questions['workInForum']} 
                        name="workInForum"
                        tip="El trabajo de la red, de sus miembros y en los comités es predominantemente virtual."
                        options={optionsTwo}
                        onChange={(e) => onOptionChange(e, "workInForum")}
                    />
                </div>
            </div>
            <div className="row">
                <div className='col-md-6'>
                    <NumberInput 
                        name="workingHours"
                        label={questions['workingHours']} 
                        tip="El trabajo de la red, de sus miembros y en los comités es predominantemente virtual."
                        value={data.hours} onChange={ (e) => onTextBoxChange(e) }
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <CheckBox 
                        name={"skills"}
                        label={questions['skills']} 
                        tip={"Selecciona todas las que consideres relevante para tu aplicación."}
                        value={data.aptitudes?.answer}
                        options={checkboxOptions}
                        onChange={ (e) => onOptionChecked(e, "skills", "¿Qué habilidades y aptitudes crees poder aportar a nuestra red?")}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <TextArea
                        name={"additionalInformation"}
                        label={questions['additionalInformation']} 
                        tip="Por ejemplo, ¿qué te motiva a formar parte de nuestra red?"
                        value={data.extend} onChange={ (e) => onTextBoxChange(e) }
                    />
                </div>
            </div>
            { /* <div className='row'>
                <div className='col-md-12'>
                    <FileInput
                        name={"document"}
                        label="Documentos de Respaldo"
                        tip="1. Carta de interés, 2. Breve currículum del interesado (máximo 3 páginas, que refleje lo más posible el perfil), 3. Carta de apoyo de un miembro actual de la red GayLatino."
                    />
                </div>
                </div> */ } 
        </div>
    )
}

export default function ForumFormContent({ agree = false, page = 0 , startDate, setAgree, data, onTextBoxChange, onCalendarChange, onOptionChange, onOptionChecked }){

    switch (page) {
        case 0:
            return <CriteriaPage agree={agree} setAgree={setAgree} />
        case 1:
            return <PersonalInformation 
                        data={data} 
                        startDate={startDate} 
                        onTextBoxChange={onTextBoxChange} 
                        onCalendarChange={onCalendarChange}
                    />
        case 2:
            return <ContactInformation 
                        data={data}
                        onTextBoxChange={onTextBoxChange}
                    />
        case 3:
            return <GroupInformation 
                        data={data}
                        onTextBoxChange={onTextBoxChange}
                        onOptionChange={onOptionChange}
                        onOptionChecked={onOptionChecked}
                    />
        default:
            return <CriteriaPage agree={agree} setAgree={setAgree}/>
    }
}