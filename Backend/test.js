const axios = require('axios');

// Test GET /bfhl
axios.get('http://localhost:5000/bfhl')
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

// Test POST /bfhl
axios.post('http://localhost:5000/bfhl', {
    data: ["M", "1", "334", "4", "B", "Z", "a", "7"],
    file_b64: "BASE_64_STRING",
}).then((res) => console.log(res.data))
  .catch((err) => console.error(err));
