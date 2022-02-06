import './NftDesign.css'

export default (props) => {
    const img = props.img
    return (
        <div className='NftDesign'>
            <img src={img} alt="Nft design" />
        </div>
    )
}