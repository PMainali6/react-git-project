
//set username
export function setUsername(username) {
    return {
        type: 'SET_USERNAME',
        payload: username
    }
}

//fetch repo
export function fetchUser(username) {
    console.log("Action -- fetchUser callled");
    console.log(username);

    return (dispatch) => {
        fetch(`https://api.github.com/users/${username}/repos`).
            then(res => res.json()).
            then( res => {
                dispatch ({
                    type: 'SEARCH_USER',
                    payload: res
                })
            });
    }
}

//set repo
export function setRepoName(repo) {
    return {
        type: 'SET_REPO',
        payload: repo
    }
}

//fetch issues
export function fetchIssues(url) {
    console.log("Action -- fetchIssues callled");
    console.log(url);
    
    return (dispatch) => {
        fetch(url).then(res => res.json()).then(res => {
            const renderedIssues = res.slice(0, 10);
            dispatch({
                type: 'FETCH_ISSUES',
                payload: {res, renderedIssues}
            })
        })
    }
}


//fetch comment
export function fetchComment(url) {
    console.log("Action -- fetchComment callled");
    console.log(url);

    return (dispatch) => {
        fetch(url).then(res => res.json()).then(res => {
            dispatch({
                type: 'FETCH_COMMENT',
                payload: res
            })
        })
    }
}

//next btn
export function btn(page) {
    return (dispatch, getState) => {
        const begin = page * 10;
        const end = begin + 10;
        const { data } = getState();
        const payload = data.issues.slice(begin, end);
        (payload.length > 0) ?
        dispatch({
            type: 'UPDATE_RENDERED_ISSUES',
            payload
        }) : ''
    }
}
