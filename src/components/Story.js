import React, { Component } from "react";
import './Story.css';

    function Story ({img,alt}){
        return( 
          <div className="Story-col">
                <div className="Story-user-avatar">
                  <img src={img} alt={alt} />
              </div>
          </div>
          );
    }
    export default Story;