import * as api from '../api' 


export const fetchRepo = () => async (dispatch) => {
    try {
        const {data} = await api.fetchRepos()
        dispatch({type:'FETCH_DATA', payload: data})
    } catch(error){

    }
}