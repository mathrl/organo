import './Button.css'

export const Button = (props) => {
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
}