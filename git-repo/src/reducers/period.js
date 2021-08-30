const periodReducer = (state = 0,action)=>{
    switch(action.type){
        case 'WEEKLY':
            return state = 5;
        case "MONTHLY" :
            return state = 30;

        case "YEARLY":
            return state =360;
            
            default:
                return state;
    }
}
export default periodReducer;