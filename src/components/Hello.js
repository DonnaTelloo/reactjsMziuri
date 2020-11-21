import React, { Component } from 'react';

// stateless component - functional component
export function Anastasia(props) {
    return(
        <React.Fragment>
            ანასტასია არის { props.age } და ანასტასიას { props.hasBrother ? "ჰყავს" : "არ ჰყავს" } ძმა
        </React.Fragment>
    )
}

// props
// ({ ...props > age })
export function Giorgi({ fatherName }) {
    return(
        <React.Fragment>
            გიორგის მამის სახელი არის { fatherName }
        </React.Fragment>
    )
}

export function Levan(props) {
    const { age, hasCar } = props;
    return <>Levan is {age} years old. Levan is { props.isStudent ? "Student" : "not Student" }</>
}

// statefull component - class component
class Anano extends Component {
    constructor(){
        super()
    }

    render() {
        return <React.Fragment>{this.props.children}</React.Fragment>
    }
}

export default Anano;