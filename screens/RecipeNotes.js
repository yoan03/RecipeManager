import React, { Fragment, useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

// Component
import FloatingButton from '../components/FloatingButton';
import { FlatList } from 'react-native-gesture-handler';

// RecipeItem
const NoteItem = (props) => (
    <View style={styles.noteBox}>
        <View style={styles.noteContentBox}>
            <Text style={styles.noteContent}>{props.note}</Text>
        </View>
        <View style={styles.noteDateBox}>
            <Text style={styles.noteDate}>{props.date}</Text>
        </View>
    </View>
);

const RecipeNotes = (props) => {
    const [initialDragY, setInitialDragY] = useState(0);
    const [currentDragY, setCurrentDragY] = useState(0);

    const data = [
        {
            note: 'When I add it 1 tsp extra of salt it taste better.',
            date: '10/11/20 12:00pm'
        },
        {
            note: 'Today I add one mushroom chopped to the mix it came out great!!',
            date: '10/11/20 12:00pm'
        },
        {
            note: 'Today was a raining day and it didn\'t stop rainy the whole day somehow the recipe came out soggy due to high hydration level in the atmosphere.',
            date: '10/11/20 12:00pm'
        },
        {
            note: 'When I add it 1 tsp extra of salt it taste better.',
            date: '10/11/20 12:00pm'
        },
        {
            note: 'Today I add one mushroom chopped to the mix it came out great!!',
            date: '10/11/20 12:00pm'
        },
        {
            note: 'Today was a raining day and it didn\'t stop rainy the whole day somehow the recipe came out soggy due to high hydration level in the atmosphere.',
            date: '10/11/20 12:00pm'
        },
        {
            note: 'When I add it 1 tsp extra of salt it taste better.',
            date: '10/11/20 12:00pm'
        },
        {
            note: 'Today I add one mushroom chopped to the mix it came out great!!',
            date: '10/11/20 12:00pm'
        },
        {
            note: 'Today was a raining day and it didn\'t stop rainy the whole day somehow the recipe came out soggy due to high hydration level in the atmosphere.',
            date: '10/11/20 12:00pm'
        }
    ];

    const renderNotes = ({item}) => {
        return <NoteItem note={item.note} date={item.date} />
    }

    return (
        <View style={styles.RecipeNotes}>
            <FlatList 
                style={styles.RecipeNoteScrollView} 
                data={data} 
                renderItem={renderNotes}
                keyExtractor={(item, index) => index + "nt"}
                onScrollBeginDrag={(e) => setInitialDragY(e.nativeEvent.contentOffset.y)}
                onScroll={(e) => setCurrentDragY(e.nativeEvent.contentOffset.y)} />
            <FloatingButton
                containerStyle={styles.floatingButtonContainer}
                color="#7189ff"
                onPress={() => props.navigation.navigate('AddRecipe')}
                viewPos={{current: currentDragY, initial: initialDragY}} />
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

export default RecipeNotes;