import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const TextInput = ({ label, onChange, name, required = false, placeholder, errorMessage, value, tip }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}{ required && <span style={{marginLeft: '10px'}}>*</span>}
                <br />
                <small>{tip}</small>  
            </label>
            <input
                type="text"
                name={name}
                className="form-control"
                id={name}
                required={required}
                placeholder= {placeholder}
                data-error= {errorMessage}
                value={value}
                onChange={onChange}
                autoComplete="off"
            />
            <div className="help-block with-errors mt-20"></div>
        </div>
    );
}

const CalendarInput = ({ label, onChange, name, required = false, placeholder, errorMessage, value, tip }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}        
                <br /> 
                <small>{tip}</small>  
            </label>
            <DatePicker
                name={name}
                className="form-control"
                id={name}
                required={required}
                placeholder= {placeholder}
                data-error= {errorMessage}
                selected={value}
                onChange={onChange}
            />
            <div className="help-block with-errors mt-20"></div>
        </div>
    );
} 

const NumberInput = ({ label, onChange, name, required = false, placeholder, errorMessage, value, tip }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}                
                <br /> 
                <small>{tip}</small>  
            </label>
            <input
                type="number"
                name={name}
                className="form-control"
                id={name}
                required={required}
                placeholder= {placeholder}
                data-error= {errorMessage}
                value={value}
                onChange={onChange}
                min="1"
                step="1"
            />
            <div className="help-block with-errors mt-20"></div>
        </div>
    );
}

const EmailInput = ({ label, onChange, name, required = false, placeholder, errorMessage, value, tip }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}{ required && <span style={{marginLeft: '10px'}}>*</span>}
                <br />
                <small>{tip}</small>
            </label>
            <input
                type="email"
                name={name}
                className="form-control"
                id={name}
                required={required}
                placeholder= {placeholder}
                data-error= {errorMessage}
                value={value}
                onChange={onChange}
                autoComplete="off"
            />
            <div className="help-block with-errors mt-20"></div>
        </div>
    );
}

const RadioButton = ({ label, tip, value, name, options = [], onChange }) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>
                {label}
                <br />
                <small>{tip}</small>
            </label>
            {   options.map( option => {
                    return (
                        <div className="mt-10">
                            <input type="radio" name={name} value={option} onChange={() => onChange(option)} />
                            <label class="checkbox-inline">
                                {option}
                            </label>
                        </div>
                    )
                })
            }
            <div className="help-block with-errors mt-20"></div>
        </div>
    );
}

const CheckBox = ({ name, tip, label, options = [], onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
                <br />
                <small>{tip}</small>
            </label>
            {   options.map( option => {
                    return (
                        <div class="checkbox mb-30">
                            <label>
                                <input type="checkbox" value={option} onChange={onChange} />
                                <span className='checkbox-label'> {option}</span>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}

const TextArea = ({ label, onChange, name, required = false, errorMessage, value, tip }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}  
            </label>
            <textarea
                className="form-control"
                required= {required}
                name= {name}
                placeholder={tip}
                data-error= {errorMessage}
                value= {value}
                onChange={onChange}
            >
            </textarea>
            <div className="help-block with-errors mt-20"></div>
        </div>
    );
}

const FileInput = ({ label, onChange, name, required = false, placeholder, errorMessage, value, tip }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
                <br />
                <small>{tip}</small>  
            </label>
            <input
                type="file"
                name={name}
                className="form-control"
                id={name}
                value={value}
                onChange={onChange}
                accept=".doc,.docx,.pdf, .odt"
            />
            <div className="help-block with-errors mt-20"></div>
        </div>
    );
}



export { TextInput, CalendarInput, NumberInput, EmailInput, RadioButton, CheckBox, TextArea, FileInput }