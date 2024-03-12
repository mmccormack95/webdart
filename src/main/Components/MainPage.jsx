import React, {Component} from "react";
import Title from "./Title";
import ScoringSection from "./ScoringSection";

class MainPage extends Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <Title title={"Dart Game"}/>
            <ScoringSection players={this.props.players}/>
        </div>
    }
}

// class MainPage extends Component {
//     constructor() {
//         super();
//         this.state = {
//             players: [{
//                 name: "Player 1",
//                 score: "0",
//                 rounds: [],
//                 roundScore: 0,
//                 multiplier: 1
//             }, {
//                 name: "Player 2",
//                 score: "0",
//                 rounds: [],
//                 roundScore: 0,
//                 multiplier: 1
//             }]
//         }
//         this.onAddRound = this.onAddRound.bind(this);
//         this.onReset = this.onReset.bind(this);
//         this.onChangeMultiplier = this.onChangeMultiplier.bind(this);
//         this.onRoundScoreChange = this.onRoundScoreChange.bind(this);
//     }
//
//     onRoundScoreChange(playerIndex, roundScore) {
//         const newPlayers = [...this.state.players];
//         const player = newPlayers.findLast(player => player.name === playerIndex);
//         player.roundScore = roundScore;
//
//         this.setState((state) => {
//             state.players = newPlayers
//         });
//     }
//
//     onAddRound(playerIndex, roundScore) {
//         const newPlayers = [...this.state.players];
//         const player = newPlayers.findLast(player => player.name === playerIndex);
//         const rounds = player.rounds;
//         rounds.push(roundScore);
//         player.score = parseInt(roundScore) + parseInt(player.score);
//
//         this.setState((state) => {
//             state.players = newPlayers
//         });
//
//         console.log(this.state.players);
//     }
//
//     onReset(playerIndex) {
//         const newPlayers = [...this.state.players];
//         const player = newPlayers.findLast(player => player.name === playerIndex);
//         player.rounds = [];
//         player.score = 0;
//
//         this.setState((state) => {
//             state.players = newPlayers
//         });
//     }
//
//     onChangeMultiplier(playerIndex, multiplier) {
//         const newPlayers = [...this.state.players];
//         const player = newPlayers.findLast(player => player.name === playerIndex);
//         player.multiplier = multiplier;
//
//         this.setState((state) => {
//             state.players = newPlayers
//         });
//     }
//
//     render () {
//         return <div>
//             <Title title={"Dart Game"}/>
//             <ScoringSection players={this.state.players} onRoundScoreChange={this.onRoundScoreChange} onAddRound={this.onAddRound} onReset={this.onReset} onChangeMultiplier={this.onChangeMultiplier}/>
//         </div>
//     }
// }

export default MainPage;