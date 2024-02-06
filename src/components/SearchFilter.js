import {useNavigate} from "react-router-dom"

const SearchFilter = (props) =>{
    let navigate = useNavigate();
    // get distinct counties from houseData
    // get housedata. got from props.
    // get counties from each element in array element
    if (!props.allHouses) {
        return <h1>....loading</h1>
    } 
    
    let arrWithDupeCounties = props.allHouses.map((elem) => {return elem.county})

    // using set to remove duplicates
    const uniqueCounties=Array.from(new Set (arrWithDupeCounties));
  
    let changeHandler =(e) => {
        console.log(e);
        let countyName = e.target.value;
        //navigate to search results component
        navigate('/searchresult/'+ countyName);
    }
  return (
     <div className="row d-flex justify-content-center">
        <div className="col-sm-5 text-center">
            <select onChange={changeHandler}>
                <option value ="select"> Select County</option>
                {
                    uniqueCounties.map((countyName) =>{
                        return <option key={countyName} value={countyName}> {countyName}</option>
                     })
                }
        </select>
     </div>
  </div>
  );
}

export default SearchFilter;