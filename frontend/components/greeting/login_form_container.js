import { connect } from "react-redux";
import { clearErrors, login } from "../../actions/session_actions";
import SessionForm from "./session_form";


const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "login"
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm)