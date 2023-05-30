import Axios from "./caller.service";

let getAll = () =>{
    return Axios.get('/api/ingredient')
}

let deleteIngredient = (id) =>{
    return Axios.delete(`/api/ingredient/${id}`)
}

let addIngredient = (data) => {
    return Axios.post('/api/ingredient/', data)
}

let updateIngredient = (data, id) => {
    return Axios.post(`/api/ingredient/${id}`, data)
}

export const IngredientService = {
    getAll, deleteIngredient, addIngredient, updateIngredient
}