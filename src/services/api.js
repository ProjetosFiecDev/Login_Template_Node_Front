import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://doacaosangue.fiecdev.com.br:24000',
    //URL PARA RODAR LOCALMENTE
    baseURL: 'http://localhost:3333',

    //URL PARA QUANDO FOR FAZER DEPLOY
    // baseURL: 'https://doacaosangue.fiecdev.com.br:24000',
});

export default api;