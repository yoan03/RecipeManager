import React, {Fragment} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

// Component
import FloatingButton from '../components/FloatingButton';

const RecipeGallery = (props) => {
    return (
        <View style={styles.RecipeNotes}>
            <ScrollView style={styles.RecipeNoteScrollView}>
                {/* Note Item */}
                <View style={styles.noteBox}>
                    <View style={styles.noteContentBox}>
                        <Text style={styles.noteContent}>When I add it 1 tsp extra of salt it taste better.</Text>
                    </View>
                    <View style={styles.noteDateBox}>
                        <Text style={styles.noteDate}>10/11/20 12:00pm</Text>
                    </View>
                </View>
                {/* Note Item */}
                <View style={styles.noteBox}>
                    <View style={styles.noteContentBox}>
                        <Text style={styles.noteContent}>Today I add one mushroom chopped to the mix it came out great!!</Text>
                    </View>
                    <View style={styles.noteDateBox}>
                        <Text style={styles.noteDate}>10/11/20 12:00pm</Text>
                    </View>
                </View>
                {/* Note Item */}
                <View style={styles.noteBox}>
                    <View style={styles.noteContentBox}>
                        <Text style={styles.noteContent}>Today was a raining day and it didn't stop rainy the whole day somehow the recipe came out soggy due to high hydration level in the atmosphere.</Text>
                    </View>
                    <View style={styles.noteDateBox}>
                        <Text style={styles.noteDate}>10/11/20 12:00pm</Text>
                    </View>
                </View>
                {/* Note Item */}
                <View style={styles.noteBox}>
                    <View style={styles.noteContentBox}>
                        <Text style={styles.noteContent}>When I add it 1 tsp extra of salt it taste better.</Text>
                    </View>
                    <View style={styles.noteDateBox}>
                        <Text style={styles.noteDate}>10/11/20 12:00pm</Text>
                    </View>
                </View>
                {/* Note Item */}
                <View style={styles.noteBox}>
                    <View style={styles.noteContentBox}>
                        <Text style={styles.noteContent}>Today I add one mushroom chopped to the mix it came out great!!</Text>
                    </View>
                    <View style={styles.noteDateBox}>
                        <Text style={styles.noteDate}>10/11/20 12:00pm</Text>
                    </View>
                </View>
                {/* Note Item */}
                <View style={styles.noteBox}>
                    <View style={styles.noteContentBox}>
                        <Text style={styles.noteContent}>Today was a raining day and it didn't stop rainy the whole day somehow the recipe came out soggy due to high hydration level in the atmosphere.</Text>
                    </View>
                    <View style={styles.noteDateBox}>
                        <Text style={styles.noteDate}>10/11/20 12:00pm</Text>
                    </View>
                </View>
                {/* Note Item */}
                <View style={styles.noteBox}>
                    <View style={styles.noteContentBox}>
                        <Text style={styles.noteContent}>When I add it 1 tsp extra of salt it taste better.</Text>
                    </View>
                    <View style={styles.noteDateBox}>
                        <Text style={styles.noteDate}>10/11/20 12:00pm</Text>
                    </View>
                </View>
                {/* Note Item */}
                <View style={styles.noteBox}>
                    <View style={styles.noteContentBox}>
                        <Text style={styles.noteContent}>Today I add one mushroom chopped to the mix it came out great!!</Text>
                    </View>
                    <View style={styles.noteDateBox}>
                        <Text style={styles.noteDate}>10/11/20 12:00pm</Text>
                    </View>
                </View>
                {/* Note Item */}
                <View style={styles.noteBox}>
                    <View style={styles.noteContentBox}>
                        <Text style={styles.noteContent}>Today was a raining day and it didn't stop rainy the whole day somehow the recipe came out soggy due to high hydration level in the atmosphere.</Text>
                    </View>
                    <View style={styles.noteDateBox}>
                        <Text style={styles.noteDate}>10/11/20 12:00pm</Text>
                    </View>
                </View>
                <View style={{marginBottom: 100}}>

                </View>
            </ScrollView>
            <FloatingButton 
                containerStyle={styles.floatingButtonContainer}
                color="#7189ff"
                onPress={() => props.navigation.navigate('AddRecipe')} />
        </View>
    );
};

const styles = StyleSheet.create({
    RecipeNotes: {
        backgroundColor: '#fff',
        flex: 1
    },
    noteBox: {
        backgroundColor: '#fbfbfb',
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 4,
        margin: 20,
        elevation: 8
    },
    noteContentBox: {
        margin: 10
    },
    noteContent: {
        fontWeight: 'bold'
    },
    noteDateBox: {
        marginHorizontal: 10,
        marginBottom: 5
    },
    noteDate: {
        fontSize: 12,
        color: '#758ecd',
        fontWeight: 'bold',
        textAlign: 'right'
    },
    floatingButtonContainer: {
        position: 'absolute', 
        bottom: 20, 
        right: 20
    }
});

export default RecipeGallery;