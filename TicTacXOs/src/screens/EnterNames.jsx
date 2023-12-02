import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useHistory } from 'react-router-dom';
import ".styles/components.css"

function EnterNames() {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const history = useHistory();

    const handlePlay = () => {
        localStorage.setItem('player1', player1);
        localStorage.setItem('player2', player2);
        history.push('/InGame');
    };

    return (
        <SafeAreaView style={styles.container}>
            <div className="screen">
                <div className="title"><h2> Enter Names </h2></div>
                <form>
                    Player 1: <input type="text" value={player1} onChange={e => setPlayer1(e.target.value)} /><br />
                    Player 2: <input type="text" value={player2} onChange={e => setPlayer2(e.target.value)} /><br />
                </form>
                <button className="green-button" onClick={handlePlay}>Play</button>
            </div>
        </SafeAreaView>
    );
}

export default EnterNames;