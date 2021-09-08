//state bnani hai class use kro or as a props ye hum pass krenge comlifecycle ko
import React from "react";
// import Comlifecycle from "./comlifecycle";
import Nav from "./nav";
import Filter from "./filter";
import Search from "./search";
import Table from "./table";
import Customer from "./customer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./login";
import Rentals from "./rentals";



class App extends React.Component {

    
  state={
    movies:[],
    genre:[],
    //we r making this so that we can use it to select filter nd 
    //also after selected we can use to show table components corres. to that filter
    selectedFilter:"All Genre",
    search:"",
  };
  //search me type ke liye
  updateSearch=(searchstring)=>{
    this.setState({search:searchstring});
  }
//call this in search 




  //function filter may be thriller action whatever selected
  setFilter=(filter)=>{
    this.setState({selectedFilter:filter});
  };

//toggle like yha index find krenge haar movie ki
//or ye function call hoga table child comp me
togglelike=(id)=>{
  let index=this.state.movies.findIndex((el)=>{
   return el._id===id;
  });
  //after finding index of each movie now add liked property to each one
  //exact copy bna dega movies ki 
  let currmoviesarr=this.state.movies.map((el)=>el);
   //ab set krega copy movies pr liked property ko
  if(currmoviesarr[index].liked){
    currmoviesarr[index].liked=false;

  }else{
    currmoviesarr[index].liked=true;
  }

 
  this.setState({movies:currmoviesarr});
}
//delete function
delete=(id)=>{
  let filteredarr=this.state.movies.filter((el)=>{
    return el._id!==id;
  })
  this.setState({movies:filteredarr});
}



  componentDidMount() {
    //i will get data here

    let f = async () => {
      //fetch kra rhe hai api se backend me kaam krti hai 
      //hmne package.json me proxy use ki hai to vo localhost api vala hi fetch hoga yha
      let responseMovies = await fetch("/movies");
      //this genre we get from api only localhost4000
      let responseGenre=await fetch("/genre")
      
      //here we r getting data as json that we fetch
      let moviejson = await responseMovies.json();
      let genrejson = await responseGenre.json();

      //put this json in state
      this.setState({
        movies:moviejson,
        genre:genrejson,
      })
     
    };

    f();
  }
  
//this is to show complifecycle
// class App extends React.Component{
//   state={
//     child:true,
//   };

  render(){
    return(
      
        /* this one for comlifecycle */
        /* <button onClick={()=>{
          if(this.state.child){
            this.setState({child:false})
          }
          else{
            this.setState({child:true})
          }
        }
        }>Click</button> */
       /* pass kr dia as a props comlifecycle ko */
       /* yha state.child agr hai toh complifecycle chla do vrna empty krado ki comlifecycle component del ho gya jb state hi nhi */
       /* {this.state.child ? <Comlifecycle/> :""} */
       <Router>
          <div>
            <Nav/>
            <Switch>
              <Route exact path="/rentals/premium">
                <Login/>
              </Route>
              <Route exact path="/rentals">
                <Rentals/>
              </Route>
              <Route path="/customer">
                <Customer/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/">
                <div class="row">
                  <Filter 
                  //ye function hai jo child me cll hoga jb bhi filter set krenge or fir stateselected me value change hoga
                  handlefilter={this.setFilter}
                  selectedFilter={this.state.selectedFilter}
                  genreData={this.state.genre}/>

                  <div class="col-9">
                    <Search
                      
                    search={this.state.search}
                    //for updating movies in database
                    total={this.state.movies.length}
                    updatesearch={this.updateSearch}
                      
                        
                    />
                      
                    <Table
                    search={this.state.search}
                    deletemovies={this.delete}
                    togglefilter={this.togglelike}
                    selectedFilter={this.state.selectedFilter}
                    movies={this.state.movies} />
                      
                      

                  </div>
                      
                      
                </div>

              </Route>
            </Switch>
        
        

          </div>
        </Router>
      
    
     
     
      )
   }
}

export default App;
//imp!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//while running this file open api server also bcz api me hi 
//sara data hai movies ka or api hi yha as backend use hogi react me data lane ke liye
