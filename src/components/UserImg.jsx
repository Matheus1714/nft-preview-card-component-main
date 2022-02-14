import './UserImg.css'

export default (props) => {
    const img = props.img
    return (
        <div className='UserImg'>
            <img src={img} alt="User profile" />
        </div>
    )
}