import * as axios from 'axios';

export const apiFakeStore = axios.create({
        baseURL: 'https://fakestoreapi.com/'
})

const ApiFakeStore = {
    fetchAllProducts: ()=>{

        return apiFakeStore.get('/products')
            .then(res=>res.json);
            
    }

}

export default ApiFakeStore;