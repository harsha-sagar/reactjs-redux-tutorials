export default function(state=[], action){
    switch(action.type){
        case 'BOOK_FETCH':
            return action.payload;
    }
    return state;
}
