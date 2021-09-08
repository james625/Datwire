import { connect } from "react-redux";
import { clearErrors, signup } from "../../actions/session_actions";
import SessionForm from "./session_form";


const mSTP = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: "signup"
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors)
    }
}

export default connect(mSTP, mDTP)(SessionForm)