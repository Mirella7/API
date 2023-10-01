import axios from "axios";
const apiKey = '9d7c784fecd84175b777145fcc2e6f43';
const url = 'https://newsapi.org/v2/top-headlines';


axios.get(`${url}?country=${country}&apiKey=${apiKey}`)
  .then(response => {
    console.log(response.data.articles);
  })
  .catch(error => {
    console.error(error);
  });
