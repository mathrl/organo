import Card from '../Card';
import './Team.css'

const Team = (props) => {
    return  (
        <section className='time' 
        style={{ backgroundColor:props.secondary_color }}>
            <h3 style={{ borderColor:props.primary_color }}>
                {props.name}
            </h3>
            <div className='colaboradores'>
                {
                    props.cards.map((card) => {
                        return (
                            <Card name={card.nameValue} 
                            position={card.positionValue} 
                            image={card.imageValue} 
                            team={card.teamValue} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Team;