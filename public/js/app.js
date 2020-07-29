const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const loading = document.querySelector('#loading')
const weatherTemp = document.querySelector('#weather-temperature')
const weatherLocation = document.querySelector('#weather-location')
const weatherDescription = document.querySelector('#weather-description')



weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  loading.textContent = 'Loading...'
  weatherTemp.textContent = ''
  weatherLocation.textContent = ''
  weatherDescription.textContent = ''

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        loading.textContent = data.error
      }  else {
        loading.textContent = ''
        weatherTemp.textContent = data.forecast.temperature + '°C'
        weatherLocation.textContent = data.location
        weatherDescription.textContent = data.forecast.description
        console.log(data.location)
        console.log(data.forecast)
      }
      
    })
  })

})