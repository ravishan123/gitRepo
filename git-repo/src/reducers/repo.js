export default (repos = {repo: null, isLoading: false}, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {...repos, repo: action.payload}

        case 'SHOW_LOAD':
            return {...repos, isLoading: true}

        case 'HIDE_LOAD':
            return {...repos, isLoading: false}
        
        default:
            return {...repos};
    }
} 