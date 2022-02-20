import axios from "axios";

export const getProducts = () =>{
    return (dispatch) => {
        axios
        .get("http://3.1.211.120:8081/products",{headers: { 
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
          }})
        .then(({data}) => {
            dispatch(setProducts(data.data));
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

export const setProducts = (payload) =>{
    return{
        type:'set-data-products',
        payload
    }
}