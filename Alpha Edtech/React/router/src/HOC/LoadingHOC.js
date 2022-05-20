import React from "react";
import Loading from '../components/Loading'
import NotFound from "../components/NotFound";

function LoadingHOC(WrappedComponent){
    return class extends React.Component{
        render(){
            console.log(this.props.characters.length)
            return this.props.characters.length === 0
            ? <Loading/>
            :  this.props.characters[0] === -1
            ? <NotFound/>
            : <WrappedComponent {...this.props}/>
        } 
    }
}

export default LoadingHOC