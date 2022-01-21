import Films from "./Films"
import Error from "./Error"

export default function Film(props){
   const {movie=[]}=props;
    return(
       <>
        <div className="film">
           {movie.length ? movie.map(data=> <Films data={data} key={data.imdbID}/>) : <Error/>}
        </div>
       </>
    )
}