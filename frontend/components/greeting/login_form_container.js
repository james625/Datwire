import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";


const mSTP = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: "login"
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm)