import axios from 'axios';
import React from 'react';

const Author = () => {
    React.useEffect(()=> {
    getData();
   
}, [])
const [data, setData] = React.useState([])

const getData = () => {
    const ENDPOINT = "https://jsonplaceholder.typicode.com/users";
    axios.get(ENDPOINT)
        .then((response: any) => {
            if(response.data) {
            localStorage.setItem("user"+ response.data[0].id, response.data[4].name)
            localStorage.setItem("user"+ response.data[1].id, response.data[1].name)
            localStorage.setItem("user"+ response.data[2].id, response.data[2].name)
            localStorage.setItem("user"+ response.data[3].id, response.data[3].name)
            localStorage.setItem("user"+ response.data[4].id, response.data[4].name)
            localStorage.setItem("user"+ response.data[5].id, response.data[5].name)
            localStorage.setItem("user"+ response.data[6].id, response.data[6].name)
            localStorage.setItem("user"+ response.data[7].id, response.data[7].name)
            localStorage.setItem("user"+ response.data[8].id, response.data[8].name)
            localStorage.setItem("user"+ response.data[9].id, response.data[9].name)
                setData(response.data)
            }
        })
    }
};

export default Author;