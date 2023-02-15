
const express = require('express');
const cors = require('cors');
const server = express();
const {crc16} = require('easy-crc');

server.use(express.json());
server.use(cors());
const port = 4000;
server.listen(port, () => {
    console.log(`API Up`);

})

server.post('/', (request, response) => {
const { CR16Code } = request.body;
data = CR16Code; // SN10052211010718
checksum = crc16('MODBUS', data);

console.log(data); 

  return response.status(200).json({ message: checksum.toString(16)});
})