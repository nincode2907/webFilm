const films = [];

//lấy dữ liệu từ file json xuống đổ ra mảng films
fetch("./films.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(d => {
            films.push(d);
        })
    })
    .catch(error => console.error(error));

export default films