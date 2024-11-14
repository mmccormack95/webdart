import React, {Component} from "react";
import Title from "./Title";
import Game from "./Game";

class MainPage extends Component {
    render() {
        return <div>
            <Title title={"Dart Games"}/>
            <Game players={this.props.players}/>
        </div>
    }
}

export default MainPage;