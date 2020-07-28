const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=671bd0f776e35a41737a3aeb4f884dbd&query=${lat},${long}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Please check your internet connection!', undefined)
        }  else if (body.success === false) {
            callback('Please input your latitude and longitude coordinates')
            console.log(typeof lat)
        }  else if (lat == '') {
            callback('Please type a complete coordinate')
        }
            else {
            callback(undefined, {
                country: body.location.country,
                temperature: body.current.temperature,
                description: body.current.weather_descriptions[0]

            })
        }
    })
}

module.exports = forecast