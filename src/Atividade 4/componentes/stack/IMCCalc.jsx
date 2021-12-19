import React from "react";
import{View,Text} from 'react-native';
import MensagemIMC from "./IMCMesssage";


const IMCCalc = (props) => {

    const imc = props.peso / (props.altura * props.altura)
    
    if (props.altura != null && props.peso != null)
        return (
            <View>
                <Text style={{fontSize:34, fontWeight:"bold"}}>
                    IMC:{imc}
                </Text>

                <MensagemIMC IMC={imc}/>
            </View>
        )
    return null
}

export default IMCCalc;