import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const CustomIcon = (props) => {
    return (
        <View style={styles.iconContainer}>
            <Image source={props.source} />
        </View>
    );
}

const styles = StyleSheet.create({
    iconContainer: {

    },
    image: {

    }
});

export default CustomIcon;