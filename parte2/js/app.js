// var ctx = document.getElementById("myChart");

// var chart = ctx.getContext('2d');

// chart.fillStyle = "red";
// chart.fillRect(0,0,100,200);

// chart.fillStyle = "blue";
// chart.fillRect(150, 50, 100, 200);


var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['January', 'February', 'March'],
        
        
        datasets: [{
            label: 'Gráfico',
            backgroundColor: ['green', 'blue', 'yellow'],
            borderColor: 'rgb(255, 99, 132)',
            data: [50, 10, 5]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});