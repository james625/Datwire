import * as sessionAPIUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT = 'LOGOUT'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const REMOVE_ERRORS = 'REMOVE_ERRORS'

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: REMOVE_ERRORS
    }
}

export const login = (user) => dispatch => {
    return sessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
                                            errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const logout = () => dispatch => {
    return sessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()))
}

export const signup = user => dispatch => {
    return sessionAPIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
                                            errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const updateUser = user => dispatch => {
    return sessionAPIUtil.updateUser(user).then(user => dispatch(receiveCurrentUser(user)))
}