import React, {Component} from 'react';
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
