import './List.css'

export const List = (props) => {

    const onChange = (e) => {
        props.onChange(e.target.value)
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.value} onChange={onChange}>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}