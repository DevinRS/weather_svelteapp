// @ts-nocheck
import { SECRET_API_KEY } from '$env/static/private'
export const load = async({params}) => {
    const fetchWeather = async(id) => {
        const res = await fetch('http://api.weatherapi.com/v1/current.json?key=' + SECRET_API_KEY + '&q=' + id +'&aqi=yes')
        const data = await res.json()
        return data.current
    }

    return{
        weather: fetchWeather(params.city),
        city: {params}
    }
}