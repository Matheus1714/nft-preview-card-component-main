import './NftInfo.css'

import UserImg from './UserImg'
import DivisionLine from './DivisionLine'

export default (props) => {
    const title = props.title
    const serie = props.serie
    const description = props.description
    const cryptoValue = props.cryptoValue
    const typeMoney = props.typeMoney
    const datePost = props.datePost
    const userImg = props.userImg
    const userName = props.userName

    return (
        <div className='NftInfo'>
            <h1>{title} #{serie}</h1>
            <p>{description}</p>
            <p>{cryptoValue} {typeMoney}</p>
            <p>{datePost} days left</p>

            <DivisionLine />

            
            <UserImg img={userImg} />
            <p>Creation of {userName}</p>
        </div>
    )
}