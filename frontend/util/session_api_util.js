export const signup = (user) => {
    return $.ajax({
        method: "post",
        url: "/api/users",
        data: {user}
    })
}

export const login = (user) => {
    return $.ajax({
        method: "post",
        url: "/api/session",
        data: {user}
    })
}

export const logout = () => {
    return $.ajax({
        method: "delete",
        url: "api/session"
    })
}

export const updateUser = user => {
    return $.ajax({
        method: "patch",
        url: `/api/users/${user.id}`,
        data: { user }
    })
}