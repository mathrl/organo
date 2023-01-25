import { useState } from 'react';
import './TextField.css'

const TextField = (props) => {

    const [value, setValue] = useState('');


    const onType = (e) => {
        props.onChange(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.required} placeholder={`Digite o seu ${props.label.toLowerCase()}`} />
        </div>
    )
}

export default TextField;