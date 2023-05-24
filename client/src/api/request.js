import { BASE_URL } from "./base_url";
import axios from 'axios'
export const GETALLL=async()=>{  //get All
    let globalData;
    await axios.get(`${BASE_URL}/imigrants`)
    .then((res)=>{
        globalData = res.data;
    })
    return  globalData
}
export const GETBYID=async(id)=>{  //get by id
    let singleData;
    await axios.get(`${BASE_URL}/imigrants/${id}`)
    .then((res)=>{
        singleData = res.data;
    })
    return singleData
}
export const DELETE=async(id)=>{ //delete
    let deleted
   await axios.delete(`${BASE_URL}/imigrants/${id}`)
   .then((res) => {
    deleted = res.data;
  });
}
export const Post=async(payload)=>{  //post
  await  axios.post(`${BASE_URL}/imigrants`, payload)
}
export const Put=async(id,payload)=>{  //put
    await axios.put(`${BASE_URL}/imigrants/${id}`, payload)
}