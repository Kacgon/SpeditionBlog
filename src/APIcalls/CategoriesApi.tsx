import axios from "axios";
import React from "react";
import "../main.css"


const CategoriesApi = () => {
    React.useEffect(()=> {
        getCategories();
       
    }, [])
type FirstPostProp = {
        userId: string
        id: number
        title: string
    }
    
const [data, setData] = React.useState([])
const [isLoading, setIsLoading] = React.useState(true);

const getCategories = () => {
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
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="CategoriesTitle">Kategorie</div>
        <div className="sidebarListItem">
        <h1 className="bodOfCategory">{Losowa1}</h1><h2 className="aligning"><div className="numberCircle"><p className="Cyfra">{Liczba1}</p></div></h2>
        </div>
        <div className="sidebarListItem">
        <h1 className="bodOfCategory">{Losowa2}</h1><h2 className="aligning"><div className="numberCircle"><p className="Cyfra">{Liczba2}</p></div></h2>
        </div>
        <div className="sidebarListItem">
        <h1 className="bodOfCategory">{Losowa3}</h1><h2 className="aligning"><div className="numberCircle"><p className="Cyfra">{Liczba3}</p></div></h2>
        </div>
        <div className="sidebarListItem">
        <h1 className="bodOfCategory">{Losowa4}</h1><h2 className="aligning"><div className="numberCircle"><p className="Cyfra">{Liczba4}</p></div></h2>
        </div>
        <div className="sidebarListItem">
        <h1 className="bodOfCategory">{Losowa5}</h1><h2 className="aligning"><div className="numberCircle"><p className="Cyfra">{Liczba5}</p></div></h2>
        </div>
        <div className="sidebarListItem">
        <h1 className="bodOfCategory">{Losowa6}</h1><h2 className="aligning"><div className="numberCircle"><p className="Cyfra">{Liczba6}</p></div></h2>
        </div>
        <div className="sidebarListItem">
        <h1 className="bodOfCategory">{Losowa7}</h1><h2 className="aligning"><div className="numberCircle"><p className="Cyfra">{Liczba7}</p></div></h2>
        </div>
        <div className="sidebarListItem">
        <h1 className="bodOfCategory">{Losowa8}</h1><h2 className="aligning"><div className="numberCircle"><p className="Cyfra">{Liczba8}</p></div></h2>
        </div>
        <div className="sidebarListItem">
        <h1 className="bodOfCategory">{Losowa9}</h1><h2 className="aligning"><div className="numberCircle"><p className="Cyfra">{Liczba9}</p></div></h2>
        </div>
        <div className="sidebarListItem">
        <h1 className="bodOfCategory">{Losowa10}</h1><h2 className="aligning"><div className="numberCircle"><p className="Cyfra">{Liczba10}</p></div></h2>
        </div>
      </div>
      <div className="sidebarItem">
        </div>
      </div>
  );
    }
export default CategoriesApi;