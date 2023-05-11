import axios from "axios"
import React from "react"
import "../main.css"
import "../Searchbar.css"
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(){
    const [query, setQuery] = React.useState("")
    const [data, setData] = React.useState([])
    const [display, setDisplay] =  React.useState("")
    
    console.log("return", query)
    React.useEffect(()=> {
        getData();
       
    }, [])

    const getData = () => {
        const ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
        axios.get(ENDPOINT)
            .then((categories: any) => {
                if(categories.data) {
                    setData(categories.data)
                }
            })
        }
        var FilteredData = [data[0]?.title, data[1]?.title,  data[2]?.title,data[3]?.title,data[4]?.title,data[5]?.title]
        if(FilteredData.includes(query)){
            console.log("exists")
            return(
                <div className="searchbar">
                    <span>
                    <label>Searching for...</label>
                    <input className="SearchbarInput" type="text" placeholder={query} onChange={(e) => setQuery(e.target.value)} /><SearchIcon className="TestKolor"></SearchIcon>
                    <div>Post with title {query}  exists on this page✔️ </div>
                    </span>
                </div>
            )
        }else{

        
return(
    <div className="searchbar">
        <span>
        <input className="SearchbarInput" type="text" placeholder="Wyszukaj na blogu.."  onChange={(e) => setQuery(e.target.value)} />
        <SearchIcon className="TestKolor"></SearchIcon>
        </span>
        
    </div>
)}
}