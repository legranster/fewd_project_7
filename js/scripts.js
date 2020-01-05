const alertBanner = document.getElementById("alert");
const messageForm = document.getElementById('messageUserForm');
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');
const alert = document.getElementById('messageSent');

// Chart.JS Content -----------//
const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
let trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: '#499797',
        borderWidth: 1,
    }]
};
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});
let dailyData = {
    labels: ['S', 'M', 'T', 'W', 'Th', 'F', 'Sa'],
    datasets: [{
        data: [75, 100, 175, 125, 225, 200, 100],
        backgroundColor: '#499797',
        borderWidth: 1,
    }]
};
let dailyOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});
let mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [65, 15, 20],
        borderWidth: 0,
        backgroundColor: [
            '#499797',
            '#977049',
            '#974970'
        ]
    }]
};
let mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});



// Alert Banner HTML and event handler 

alertBanner.innerHTML = "<div class='alertBanner'><p><strong>Alert</strong>: Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p><p class='alert-banner-close'>X</p></div>"

alertBanner.addEventListener('click', (e) => {
    if(event.target.classList.contains('alert-banner-close')){
        alertBanner.style.display = 'none';
    }
});

// Messaging the User Section

send.addEventListener('click', (e) => {
    e.preventDefault();
    if (user.value === '' && message.value === ''){
        alert.innerHTML = '<div class="errorAlert"><p>User field cannot be empty. Message field cannot be empty.</p><p class="alert-banner-close">X</p></div>';
    } else if (user.value === ''){
        alert.innerHTML = '<div class="errorAlert"><p>User field cannot be empty.</p><p class="alert-banner-close">X</p></div>';
    } else if (message.value === '') {
        alert.innerHTML = '<div class="errorAlert"><p>Message field cannot be empty.</p><p class="alert-banner-close">X</p></div>';
    } else {
        alert.innerHTML = '<div class="alertBanner"><p>Message sent.</p><p class="alert-banner-close">X</p></div>';
    }
});

alert.addEventListener('click', (e) => {
    if(event.target.classList.contains('alert-banner-close')){
        alert.innerHTML="";
    }
});
