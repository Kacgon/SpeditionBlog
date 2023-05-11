import React, { useEffect, useState } from "react"
import axios from "axios"
import "../components/SmallPosts"
import SmallPosts from "../components/SmallPosts"

export var Number1 = Math.round(Math.random()*5)
const SmallPostsApi = () => {
    React.useEffect(()=> {
        getData();
       
    }, [])

const [data, setData] = React.useState([])
const [authors, setAuthors] = React.useState([])
const [isLoading, setIsLoading] = React.useState(true);

const getData = () => {
    const ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
    const ENDPOINT2 = "https://jsonplaceholder.typicode.com/users"
    axios.get(ENDPOINT)
        .then(async (response: any) => {
            const response2 = await axios.get(ENDPOINT2)
            setIsLoading(false);
            if(response.data) {
                console.log(response, response2)
                    setData(response.data)
                    setAuthors(response2.data)
            }
        })
    }

    
    const Dane1 = data
    const Dane2 = authors
    const newArray = data.map(v => {
        let obj = authors.find(o => o.id === v.id)
    
    if(obj){
        v.name = obj.name
    }
    return v
    })
    
    

    console.log("arr", newArray)
    const peopleRender = newArray.slice(Number1,Number1+4).map((post: any) => (
        <div key={post.body}>
          <SmallPosts  {...post}/>
        </div>
      ))
      const content = isLoading ? <div>Loading..</div> : 
      <div>{peopleRender}</div>
    
      return <h1>{content} </h1>
      }

      
export default SmallPostsApi;