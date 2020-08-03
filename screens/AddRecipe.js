import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

// components
import CustomButton from '../components/CustomButton';

const AddRecipe = (props) => {
    return (
        <View style={styles.addRecipeScreen}>
            <TextInput 
                style={styles.textInputStyle}
                placeholder="Recipe Name"
                placeholderTextColor="#999" />
                <TextInput 
                    style={styles.textInputStyle}
                    placeholder="Recipe Description"
                    placeholderTextColor="#999" />
            <View style={styles.rowContainer}>
                <TextInput 
                    style={styles.rowTextInputStyle}
                    placeholder="Recipe Duration"
                    placeholderTextColor="#999" />
                <TextInput 
                    style={styles.rowTextInputStyle}
                    placeholder="Recipe Difficulty"
                    placeholderTextColor="#999" />
            </View>
            {/* Put a divider here */}
            <View style={styles.horizontalDivider} />
            <View style={styles.rowContainer}>
                <TextInput 
                    style={styles.ingredientTextInputStyle}
                    placeholder="Ingredients to add"
                    placeholderTextColor="#999" />
                <TextInput 
                    style={styles.rowTextInputStyle}
                    placeholder="Qty"
                    placeholderTextColor="#999" />
            </View>
            <View style={styles.addIngredientButtonContainer}>
                <CustomButton 
                    title="Add Ingredient"
                    color="#624cab" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    addRecipeScreen: {
        backgroundColor: '#fff',
        paddingTop: 20,
        flex: 1
    },
    textInputStyle: {
        backgroundColor: '#ededed',
        paddingVertical: 10,
        fontSize: 18,
        borderRadius: 4,
        margin: 10,
        paddingLeft: 10
    },
    rowTextInputStyle: {
        backgroundColor: '#ededed',
        paddingVertical: 10,
        fontSize: 18,
        borderRadius: 4,
        margin: 10,
        paddingLeft: 10, 
        flex: 1
    },
    ingredientTextInputStyle: {
        backgroundColor: '#ededed',
        paddingVertical: 10,
        fontSize: 18,
        borderRadius: 4,
        margin: 10,
        paddingLeft: 10, 
        flex: 3
    },
    rowContainer: {
        flexDirection: 'row'
    },
    horizontalDivider: {
        borderColor: '#eee',
        borderTopWidth: 1,
        marginHorizontal: 10
    },
    addIngredientButtonContainer: {
        width: '50%',
        height: 50,
        alignSelf: 'center'
    }
});

export default AddRecipe;