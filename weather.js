const apiKey = "f8e2134e6288ea29f1acddd86ab74812"
const baseURL =
	"https://api.openweathermap.org/data/2.5/weather"
    


function weatherSearch(city) {
    const url = `${baseURL}?q=${city}&appid=${apiKey}&units=imperial`
    console.log(url)

    $.ajax(url)
        .then((weatherReport) => {
            console.log(weatherReport)

            const $location = $("#location")
            $location.empty()
            
            $location.html(`
                <p>${weatherReport.name.toUpperCase()}</p>
            `)

            const $temp = $("#temp")
			$temp.empty()

			$temp.html(`
                 <p>${Math.round(weatherReport.main.temp) + "&deg"}</p>
            `)

            const $feelsLike = $("#feels")
			$feelsLike.empty()

			$feelsLike.html(`
                 <p>${Math.round(weatherReport.main.feels_like) + "&deg"}</p>
            `)

            const $description = $("#description")
			$description.empty()

			$description.html(`
            <p>${weatherReport.weather[0].description.toUpperCase()}</p>
            `)
         
            
        })

}

$("input[type=submit]").on("click", (event) => {
	event.preventDefault()

	const inputText = $("input[type=search]").val()

	// update the screen
	weatherSearch(inputText)
})

weatherSearch("Stamford")

