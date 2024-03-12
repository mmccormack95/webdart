import React, {Component} from "react";
import Title from "./Title";
import GameSelection from "./GameSelection";
import Game from "./Game";

class MainPage extends Component {
    render() {
        return <div>
            <Title title={"Dart Games"}/>
            <GameSelection/>
            <Game players={this.props.players}/>
        </div>
    }
}

export default MainPage;