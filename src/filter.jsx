let filter=(props)=>{
   return(
    <div class="col-3">
    <ul class="list-group m-4">
      <li
      onClick={()=>{
          props.handlefilter("All Genre")
      }}
       class={`list-group-item ${props.selectedFilter==="All Genre" ? "active":""}`}>All Genre</li>
      {/* change li acc to genre state we get genre from api  */}
      {
          props.genreData.map((el)=>{
              //we get genre array name display there nd we have id also  active mtlb dikhana konsa selected hai
              return  <li 
              onClick={()=>{props.handlefilter(el.name)}}
              key={el._id} 
              //here class me js use kr lia $lgake
              class={`list-group-item ${props.selectedFilter===el.name ? "active":""}`}>{el.name}</li>
          })
      }
      
    </ul>
  </div>
   )
}
export default filter;