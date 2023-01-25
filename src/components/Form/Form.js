import './Form.css'
import TextField from '../TextField';
import  List  from '../List';
import { Button } from '../Button/Button'
import { useState } from 'react';

export const Form = (props) => {

    const [nameValue, setNameValue] = useState('');
    const [positionValue, setPositionValue] = useState('');
    const [imageValue, setImageValue] = useState('');
    const [teamValue, setTeamValue] = useState('');


    const onSave = (e) => {
        e.preventDefault();
        props.onCreateCard({
            nameValue,
            positionValue,
            imageValue,
            teamValue
        });
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>Preencha seus dados para criar o card</h2>
                <TextField 
                    required 
                    label="Nome"
                    value={nameValue}
                    onChange={value => setNameValue(value)}
                />
                <TextField 
                    label="Cargo"
                    value={positionValue}
                    onChange={value => setPositionValue(value)}
                />
                <TextField 
                    label="Imagem"
                    value={imageValue}
                    onChange={value => setImageValue(value)}
                />
                <List 
                    items={props.teams} 
                    label="Time"
                    value={teamValue}
                    onChange={value => setTeamValue(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}