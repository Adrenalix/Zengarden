import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, ImageBackground } from "react-native";

function Zengarden({navigation}) {
const [isloading,setLoading]=useState(true)
const [quote, setQuote] = useState(null);

const fetchData = async () => {
    try {
        const response = await fetch('https://zenquotes.io/api/random/');
        const data = await response.json();
        setQuote(data[0]);
        setLoading(false);
    } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
    }
};

useFocusEffect(
    React.useCallback(() => {
        fetchData();
    }, [])
);
        //if empty [] only fetch data once and then don't update

    return(
        <ImageBackground 
            source={{uri: 'https://th.bing.com/th/id/OIG.ClhVB5Lteqe.Plmx2bR3?pid=ImgGn'}} 
            style={styles.container}
        >
            {isloading ? (
                <ActivityIndicator size="large" color="#00ff00"/>
            ) : (
                <View style={styles.quoteContainer}>
                    <Text style={styles.quoteText}>"{quote.q}"</Text>
                    <Text style={styles.authorText}>- {quote.a}</Text>
                    <TouchableOpacity 
                        style={[styles.button]}
                        onPress={fetchData}                    >
                        <Text style={styles.buttonText}>Reload Quote</Text>
                    </TouchableOpacity>
                </View>
            )}
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    quoteContainer: {
        alignItems: "center",
    },
    quoteText: {
        fontSize: 18,
        textAlign: "center",
        color: 'white',
    },
    authorText: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
        color: 'white',
    },
    button: {
        marginTop: 50,
        padding: 10,
        backgroundColor: 'orange',
    },
    buttonText: {
        color: 'white',
    },
});
export default Zengarden;