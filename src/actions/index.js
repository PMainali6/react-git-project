
//fetch user
export function fetchUser(username) {
    console.log("Action called !");
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