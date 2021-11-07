import axios from 'axios';

//criar umainstancia do axios para setar informações padroes para todas as requisições que faremos
export const api = axios.create({
    baseURL:'http://localhost:3000/api/',
})
