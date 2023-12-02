import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useHistory } from 'react-router-dom';

function HomeScreen() {
    const history = useHistory();

    const handleStart = () => {
        history.push('/EnterNames'); 
    };
    const handleHowToPlay = () => {
        history.push('/HowToPlay');
    };

    return (
        <SafeAreaView style={styles.container}>
            <div className="screen">
                <div className="title">
                    <h1>TicTacX&Os</h1>
                </div>
                <div className="buttons">
                    <button className="green-button" onClick={handleStart}>Start</button>
                    <button className="yellow-button" onClick={handleHowToPlay}>How To Play</button>
                </div>
            </div>
        </SafeAreaView>
    );
}

export default HomeScreen;