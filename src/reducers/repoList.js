function repoList (state=[], action) {
    switch(action.type) {
        case 'SEARCH_USER':
            return [...state, ...action.payload]

        default:
            return state;
    }
}

export default repoList;