import React from 'react';
import {ScrollView, View, Text, TextInput, TouchableOpacity, Image, ImageBackground, StyleSheet} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

// components
import CustomButton from '../components/CustomButton';

const AddRecipe = (props) => {
    return (
        <ScrollView style={styles.addRecipeScreen}>
            <View style={styles.addRecipeContainer}>     
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
                <View style={styles.ingredientsContainer}>
                    <View>
                        <Text style={styles.ingredientsContainerHeading}>Ingredients</Text>
                    </View>
                    <View style={styles.ingredientsListContainer}>
                        <View style={styles.ingredientListItem}>
                            <View>
                                <Text style={styles.ingredientListItemTitle}> • Rice - 1 Cup</Text>
                            </View>
                            <TouchableOpacity style={styles.ingredientListItemRemove}>
                                <FontAwesome5 
                                    name="trash-alt" 
                                    size={16} 
                                    color="red" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ingredientListItem}>
                            <View>
                                <Text style={styles.ingredientListItemTitle}> • Mixed Vegetable - 1/2 Cup</Text>
                            </View>
                            <TouchableOpacity style={styles.ingredientListItemRemove}>
                                <FontAwesome5 
                                    name="trash-alt" 
                                    size={16} 
                                    color="red" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ingredientListItem}>
                            <View>
                                <Text style={styles.ingredientListItemTitle}> • Salt 1 tsp</Text>
                            </View>
                            <TouchableOpacity style={styles.ingredientListItemRemove}>
                                <FontAwesome5 
                                    name="trash-alt" 
                                    size={16} 
                                    color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* Put a divider here */}
                <View style={styles.horizontalDivider} />
                <TextInput 
                        style={styles.textInputStyle}
                        placeholder="Step To Add"
                        placeholderTextColor="#999" />
                <View style={styles.addIngredientButtonContainer}>
                    <CustomButton 
                        title="Add Step"
                        color="#624cab" />
                </View>

                <View style={styles.ingredientsContainer}>
                    <View>
                        <Text style={styles.ingredientsContainerHeading}>Steps</Text>
                    </View>
                    <View style={styles.ingredientsListContainer}>
                        <View style={styles.ingredientListItem}>
                            <View>
                                <Text style={styles.ingredientListItemTitle}>1. Put a pot in medium/low heat.</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientListItem}>
                            <View>
                                <Text style={styles.ingredientListItemTitle}>2. Put rice when the water begins to Evaporate.</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientListItem}>
                            <View>
                                <Text style={styles.ingredientListItemTitle}>3. Simmer for 15 Minutes.</Text>
                            </View>
                            <TouchableOpacity style={styles.ingredientListItemRemove}>
                                <FontAwesome5 
                                    name="trash-alt" 
                                    size={16} 
                                    color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* Put a divider here */}
                <View style={styles.horizontalDivider} />
                <Text style={styles.textHeading}>Recipe Image</Text>
                <View>
                    <ImageBackground resizeMode="contain" style={{flex: 1, height: 250, justifyContent: 'center'}} source={require('../assets/no_image_available.png')}>
                        <View style={styles.addIngredientButtonContainer}>
                            <CustomButton 
                                title="Load Image"
                                color="#624cab" />
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.addIngredientButtonContainer}>
                    <CustomButton 
                        title="Add Recipe"
                        color="#624cab" />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    addRecipeScreen: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        flex: 1
    },
    addRecipeContainer: {
        paddingVertical: 20
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
        borderTopWidth: 2,
        marginHorizontal: 10
    },
    addIngredientButtonContainer: {
        width: '50%',
        height: 50,
        alignSelf: 'center'
    },
    ingredientsContainer: {
        margin: 10
    },
    ingredientsContainerHeading: {
        fontWeight: 'bold',
        fontSize: 22,
        paddingLeft: 10
    },
    ingredientsListContainer: {
        backgroundColor: '#ededed',
        borderRadius: 4,
        padding: 10
    },
    ingredientListItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 3
    },
    ingredientListItemTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    ingredientListItemRemove: {
        marginRight: 10
    },
    textHeading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 10
    }
});

export default AddRecipe;