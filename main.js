let move = document.getElementById('move');
let textLink = document.getElementById('inputLink')

let naver1 = document.getElementById('naver1');
let google1 = document.getElementById('google1');
let youtube = document.getElementById('youtube');
let khu = document.getElementById('univ');


let link;
function getLink() {
    link = textLink.value;
}

move.addEventListener('click', function () {
    open('https://' + link);
})

naver1.addEventListener('click', function () {
    open('https://www.naver.com');
})

google1.addEventListener('click', function () {
    open('https://www.google.com');
})

youtube.addEventListener('click', function () {
    open('https://www.youtube.com');
})

khu.addEventListener('click', function () {
    open('https://info21.khu.ac.kr');
})


let form = document.querySelector('.search');

form.addEventListener('submit', function (e) {
    let keyword = document.getElementById('inputSearch');
    let engine = document.querySelector('.selectSearch');

    e.preventDefault();
    engine = engine.value;
    keyword = keyword.value;

    if (engine === 'google') {
        open('https://www.google.com/search?q=' + keyword);
    }
    else if (engine === 'naver') {
        open('https://search.naver.com/search.naver?query=' + keyword);
    }
})

const weatherAPI = '6d6936786c3d45502d2e331b701cfdaf';
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPI}`
    console.log(url)
}

function displayTime() {
    let today = new Date();
    let currentDate = document.getElementById('date');
    let currentTime = document.getElementById('time');
    let greet = document.getElementById('greet');

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    let hours = today.getHours();
    hours = (hours < 10) ? '0' + hours : hours;
    let minutes = today.getMinutes();
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    let seconds = today.getSeconds();
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    currentDate.innerHTML = year + '/' + month + '/' + date;
    currentTime.innerHTML = hours + ':' + minutes + ':' + seconds;

    if (Number(hours) < 12 && Number(hours) >= 6) {
        greet.innerHTML = "Good Morning!";
    }
    else if (Number(hours) < 18 && Number(hours) >= 12) {
        greet.innerHTML = 'Good Afternoon!';
    }

    else if (Number(hours) >= 18 && Number(hours) < 22) {
        greet.innerHTML = "Good Evening!";
    }

    else {
        greet.innerHTML = "Good Night!";
    }
}

function init() {
    setInterval(displayTime, 1000);
}

init();

const todoForm = document.querySelector('.misson button');
const missonUl = document.querySelector('.ing ul');
const clearUl = document.querySelector('.clear ul');

let myMisson = [];
todoForm.addEventListener('click', function () {
    let inputMisson = document.getElementById('inputMisson');
    let newMisson = inputMisson.value;
    if (newMisson !== '') {
        myMisson.unshift(newMisson);
    }
    missonUl.innerHTML = '';

    for (let i = 0; i < myMisson.length; i++) {
        let tmp = myMisson[i];
        let newItem = document.createElement('li');
        newItem.innerHTML = tmp + "<input type='checkbox'>";
        missonUl.appendChild(newItem);
    }

    if (myMisson.length > 5) {
        myMisson.pop();
    }
    inputMisson.focus();
    inputMisson.value = '';
})

// 체크박스 꾸미기
// 체크박스 선택 시 clear로 옮기기
// 삭제하기 구현
// 리셋 버튼 구현
