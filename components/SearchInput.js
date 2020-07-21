import React, {useRef} from 'react';
import {TouchableWithoutFeedback, View, TextInput, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchInput = (props) => {
    const textInput = useRef();

    return (
        <TouchableOpacity 
            activeOpacity={0.6}
            onPress={() => {textInput.current.focus()}}>
            <View style={styles.inputContainer}>
                <Ionicons name='md-search' size={28} color='#525659' />
                <TextInput 
                    ref={textInput}
                    style={styles.input}
                    placeholder='Search for Recipes'
                    placeholderTextColor='#6a6c76'
                    inlineImageLeft='search_icon' />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#c1cefe',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 10,
        elevation: 4
    },
    input: {
        height: 48,
        fontSize: 18,
        paddingLeft: 10
    }
});

export default SearchInput;