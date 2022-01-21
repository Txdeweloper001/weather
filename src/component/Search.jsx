import React from "react";



export default class Search extends React.Component{

    state={
        text:""
    }


    render(){
        return(
            <>
            
                <div className="row">
                    <div className="input-field col s6">
                        <input  value={this.state.text} 
                               onChange={(e)=>(this.setState({text:e.target.value}))} 
                               type="text" 
                               className="validate"
                        /> 
                    </div>
                    <button className="btn bt" onClick={()=>(this.props.getMovies(this.state.text))}>Search movies</button>
                </div>
            </>
        )
    }
}