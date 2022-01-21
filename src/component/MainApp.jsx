import React from "react";
import Film from "./Film";
import Loader from "./Loader";
import Search from "./Search";

export default class MainApp extends React.Component{


    state={
        movie:[],
        loading:false
    }

    componentDidMount(){
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=77d01f6c&s=ip man')
        .then(response=>response.json())
        .then(result=>this.setState({movie:result.Search}))
    }

    getMovies=(txt)=>{
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=77d01f6c&s=${txt}`)
        .then(response=>response.json())
        .then(result=>this.setState({movie:result.Search, loading:false}))
    }

    render(){
        return(
            <div className="main">
              <Search getMovies={this.getMovies}/>
              {this.state.loading ? <Loader/> : <Film movie={this.state.movie}/>} 
            </div>
        )
    }

}