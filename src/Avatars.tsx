import axios from 'axios';
import React from 'react';

const Avatar = () => {
    React.useEffect(()=> {
    getAvatar();
   
}, [])
function getAvatar(){
    localStorage.setItem("avatar2", "https://source.unsplash.com/random" )
}


};

export default Avatar;