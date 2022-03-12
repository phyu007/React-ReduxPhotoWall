import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Photo from  './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoWall(props){


        return  <div> 

            <Link className="addIcon" to="/AddPhoto"></Link>
            {/* <button onClick={props.onNavigate} className="addIcon">+</button> */}
            <div className="photoGrid">
              {props.posts.
              sort(function(x,y){
                  return y.id - x.id
              })
              .map((post,index) => <Photo key={index} post={post} {...props} index={index}/>)}
          </div>
          </div>
}


PhotoWall.propTypes = {
    posts : PropTypes.array.isRequired,
}

export default PhotoWall
