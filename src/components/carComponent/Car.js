import React, { Component, setState } from 'react';
import nissanImage from '../../assets/images/nissan_skyline_r34.png';
import './car.css'

export default class Car extends Component {
    constructor(){
        super()

        this.state = {
            brand: "",
            model: "",
            year: "",
            owerName: "DonnaTelloo"
        }
    }

    componentDidMount(){
        this.setState((state, props) => ({
            brand: props.brand,
            model: props.model,
            year: props.year
        }))
    }

    changeName = (newOwnerName) => {
        console.log(newOwnerName);
        this.setState((state) => ({
            owerName: "saba"
        }), () => console.log(this.state))
    }

    render() {
        return (
            <>
                <div className="carTemplate">
                    <div className="carInformation">
                        <span>{this.props.brand}</span>
                        <span>{this.props.model}</span>
                        <span>{this.state.owerName}</span>
                        <button onClick={() => this.changeName("saba")}>Change Owner Name</button>
                    </div>
                    <img src={nissanImage} />
                </div>
            </>
        )
    }
}
