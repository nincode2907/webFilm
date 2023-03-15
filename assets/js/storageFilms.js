const films = [];
// const api = 'http://localhost:3000/api/getdata'; // sử dụng server localhost 3000
const api = './films.json'; // sử dụng file json

//lấy dữ liệu từ file json xuống đổ ra mảng films
fetch(api)
    .then(response => response.json())
    .then(data => {
        data.forEach(d => {
            films.push(d);
        })
    })
    .catch(error => console.error(error));

export default films