import React from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';


const FloatingButton = (props) => {
    return (
        <View style={{...styles.container, ...props.containerStyle}}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(props.rippleColor)}
                onPress={props.onPress}>
                    <View style={{...styles.button, ...props.buttonStyle, backgroundColor: props.color}}>
                        <Text style={{...styles.text, ...props.textStyle}}>{props.title}</Text>
                    </View>
            </TouchableNativeFeedback>
        </View>
    )
};

FloatingButton.propTypes = {
    title: PropTypes.string.isRequired,
    containerStyle: PropTypes.object,
    textStyle: PropTypes.object,
    buttonStyle: PropTypes.object,
    rippleColor: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func
};

FloatingButton.defaultProps = {
    title: '+',
    rippleColor: '#000',
    color: '#aaa'
};

const styles = StyleSheet.create({
    container: {
        width: 80, 
        height: 80, 
        borderRadius: 50, 
        overflow: 'hidden',
        elevation: 3
    },
    button: {
        width: 80, 
        height: 80, 
        alignItems:'center', 
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 36
    }
});

export default FloatingButton;