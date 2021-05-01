import axios from 'axios';
import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

import GalleryList from '../GalleryList/GalleryList';

function App() {

let [ galleryList, setGalleryList ] = useState([])

useEffect(() => {
  getGalleryList();
},[]);

const getGalleryList = () => {
  axios.get('/gallery')
    .then((response) =>{
      console.log(response);
      setGalleryList(response.data)
    })
    .catch((err) =>{
      alert('could not get inventory. Try again late');
      console.log('Error getting inventory.', err);
    })
}


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
        <GalleryList
            galleryList={galleryList}
        />
      </div>
    );
}

export default App;
