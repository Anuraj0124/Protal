import React from 'react';
import './feed.css';
import Navbar from './Navbar';
import Story from './Story'
import {img1} from './StoryData'
import Post from './Post'
import {style1 , style2 , style3,style4,style5, style6,style7,style8} from './PostData'

function Feed() {
  return (
    <>
        <Navbar />
        <div className="row home__hero-row">
		<Story {...img1}/>
	     	<Story {...img1}/>
	     	<Story {...img1}/>
	     	<Story {...img1}/>
	     	<Story {...img1}/>
	     	<Story {...img1}/>
	     	<Story {...img1}/>
	     	<Story {...img1}/>
	     	<Story {...img1}/>
	     	<Story {...img1}/>
	     	<Story {...img1}/>
	     	<Story {...img1}/>
	     	<Story {...img1}/>
	     	<Story {...img1}/>
	     	<Story {...img1}/>
        </div>
        <div className="post-head">Dance</div>
        <div className="row home__hero-row">
		     <Post {...style1}/>
		     <Post {...style2}/>
		<div className="Post-col">
		<div className="row home__hero-row">
		     <Post {...style3}/>
		</div>
		<div className="row home__hero-row">
		     <Post {...style4}/>
		</div>
		</div>
		     <Post {...style1}/>
		     <Post {...style2}/>
		<div className="Post-col">
		<div className="row home__hero-row">
		     <Post {...style3}/>
		</div>
		<div className="row home__hero-row">
		     <Post {...style4}/>
		</div>
		</div>
		     <Post {...style1}/>
		     <Post {...style2}/>

        </div>
        <div className="post-head">Music</div>
        <div className="row home__hero-row">
		     <Post {...style5}/>
		     <Post {...style6}/>
		<div className="Post-col">
		<div className="row home__hero-row">
		     <Post {...style7}/>
		</div>
		<div className="row home__hero-row">
		     <Post {...style8}/>
		</div>
		</div>
		     <Post {...style5}/>
		     <Post {...style6}/>
		<div className="Post-col">
		<div className="row home__hero-row">
		     <Post {...style7}/>
		</div>
		<div className="row home__hero-row">
		     <Post {...style8}/>
		</div>
		</div>
		     <Post {...style5}/>
		     <Post {...style6}/>
		
        </div>
        <div className="post-head">Photography</div>
        <div className="row home__hero-row">
		     <Post {...style1}/>
		     <Post {...style2}/>
		<div className="Post-col">
		<div className="row home__hero-row">
		     <Post {...style3}/>
		</div>
		<div className="row home__hero-row">
		     <Post {...style4}/>
		</div>
		</div>
		     <Post {...style1}/>
		     <Post {...style2}/>
		<div className="Post-col">
		<div className="row home__hero-row">
		     <Post {...style3}/>
		</div>
		<div className="row home__hero-row">
		     <Post {...style4}/>
		</div>
		</div>
		     <Post {...style1}/>
		     <Post {...style2}/>

        </div>
    </>
  );
}

export default Feed;
