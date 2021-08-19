export default (repos = {repo: null}, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {repo: action.payload}
        default:
            return {...repos};
    }
} 