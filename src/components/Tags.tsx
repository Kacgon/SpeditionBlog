import axios from "axios";
import React from "react";


const TagsApi = () => {
    React.useEffect(()=> {
        getTags();
       
    }, [])
type TagsProp = {
        userId: string
        id: number
        title: string
    }
    
const [data, setData] = React.useState([])
const [isLoading, setIsLoading] = React.useState(true);

const getTags = () => {
    const ENDPOINT = "https://jsonplaceholder.typicode.com/albums";
    axios.get(ENDPOINT)
        .then((categories: any) => {
            setIsLoading(false);
            if(categories.data) {
                console.log("asd", categories.data)
                setData(categories.data)
            }
        })
    }

var Number1 = Math.round(Math.random()*99)
var Number2 = Math.round(Math.random()*99)
var Number3 = Math.round(Math.random()*99)
var Number4 = Math.round(Math.random()*99)
var Number5 = Math.round(Math.random()*99)
var Number6 = Math.round(Math.random()*99)
var Number7 = Math.round(Math.random()*99)
var Number8 = Math.round(Math.random()*99)
var Number9 = Math.round(Math.random()*99)
var Number10 = Math.round(Math.random()*99)
var Losowa1 = (data[Number1] as any)?.title
var Losowa2 = (data[Number2] as any)?.title
var Losowa3 = (data[Number3] as any)?.title
var Losowa4 = (data[Number4] as any)?.title
var Losowa5 = (data[Number5] as any)?.title
var Losowa6 = (data[Number6] as any)?.title
var Losowa7 = (data[Number7] as any)?.title
var Losowa8 = (data[Number8] as any)?.title
var Losowa9 = (data[Number9] as any)?.title 
var Losowa10 = (data[Number10] as any)?.title
var Liczba1 = (data[Number1] as any)?.id
var Liczba2 = (data[Number2] as any)?.id
var Liczba3 = (data[Number3] as any)?.id
var Liczba4 = (data[Number4] as any)?.id
var Liczba5 = (data[Number5] as any)?.id
var Liczba6 = (data[Number6] as any)?.id
var Liczba7 = (data[Number7] as any)?.id
var Liczba8 = (data[Number8] as any)?.id
var Liczba9 = (data[Number9] as any)?.id
var Liczba10 = (data[Number10] as any)?.id

return (
    <div >
      <div >
      </div>
      <div className="fullTags">
        <p className="TagsTitle">Tagi</p>
        <div >
        <p className="tekst">  #{Losowa1} ({Liczba1})</p>
        <p className="tekst">  #{Losowa2} ({Liczba2})</p>
        <p className="tekst">  #{Losowa3}  ({Liczba3})</p>
        <p className="tekst">  #{Losowa4}  ({Liczba4})</p>
        <p className="tekst">  #{Losowa5}  ({Liczba5})</p>
        <p className="tekst">  #{Losowa6}  ({Liczba6})</p>
        <p className="tekst">  #{Losowa7}  ({Liczba7})</p>
        <p className="tekst">  #{Losowa8}  ({Liczba8})</p>
        <p className="tekst">  #{Losowa9}  ({Liczba9})</p>
        <p className="tekst">  #{Losowa10}  ({Liczba10})</p>
        </div>
      </div>
      </div>
  );
    }
export default TagsApi;