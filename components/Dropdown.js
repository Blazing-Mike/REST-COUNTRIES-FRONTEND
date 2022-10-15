
const Dropdown = (handleRegionChange) => {
    return ( 
        <div>
        <select
            name="region-list"
            onChange={handleRegionChange}>
        Filter by region

          <option value="africa">Africa</option>
          <option value="europe">Europe</option>
          <option value="asi">Asia</option>
        </select>

      </div>

     );
}
 
export default Dropdown;