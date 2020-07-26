import React from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';

const RecipeGallery = (props) => {
    return (
        <View style={styles.recipeGallery}>
            <View style={styles.recipePhotoContainer}>
                
                <Image
                    style={styles.recipePhoto} 
                    source={require('../assets/recipe_demo1.jpg')}
                    resizeMode='cover' />
                <Text>10/10/2020</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionHeading}>Description</Text>
                <Text style={styles.descriptionText}>This recipe came out nicely this day thanks to the amount of water I pour on it.</Text>
            </View>
            <View style={styles.galleryContainerParent}>
                <ScrollView contentContainerStyle={styles.galleryContainer} horizontal={true}>
                    <View style={styles.galleryItem}>
                        <Image
                            style={styles.galleryItemImage}
                            source={require('../assets/recipe_demo1.jpg')}
                            resizeMode='contain' />
                    </View>
                    <View style={styles.galleryItem}>
                        <Image
                            style={styles.galleryItemImage}
                            source={require('../assets/recipe_demo1.jpg')}
                            resizeMode='contain' />
                    </View>
                    <View style={styles.galleryItem}>
                        <Image
                            style={styles.galleryItemImage}
                            source={require('../assets/recipe_demo1.jpg')}
                            resizeMode='contain' />
                    </View>
                    <View style={styles.galleryItem}>
                        <Image
                            style={styles.galleryItemImage}
                            source={require('../assets/recipe_demo1.jpg')}
                            resizeMode='contain' />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    recipeGallery: {
        backgroundColor: 'black',
        flex: 1
    },
    recipePhotoContainer: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 2,
        height: 200
    },
    recipePhoto: {
        flex: 1,
        width: '100%'
    },
    descriptionContainer: {
        flex: 1
    }, 
    descriptionHeading: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
        textAlign: 'center',
        paddingTop: 10
    },
    descriptionText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10,
        paddingHorizontal: 20
    },
    galleryContainerParent: {

    },
    galleryContainer: {
        backgroundColor: '#525659',
        height: 150,
        alignItems: 'center',
        flexDirection: 'row'
    },
    galleryItem: {
        borderColor: 'black',
        borderWidth: 2,
        height: '80%',
        width: 150,
        overflow: 'hidden',
        marginHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    galleryItemImage: {
        width: '100%'
    }
});

export default RecipeGallery;