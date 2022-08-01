import axios from "axios";

export default axios.create({
    baseURL: 'http://192.168.150.141:8800'
});