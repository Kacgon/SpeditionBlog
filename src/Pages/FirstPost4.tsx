import "../main.css"
import { Card } from "react-bootstrap";
import React from "react";
import axios from "axios";
import { Avatar, Grid } from "@material-ui/core";

export type FirstPostProp = {
    userId: string
    id: number
    title: string
    body:string
}
const date = new Date();
const ENDPOINT = "https://jsonplaceholder.typicode.com/posts" 

export function FirstPost4({}:FirstPostProp){
    const [dane, setDane] :any = React.useState()
    let day = date.getDate();
    let month = date.getMonth() ;
    let year = date.getFullYear() ;
    let currentDate = `${day}-${month}-${year}`;
    var Number3 = Math.round(Math.random()*100)
    var Number4 = Math.round(Math.random()*100)
    var Number5 = Math.round(Math.random()*100)

    React.useEffect(() =>{
        axios.get(ENDPOINT).then((response)=>{
            setDane(response.data)
            console.log(dane)
        })
    }, [])
    if (!dane) return null;
    
    return <Grid item lg={12} xs={12} className="FirstPost"><Card className="Card">
    <Card.Body className="test" >
    <img className="ImageFirstPost" src="https://source.unsplash.com/random/{Number5}"></img>
    <div className="BanerFirstPost"><p className="InsideOfBanner">Co nowego?</p></div>
        <Card.Title >
    <span className="postsTitle">{dane[17].title}</span>
        </Card.Title>
    <p>{dane[17].body}</p>
    
    <p className="PostsAvatar1"><Avatar src={"https://source.unsplash.com/random/{Number4}" as string}></Avatar></p><div className="AvatAndId1"><h1 className="h1posts1">Glenna Reichert</h1><h2 className="h2posts1">{currentDate}</h2></div>
    
    </Card.Body>
</Card>
</Grid>
}