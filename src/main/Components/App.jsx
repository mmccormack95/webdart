import MainPage from "./MainPage";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        players: state
    }
}

const App = connect(mapStateToProps)(MainPage);

export default App;