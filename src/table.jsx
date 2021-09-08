import Paging from "./paging";
import "./delete.css";
import React from "react";
 class table extends React.Component {
   //state bnane ke liye class bnaya or ab state bnaenge paging ke liye page change ke liye
   state={
     currpage:1,
   }
   //function 
   selectpage=(value)=>{
     this.setState({currpage:value});

   }
   render(){

    let allmovies=this.props.movies;
    let currfilter=this.props.selectedFilter;

    let filteredmoviesarr=allmovies.filter((el)=>{
        if(currfilter==="All Genre"){
            return true;
        }
        else if(el.genre.name===currfilter){
            return true;
        }
    });
    //here we get movie that we will search
    filteredmoviesarr=filteredmoviesarr.filter((el)=>{
      let movieTitle = el.title;
      movieTitle = movieTitle.toLowerCase();
      //this.props kyoki ye hme ab aap me se milega child me class comp hai toh this. vrna direct props
      let s = this.props.search.toLowerCase();
      
      //vo title dedo jo hmne search kia hai
      return movieTitle.includes(s);
    });
     
   

    //total no of pages divide by 4 bcz four type of genre we have pages changes wrt to them comedy,etc.
    let noOfPages=Math.ceil(filteredmoviesarr.length/4);

    //now set index to move to page corress to genre selected
    let startIndex=(this.state.currpage-1)*4;
    let endIndex=Math.min(filteredmoviesarr.length,this.state.currpage *4);

     //first page pr hme kuch hi movies dikkhani hai or ab yha index ke basis pr ki konse page pr kitni movies dikhao
     let arrtobeused=filteredmoviesarr.slice(startIndex,endIndex);

   
   

    return(
    <>
    <div class="row">
        <div class="col-10 mt-4">
        
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
              {arrtobeused.map((el)=>{
                  return(
                      //this key id is compulsory to write
                    <tr key={el._id}>

                      
                        <td >{el.title}</td>
                        <td>{el.genre.name}</td>
                        <td>{el.numberInStock}</td>
                        <td>{el.dailyRentalRate}</td>
                        {/* like vali td */}
                        <td
                        onClick={()=>{
                          //ye call hoga aap.js me
                          this.props.togglefilter(el._id);
                        }}
                        
                        >
                          {/* //hme ab heart shape use krni hai liked hm bna chuke hai app.js me  */ }
                          {el.liked?(
                          <span class="material-icons-outlined">
                            {/* fav se yha pr liked click hoga */}
                           favorite</span>
                           ):(<span class="material-icons-outlined">
                             {/* fav_border se dislike ye class hmne google font se copy ki hai */}
                           favorite_border
                           </span>)}
                        </td>
                        <td>
                            <button onClick={()=>{
                              this.props.deletemovies(el._id);
                            }} class="deleted">Delete</button>
                        </td>
                    </tr>
                  )
              }
              
              )}
             
           
          </tbody>
        </table>
      </div>
    </div>
    <Paging
     selectpage={this.selectpage}
     currpage={this.currpage}
     noOfPages={noOfPages}
    />
    </>
    )
  }
  
}
export default table;