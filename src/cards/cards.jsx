import React, {Component} from 'react';
import { render } from 'react-dom';
import Card from './cardsUI';

import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import DataFetching from './DataFetching';

class Cards extends Component {

   render(){
       return(
           <div className="container-fluid d-flex justify-content-center">
               <div className="row">
                   <div className="col-md-4">
                       <DataFetching />
                   </div>
                   <div className="col-md-4">
                       <DataFetching />
                   </div>
                   <div className="col-md-4">
                       <DataFetching />
                   </div>
               </div>
           </div>
       );
   }
}

export default Cards
