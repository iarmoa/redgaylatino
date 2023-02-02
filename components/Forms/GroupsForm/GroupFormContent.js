import React from 'react';
import { questions } from '../../../lib/contactForumConstants';
import { TextInput, CalendarInput, NumberInput, EmailInput, RadioButton, CheckBox, TextArea } from '../../Elements/Forms';

const CriteriaPage =  () =>  {
    return (
        <div className="col-md-12 terms">
            <h5>Por favor, lee detenidamente los criterios de selección e incorporación de nuevos miembros descriptos en los Estatutos Civiles.</h5>
            <p>Los Grupos de Referencia son responsables de aportar enfoques específicos sobre temas transversales como juventudes, género, salud sexual, intervenciones comunitarias, comunicación, cultura, participación política y otros temas.</p>
            <p>Un Grupo de Referencia se conforma con miembros del Foro Regional; son convocados por el Secretariado de manera esporádica y de acuerdo a la vinculación temática que se requiera. Si te interesa participar de un Grupo de Referencia actual o quieres proponer la creación de uno, puedes dejar tus datos e información en este formulario.</p>
            <p>Esperamos poder contactarte pronto y seguir trabajando juntos movilizando a nuestras comunidades.</p>
        </div>
    )
}

const PersonalInformation = ({ data, onTextBoxChange, onCalendarChange, startDate }) => {
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
                    <TextInput name="phone" value={data.phone} onChange={ (e) => onTextBoxChange(e) } label={questions['phone']} tip={"Incluye tu codigo del pais"} />
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

const Experience = ({data, onOptionChange, onOptionChecked, onTextBoxChange}) => {
    const options = ['Si', 'No', 'No, pero estoy interesado'];
    const checkboxOptions = [
        "Diversidad cultural e interseccionalidad",
        "Temas de jóvenes gays",
        "Jóvenes gays y hombres que viven abiertamente con VIH",
        "Jóvenes gays y hombres que se identifican como trabajadores sexuales",
        "Prevención combinada de VIH y otras ITS",
        "Investigación y generación de conocimiento",
        "Representación en foros y otros espacios de formación y diálogo",
    ];
    const checkboxGroupTypes = [
        "Grupo de Referencia de Juventudes",
        "Grupo de Referencia en Prevención Combinada"
    ];
    const englishLevel = [
        "No hablo",
        "Basico",
        "Intermedio",
        "Avanzado"
    ]
    
    return (
        <div className="col-md-12 terms">
            <h5>Experiencia e inter&eacute;s</h5>
            <div className="row">
                <div className='col-md-12'>
                    <CheckBox 
                        name={"experienceOptions"}
                        label={questions['experienceOptions']} 
                        tip={"Selecciona todas las que consideres relevante para tu aplicación."}
                        value={data.experienceOptions?.answer}
                        options={checkboxOptions}
                        onChange={ (e) => onOptionChecked(e, "experienceOptions", "Experiencia que puedes contribuir a la red")}
                    />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <RadioButton 
                        label={questions['actualGroup']}
                        options={options}
                        name="actualGroup"
                        onChange={(e) => onOptionChange(e, "actualGroup")}
                    />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <TextInput 
                        name={"actualGroupName"}
                        label={questions['actualGroupName']}
                        value={data.actualGroupName} onChange={ (e) => onTextBoxChange(e) }
                    />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <CheckBox 
                        name={"referenceGroup"}
                        label={questions['referenceGroup']} 
                        value={data.referenceGroup?.answer}
                        options={checkboxGroupTypes}
                        onChange={ (e) => onOptionChecked(e, "referenceGroup", "¿A qué Grupo de Referencia existente deseas unirte?")}
                    />
                </div>
            </div>
            <div className="row">
                <div className='col-md-6'>
                    <NumberInput 
                        name="workingHours"
                        label={questions['workingHours']} 
                        value={data.hours} onChange={ (e) => onTextBoxChange(e) }
                    />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <RadioButton 
                        label={questions['englishLevel']}
                        options={englishLevel}
                        name="englishLevel"
                        onChange={(e) => onOptionChange(e, "englishLevel")}
                    />
                </div>
            </div>
        </div>
    )
}

const Group = ({data, onTextBoxChange, onOptionChange}) => {
    const options = ['Si', 'No', 'No, pero estoy interesado'];
    return (
        <div className="col-md-12 terms">
            <h5>Propuesta de grupo de referencia</h5>
            <div className="row">
                <div className='col-md-12'>
                    <TextInput 
                        name={"groupName"}
                        label={questions['groupName']}
                        value={data.groupName} onChange={ (e) => onTextBoxChange(e) }
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <TextArea
                        name={"description"}
                        label={questions['description']} 
                        value={data.description} onChange={ (e) => onTextBoxChange(e) }
                    />
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <RadioButton 
                        label={questions['lidership']}
                        options={options}
                        name="lidership"
                        onChange={(e) => onOptionChange(e, "lidership")}
                    />
                </div>
            </div> 
            <div className="row">
                <div className='col-md-12'>
                    <RadioButton 
                        label={questions['commitment']}
                        options={options}
                        name="commitment"
                        onChange={(e) => onOptionChange(e, "commitment")}
                    />
                </div>
            </div>  
            <div className='row'>
                <div className='col-md-12'>
                    <TextArea
                        name={"additionalInformation"}
                        label={questions['additionalInformation']} 
                        value={data.additionalInformation} onChange={ (e) => onTextBoxChange(e) }
                    />
                </div>
            </div>       
        </div>
    )
}

export default function GroupFormContent({ data, page, onTextBoxChange, onCalendarChange, startDate, onOptionChange, onOptionChecked}){
    
    switch(page){
        case 0:
            return <CriteriaPage />
        case 1: 
            return <PersonalInformation 
                        data={data} 
                        onTextBoxChange={onTextBoxChange} 
                        onCalendarChange={onCalendarChange}
                        startDate={startDate} 
                    />
        case 2:
            return <ContactInformation 
                        data={data}
                        onTextBoxChange={onTextBoxChange}
                    />
        case 3:
            return  <Experience
                        data={data}
                        onTextBoxChange={onTextBoxChange}
                        onOptionChecked={onOptionChecked}
                        onOptionChange={onOptionChange}
                    />
        case 4:
            return <Group
                        data={data}
                        onTextBoxChange={onTextBoxChange}
                        onOptionChange={onOptionChange}
                    />
        default:
            return <CriteriaPage />
    }
}