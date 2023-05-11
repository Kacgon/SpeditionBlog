import { Avatar } from "@material-ui/core";
import axios from "axios";
import React from "react";
import "../main.css"

const AuthorsApi = () => {
    React.useEffect(()=> {
        getAuthors();
       
    }, [])
type AuthorsProp = {
        name: string
        id: number
    }
    
const [data, setData] = React.useState([])
const [isLoading, setIsLoading] = React.useState(true);

const getAuthors = () => {
    const ENDPOINT = "https://jsonplaceholder.typicode.com/users";
    axios.get(ENDPOINT)
        .then((authors: any) => {
            setIsLoading(false);
            if(authors.data) {
                setData(authors.data)
            }
        })
    }

var Number1 = Math.round(Math.random()*9)
var Number2 = Math.round(Math.random()*9)
var Number3 = Math.round(Math.random()*9)
var Number4 = Math.round(Math.random()*9)
var Number5 = Math.round(Math.random()*9)

var Losowy1 = (data[Number1] as any)?.name
var Losowy2 = (data[Number2] as any)?.name
var Losowy3 = (data[Number3] as any)?.name
var Losowy4 = (data[Number4] as any)?.name
var Losowy5 = (data[Number5] as any)?.name

var Liczba1 = (data[Number1] as any)?.id
var Liczba2 = (data[Number2] as any)?.id
var Liczba3 = (data[Number3] as any)?.id
var Liczba4 = (data[Number4] as any)?.id
var Liczba5 = (data[Number5] as any)?.id


return (
    <div>
      <div>
        <p className="AuthorsTitle">Autorzy artykułów</p>
        <div className="singleAuthor1"><div><Avatar src={"https://source.unsplash.com/random/Losowy1" as string}/> </div><div className="TekstAutora"> {Losowy1}</div></div>
        <div className="singleAuthor"><div><Avatar src={"https://source.unsplash.com/random/Losowy2" as string}/> </div><div className="TekstAutora"> {Losowy2}</div></div>
        <div className="singleAuthor"><div><Avatar src={"https://source.unsplash.com/random/Losowy3" as string}/> </div><div className="TekstAutora"> {Losowy3}</div></div>
        <div className="singleAuthor"><div><Avatar src={"https://source.unsplash.com/random/Losowy4" as string}/> </div><div className="TekstAutora"> {Losowy4}</div></div>
        <div className="singleAuthor"><div><Avatar src={"https://source.unsplash.com/random/Losowy5" as string}/> </div><div className="TekstAutora"> {Losowy5}</div></div>
      </div>
      </div>
  );
    }
export default AuthorsApi;