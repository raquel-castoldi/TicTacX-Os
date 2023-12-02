import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useHistory } from 'react-router-dom';
import TicTacXOs from "../components/TicTacXOs";
import Strike from "../components/Strike";
import Reset from "../components/Reset";
import GameOver from "../components/GameOver";
import GameState from "../components/GameState";

function InGame() {
    const history = useHistory();

    const handleExit = () => {
        history.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <div className="screen">
                <div className="title"><h1> In Game </h1></div>
                <TicTacXOs />
                <Board />
                <Tile />
                <Strike />
                <GameOver />
                <Reset />
                <GameState />
                <button className="red-button" onClick={handleExit}>Quit</button>
            </div>
        </SafeAreaView>
    );
}