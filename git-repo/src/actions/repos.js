import * as api from '../api' 


export const fetchRepo = () => async (dispatch) => {
    try {
        dispatch({type:'SHOW_LOAD'})
        const {data} = await api.fetchRepos()
        dispatch({type:'FETCH_DATA', payload: data})
        dispatch({type:'HIDE_LOAD'})
    } catch(error){

    }
}

export const reposForDays = (days) => async (dispatch) => {
    try{
        dispatch({type:'SHOW_LOAD'})
        const {data} = await api.fetchReposForDays(days)
        console.log(data)
        dispatch({type:'FETCH_DATA', payload: data})
        dispatch({type:'HIDE_LOAD'})
    }catch(error){
        console.log(error)
    }
}