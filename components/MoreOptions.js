import React, { useRef } from 'react';
import { TouchableOpacity, UIManager, findNodeHandle, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

const MoreOptions = (props) => {

    const icon = useRef(null);

    const showOptions = () => {
        if (icon) {
            UIManager.showPopupMenu(findNodeHandle(icon.current), props.options, () => {
                console.log("There was an error");
            }, (item, num) => {
                props.onOptionsClicked(item, num);
            });
        }
    }

    return (
        <TouchableOpacity onPress={showOptions} style={styles.MoreOptions}>
            <Icons name="more-vert" size={28} color="#fff" ref={icon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    MoreOptions: {
        paddingTop: 10,
        paddingRight: 10
    }
});

export default MoreOptions;