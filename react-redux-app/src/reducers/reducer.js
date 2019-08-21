import { 
    FETCHING_PLAYER_DATA_START, 
    FETCHING_PLAYER_DATA_SUCCESS, 
    FETCHING_PLAYER_DATA_FAILURE 
} from '../actions/playerActions';

const initialState = {
    players: [],
    isLoading: false,
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_PLAYER_DATA_START:
            return {
                ...state, 
                isLoading: true, 
                error: ''
            };
        case FETCHING_PLAYER_DATA_SUCCESS:
            return {
                ...state, 
                isLoading: false, 
                players: action.payload,
                error: ''
            };
        default:
            return state;
    }
}