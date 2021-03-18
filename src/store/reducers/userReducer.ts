enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS= 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR= 'FETCH_USERS_ERROR'
}
interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}


export const userReducer = (state = initialState, action:UserAction):UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {users: [], loading: true, error: null}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {users: action.payload, loading: false, error: null}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {users: [], loading: true, error: action.payload}
        default:
            return state
    }
}
