import './Card.css'

const Card = (props) => {
    return  (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={props.image}/>
            </div>
            <div className='rodape'>
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    )
}

export default Card;