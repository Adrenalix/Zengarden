import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, ActivityIndicator, ImageBackground } from "react-native";

function Main({navigation}) {
        return(
            <ImageBackground 
            source={{uri: 'https://www.setaswall.com/wp-content/uploads/2018/10/1440x3120-Wallpaper-126-768x1664.jpg'}} 
            style={styles.container}>         
                <Text style={styles.zenText}>Find your peace in the Zen Garden.</Text>
       
                <View style={styles.buttonContainer}>                    
                    <TouchableOpacity                     
                        style={styles.button}
                        onPress={()=>navigation.navigate("Zengarden")}>
                        <Text style={styles.buttonText}>Quote Garden</Text>
                    </TouchableOpacity>
                    <TouchableOpacity                     
                        style={styles.button}
                        onPress={()=>navigation.navigate("Details")}>
                        <Text style={styles.buttonText}>About</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20
        },
        zenText: {
            color: "white",
            fontSize: 22,
            textAlign: "center",
            marginTop: 100
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            margin: 0
        },
        button: {
            
            backgroundColor: "orange",
            padding: 10,
            borderRadius: 10,
            marginTop: 0,
            borderWidth: 0,
            shadowOpacity: 0,
            elevation: 0,
            marginTop: 60,
        },
        buttonText: {
            color: "white",
            fontSize: 20,
            textAlign: "center",
        },
    });
export default Main;