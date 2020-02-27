let weather = [];

let max = [];
let min = [];
let snow = [];
let rain = [];
let date = [];
function myFunction() {
    fetch("http://localhost:3002/api/")
        .then(res => res.json())
        .then(data => {
            weather = data
            for (let i = 0; i < weather.length; i++) {
                max.push(weather[i].y_degC); 
                min.push(weather[i].a_degC); 
                snow.push(weather[i].snow); 
                rain.push(weather[i].rain); 
                let yy = weather[i].Vuosi.toString()
                let kk = weather[i].Kk.toString()
                let dd = weather[i].Pv.toString()
                let yykkdd = dd  + '.' + kk 
                date.push(yykkdd); 
            }
        })
}

myFunction();

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: 
    {
        labels: date,
        datasets: [{
            label: 'Max C degree',
            borderColor: 'rgb(52, 168, 50)',
            data: max
        },
        {
            label: 'Min C degree',
            borderColor: 'rgb(50, 168, 164)',
            data: min
        },
        {
            label: 'snow mm',
            borderColor: 'rgb(217, 66, 219)',
            data: snow
        },
        {
            label: 'rain mm',
            borderColor: 'rgb(116, 170, 171)',
            data: rain
        }]
    },

    // Configuration options go here
    options: {}
});