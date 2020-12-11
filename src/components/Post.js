import React, { Component } from "react";
import './Post.css';

    function Post ({img,alt,CSS_class}){
        return( 
          <div className="Post-col">
                <div className={CSS_class}>
                  <img className="Post-img" src={img} alt={alt} />
              </div>
          </div>
          );
    }
    export default Post;