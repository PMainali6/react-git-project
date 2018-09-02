
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

//fetch issues & redirect
export function fetchIssues(url) {
    console.log("Action -- fetchIssues callled");
    console.log(url);

    return (dispatch) => {
        fetch(url).then(res => res.json()).then(res => {
            dispatch({
                type: 'FETCH_ISSUES',
                payload: res
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