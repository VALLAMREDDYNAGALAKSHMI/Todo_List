
let FilterProduct = (props) =>{
    function  onFilterValueChanged(event){
      props.filterValueSelected (event.target.value)
    }

    return(
        <div>
        <select name="isAvailable"  onChange={onFilterValueChanged}>
  <option value="All">All</option>
  <option value="Active">active</option>
  <option value="Completed">completed</option>
  
</select>
        </div>
    )
}
export default FilterProduct;