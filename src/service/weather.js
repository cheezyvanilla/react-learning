const key = "0711a84619fde14033a74975129bbb79"
export async function fetchWeather(city) {
    try {
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        return resp.json()
    } catch (err) {
        console.error(err)
        throw err
    }
}