let search=(props)=>{
    return(
        <>
        <p class="mt-5">Showing {props.total} movies from the database</p>
        <button type="button" class="btn btn-primary">New</button>
        <div class="row">
          <div class="col-4">
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control mt-4"
                placeholder="Search..."
                value={props.search}
                //jb value likhesearch me

                onChange={(e)=>{
                    props.updatesearch(e.currentTarget.value);
                    //search me jo type kia chla gya or save bhi ho gya state me 
                    //ab table.jsx me search kre tb toh vo hme movie dikha de bs vhi
                }}
              />
            </div>
          </div>
        </div>
        </>
    )
}
export default search;