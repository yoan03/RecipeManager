import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = (props) => {
  return (
    <TouchableOpacity 
        style={{...styles.ButtonContainer, ...props.containerStyle}}
        activeOpacity={0.8}
        onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    ButtonContainer: {
        backgroundColor: '#624cab',
        borderRadius: 4,
        elevation: 4
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 12,
        fontSize: 18
    }
});

export default CustomButton;
