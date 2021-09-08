let paging=(props)=>{
  //to move pages
  let arr=[];
  for(let i=1;i<=props.noOfPages;i++){
    arr.push(i);
  }
    return(
        <nav>
          <ul class="pagination mt-4">
            {arr.map((el)=>{
              //arr mtlb page pr jae or click pr hme genre ki category se movie dikhae corr to page
              return(<li
              onClick={()=>{
                //value jo page select kia daldi table ke currpage me
                props.selectpage(el);
              }}
              class={`page-item ${props.currpage===el? "active":""}`}
              >
                <a class="page-link">{el}</a>

              </li>

            )

            })}
            
          </ul>
        </nav>
        
    )
}
export default paging;