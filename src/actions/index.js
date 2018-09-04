
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
                if(res.message) {
                    dispatch ({
                        type: 'ERROR',
                        payload: res
                    })
                }
                else {
                    dispatch({
                        type: 'SEARCH_USER',
                        payload: res
                    })
                }
            }).catch(err => {
                dispatch ({
                    type: 'ERROR',
                    payload: err
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
        }).catch( error => {
            dispatch({
                type: 'ERROR',
                payload: error
            })
        });
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
        }).catch( error => {
            dispatch({
                type: 'ERROR',
                payload: error
            })
        })
    }
}

//btn
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


//newest
export function newest() {
    return (dispatch, getState) => {
        const { data } = getState();
        const issues = data.issues;
        const sorted = issues.sort(function(a,b) {
            let a_date = a.created_at.split('-');
            let a_day = a_date[2].split('T');
            
            let b_date = b.created_at.split('-');
            let b_day = b_date[2].split('T');
            
            a_date[2] = a_day[0];
            b_date[2] = b_day[0];

            for(let i=0; i<3; i++) {
            	if(a_date[i] > b_date[i]) {
                	return -1;
                }
                
                else if (a_date[i] < b_date[i]) {
                	return 1
                }
            }
        });

        const payload = sorted.slice(0, 10);

        dispatch({
            type: 'SORT_NEWEST',
            payload
        })
    }
}

//oldest
export function oldest() {
    return (dispatch, getState) => {
        const { data } = getState();
        const issues = data.issues;
        const sorted = issues.sort(function(a,b) {
            let a_date = a.created_at.split('-');
            let a_day = a_date[2].split('T');
            
            let b_date = b.created_at.split('-');
            let b_day = b_date[2].split('T');
            
            a_date[2] = a_day[0];
            b_date[2] = b_day[0];

            for(let i=0; i<3; i++) {
            	if(a_date[i] > b_date[i]) {
                	return 1;
                }
                
                else if (a_date[i] < b_date[i]) {
                	return -1
                }
            }
        });

        const payload = sorted.slice(0, 10);

        dispatch({
            type: 'SORT_OLDEST',
            payload
        })
    }
}


//most commented
export function mostCommented() {
    return (dispatch, getState) => {
        const { data } = getState();
        const issues = data.issues;

        const sorted = issues.sort(function(a,b) {
            return a.comments - b.comments;
        });

        const payload = sorted.slice(0, 10);

        dispatch({
            type: 'MOST_COMMENTED',
            payload
        })
    }
}

//least commented
export function leastCommented() {
    return (dispatch, getState) => {
        const { data } = getState();
        const issues = data.issues;

        const sorted = issues.sort(function(a,b) {
            return b.comments - a.comments;
        });

        const payload = sorted.slice(0, 10);

        dispatch({
            type: 'LEAST_COMMENTED',
            payload
        })
    }
}