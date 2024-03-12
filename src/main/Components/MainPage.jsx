import React, {Component} from "react";
import Title from "./Title";
import ScoringSection from "./ScoringSection";

class MainPage extends Component {
    render() {
        return <div>
            <Title title={"Dart Game"}/>
            <ScoringSection players={this.props.players}/>
        </div>
    }
}

export default MainPage;