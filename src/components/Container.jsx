import './Container.css'

export default (props) => {
    return (
        <div className="Container">
            {props.children}
        </div>
    )
}