import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = (props) => {
  return (
    <TouchableOpacity 
        style={{...styles.ButtonContainer, ...props.containerStyle}}
        activeOpacity={0.8}>
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
        paddingVertical: 8,
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default CustomButton;
