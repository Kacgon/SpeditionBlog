import { Avatar, Grid } from "@material-ui/core"
import React from "react"
import "../main.css"


export type SmallPostsProp = {
    userId: string
    id: number
    title: string
    body: string
    name: string
}
const date = new Date();


export default function SmallPosts({userId, id, title, body, name}){
    let day = date.getDate() +id;
    let month = date.getMonth() ;
    let year = date.getFullYear() ;
    let currentDate = `${day}-${month}-${year}`;
    var Number1 = Math.round(Math.random()*100)
    var Number2 = Math.round(Math.random()*100)
    var Number3 = Math.round(Math.random()*100)
    var Number4 = Math.round(Math.random()*100)
    var Number5 = Math.round(Math.random()*100)
    var Number6 = Math.round(Math.random()*100)
    var Number7 = Math.round(Math.random()*100)
    var Number8 = Math.round(Math.random()*100)
    var Number9 = Math.round(Math.random()*100)
    var Number10 = Math.round(Math.random()*100)
    var Number11 = Math.round(Math.random()*100)
    var Number12 = Math.round(Math.random()*100)
    var Number13 = Math.round(Math.random()*100)
    var Number14 = Math.round(Math.random()*100)

    const [data, setData] = React.useState()
    const [data2, setData2] = React.useState()
    
    
    function pickRandom(){
        var Zdjecie = Math.round(Math.random()*14)
        setData(Zdjecie)
    }
    function pickRandom2(){
        var Avatar = Math.round(Math.random()*14)
        setData2(Avatar)
    }

    var Var1 = "https://source.unsplash.com/random/1"+id
    var Var2 = "https://source.unsplash.com/random/2"+id


    return(
        <Grid item lg={12} xs={12}>
        <div className="smallposts">
            <img className="smallpostsImg" 
                    src={Var2} alt=""/>
        <div className="BanerSmalltPosts"><p className="InsideOfBanner">Co nowego?</p></div>
    <div className="smallpostsInfo">
           <div className="SmallPostsTitle">{title}</div>
           <div className="smallPostsBody"><p className="BodyPadd">{body}</p></div>
    </div>
        <p className="PostsAvatar"><Avatar src={Var1}></Avatar></p><div className="AvatAndId"><h1 className="h1posts">{name}</h1><h2 className="h2posts">{currentDate}</h2></div>

        </div>
        </Grid>
    )
}