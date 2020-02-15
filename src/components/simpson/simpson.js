import React from 'react';


export default function Simpson(props){
return(
    <div>
        <h1>Character:{props.simpson.character}</h1>
        <h5>Quote:{props.simpson.quote} </h5>
        <img src={props.simpson.image} alt=''/>
    </div>
)

}
