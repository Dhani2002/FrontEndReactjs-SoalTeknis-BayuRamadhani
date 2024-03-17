import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL
const baseImg = process.env.REACT_APP_BASEIMAGEURL

export const getRestaurants = async() => {
    const restaurants = await axios.get(`${baseUrl}/list`)
    return restaurants.data.restaurants
}

export const getDetail = async(id) => {
    const details = await axios.get(`${baseUrl}/detail/:id=${id}`)
    return details.data;
}

export const searchRestaurants = async(q) => {
    const search = await axios.get(q)
    return
}