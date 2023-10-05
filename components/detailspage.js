import React from "react";
import { View, Text, Button,ImageBackground, StyleSheet } from "react-native";

function Detail({route, navigation}) {
    return(
        <ImageBackground 
            source={{uri: 'https://th.bing.com/th/id/OIG.Zhs0c89Qs0PvDPoRQFN8?pid=ImgGn'}} 
            style={styles.container}
        >
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    An app delivering daily inspirational quotes serves as a pocket-sized companion, offering a consistent source of positivity and motivation. It not only enhances mental well-being and productivity but also fosters a sense of community and personal development. With easy access and customizable content, it ensures that users can find encouragement and a motivational boost right at their fingertips, anytime, anywhere.
                </Text>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)', 
        padding: 15,
        margin: 25,
        borderRadius: 10, 
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22
    },
});
export default Detail;