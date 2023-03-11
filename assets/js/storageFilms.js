const films = [];

//lấy dữ liệu từ file json xuống đổ ra mảng films
fetch("http://localhost:3000/api/getdata")
    .then(response => response.json())
    .then(data => {
        data.forEach(d => {
            films.push(d);
        })
    })
    .catch(error => console.error(error));

export default films