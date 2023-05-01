const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide=document.querySelector('.middle_layer');
const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;


    if (cityVal === "") {
        datahide.classList.add('data_hide');
    
        city_name.innerText = `Please Enter City Name To Search`;
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=7e1311c81404147f165a56d336f64a4d`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;

            const tempmood = arrData[0].weather[0].main;

            //condition to check sunny or cloudy

            if (tempmood == 'Clear') {
                "<i class='fas fa-sun' style='color :#eccc68;'></i>"
            } else if (tempmood == 'Clouds') {
                "<i class='fas fa-cloud' style='color :#f1f2f6;'></i>"

            } else if (tempmood == 'Rain') {
                "<i class='fas fa-rain' style='color :#a4b0be;'></i>"

            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color :#f1f2f6;'></i>"

            }
            datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = `Name Not Entered Properly`;
            datahide.classList.add('data_hide');

        }

    }
}

submitBtn.addEventListener('click', getInfo);