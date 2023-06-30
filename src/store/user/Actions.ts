
export const UserActions = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGOUT: 'LOGOUT'
};

export const loginActionRequest = (formData: any, callback?: (t: any) => void) => ({
    formData,
    callback,
    type: UserActions.LOGIN_REQUEST,
});


export const logoutRequest = (callback?: (t: any) => void) => ({
    type: UserActions.LOGOUT,
    callback
})