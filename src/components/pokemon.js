import React, { Component} from 'react';
//import Fetch from "node-fetch"; 

class Pokemon extends Component {

   constructor(props) {
       super(props);
       this.state={
       pokemon: "",
       img: "",
   };
   
   }
    async Getpokemon(){
        let id = Math.floor(Math.random() * 493);
        let pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`
            ).then((res)=>res.json()); 

        //  this.setState((state)=> {
        //     {img: pokeData.sprites.front_default}
        //  })

         this.setState(
            { img: pokeData.sprites.front_default}
            
          );
        
            
            
    }
    componentDidMount(){
        this.Getpokemon()
    }


    render(){
        return (
            <div>
             
           <img style={{height:"10vh"}} src = {this.state.img}></img>
            </div>
        );
    }
    
}

export default Pokemon