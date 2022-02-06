import { Component } from "react"
import Footer from '../components/Footer'
import Card from '../components/Card'
import NftDesign from '../components/NftDesign'
import NftInfo from "../components/NftInfo"

import nftImg from '../assets/image-equilibrium.jpg'
import userImg from '../assets/image-avatar.png'


export default class NftCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="NftCard">
                <Card>
                    <NftDesign img={nftImg} />
                    <NftInfo
                        title = "Equilibrium"
                        serie = {3429}
                        description = "Our Equilibrium collection promotes balance and calm."
                        typeMoney = "ETH"
                        cryptoValue = {0.041}
                        datePost = {3}
                        userImg = {userImg}
                        userName = "Jules Wyvern"
                    />
                </Card>
                <Footer />
            </div>
        )
    }
}