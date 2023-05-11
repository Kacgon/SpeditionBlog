import React, { useState } from "react"
import axios from "axios"


const SmallPostsApiName = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [firstpost, setFirstPost] = React.useState([]);

    React.useEffect(()=> {
        getData();
    }, [])

const getData = () => {
    const ENDPOINT = "https://jsonplaceholder.typicode.com/users";
    axios.get(ENDPOINT)
        .then((response: any) => {
            setIsLoading(false);
            if(response.data) {
                setFirstPost(response.data)
                console.log(response.data)
            }
        })
    }
}
export default SmallPostsApiName;