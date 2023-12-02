import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useHistory } from 'react-router-dom';

function HowToPlay() {
    const history = useHistory();

    const handleExit = () => {
        history.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <div className="screen">
                <div className="title"><h1> How to Play </h1></div>
                <p>
                    1. Player takes turns, marking empty cells with “X” and “O”. <br />
                    2. Win by getting three in a row horizontally, vertically, or diagonally. <br />
                    3. Game ends when someone wins or when the grid is full (a draw).
                </p>
                <button className="red-button" onClick={handleExit}>Exit</button>
            </div>
        </SafeAreaView>
    );
}

export default HowToPlay;