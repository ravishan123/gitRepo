
import * as api from '../api'
export const increment =(x)=>{

    return{
        type:'INCREMENT',
        payload:x
    };
};
export const decrement =()=>{
    return{
        type:'DECREMENT'
    };
};
export const weekly =()=>{
    return{
        type:'WEEKLY'
    }
}
export const monthly =()=>{
    return{
        type:'MONTHLY'
    };
};
export const yearly = ()=>{
    return{
        type:'YEARLY'
    }
};

export const islogged =(x)=>{
    return{
        type:'SIGN_IN',
        payload:x
    };
};

