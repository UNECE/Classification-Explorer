import React from 'react'
//import { LOADING, LOADED, FAILED } from '../utils/sparql-connector/index'

export default function Loading({from, plural}){
  return(
     <span>
    <span className="fa fa-spinner fa-pulse fa-2x"></span>
    &nbsp; {from.capitalizeFirstLetter()} {plural?"are":"is"} loading
         
    </span>)
}
    
    String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}