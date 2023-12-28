import React from "react";
import Api from "axios";
import store from "../redux/store";




const getHeaders = (methodType : string) => {
   
    const headers = {
        method: methodType,
        credentials : 'include', 
        withCredentials : true, 
        headers: {
            // Authorization: `bearer ${token}`,
            'Content-Type': 'application/json',
            // withCredentials : true, 
            
        },
    };
    return headers;
};



const postApiCall = (url:string, payload :any, callback : any) => 
{
    const headers = getHeaders('POST');

    Api.post(`${url}`, payload, headers)
    .then((res) => callback('success', res))
    .catch((err) => callback("err", err));
}

const getApiCall = (url : string,  callback : any) => 
{
    const headers = getHeaders('GET');

    Api.get(`${url}`, headers)
    .then((response) => callback('success', response))
    .catch((errorResponse) => callback('err', errorResponse));

}

const putApiCall = (url : string, payload : any, callback : any) => 
{
    const headers = getHeaders('PUT');
    Api.put(`${url}`, payload, headers)
    .then((response) => callback('success', response))
    .catch((errorResponse) => callback('err', errorResponse));
}

const deleteApiCall = (url : string, payload : any, callback :any) => 
{
    const headers = getHeaders('DELETE');
    Api.delete(`${url}`, payload)
    .then((response) => callback('success', response))
    .catch((errorResponse) => callback('err', errorResponse));
} 

export {
    postApiCall, 
    getApiCall, 
    putApiCall, 
    deleteApiCall
}