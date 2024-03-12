import React, {Component} from "react";
import Title from "./Title";
import ScoringSection from "./ScoringSection";

class MainPage extends Component {
    render() {
        return <div>
            <Title title={"Dart Game"}/>
            <ScoringSection threeOhOneplayers={this.props.players.players.threeOhOneplayers}/>
        </div>
    }
}

export default MainPage;