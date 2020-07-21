import React from 'react';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {View, Image, Text, StyleSheet} from 'react-native';

const RecipeItem = (props) => {
    return (
        <View style={styles.recipeItem}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#ccc')}
                onPress={props.onPress}>
                <View style={styles.recipeContainer}>
                    <View style={styles.imageContainer}>
                        <Image 
                            style={styles.image} 
                            source={require('../assets/recipe_demo1.jpg')}
                            resizeMode='cover' />
                    </View>
                    <View style={styles.infoContainer}> 
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.description}>{props.description}</Text>
                        
                        <View style={styles.infoMetaContainer}>
                            {props.metas.map(meta => (
                                <View style={styles.infoMeta} key={meta.name}>
                                    <Text style={styles.infoMetaLabel}>{meta.name}: </Text><Text>{meta.value}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    recipeItem: {
        margin: 15,
        backgroundColor: '#fbfbfb',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        elevation: 4
    },  
    recipeContainer: {
        
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    imageContainer: {
        flexDirection: 'row',
        width: 100,
        height: 100,
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 50,
        marginHorizontal: 15
    },
    image: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    description: {
        marginVertical: 10
    },
    infoContainer: {
        flex: 1,
        marginVertical: 10
    },
    infoMetaContainer:{
        marginTop: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    infoMeta: {
        flexDirection: 'row',
    },
    infoMetaLabel: {
        fontWeight: 'bold'
    }
});

export default RecipeItem;