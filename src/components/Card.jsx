import './Card.css'

import Container from './Container'

export default (props) => {
    return (
        <div className="Card">
            <Container>
                {props.children}
            </Container>
        </div>
    )
}