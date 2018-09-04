function data (state={}, action) {
    switch(action.type) {
        case 'SET_USERNAME':
            return Object.assign({}, state, {user: action.payload})

        case 'SEARCH_USER':
            return Object.assign({}, state, {repoList: action.payload})

        case 'SET_REPO':
            return Object.assign({}, state, {repo: action.payload})

        case 'FETCH_ISSUES':
            return Object.assign({}, state, {
                issues: action.payload.res, 
                renderedIssues: action.payload.renderedIssues 
            })

        case 'UPDATE_RENDERED_ISSUES':
            return Object.assign({}, state, {renderedIssues: action.payload})

        case 'FETCH_COMMENT':
            return Object.assign({}, state, {comments: action.payload}) 
            
        default:
            return state;
    }
}

export default data;