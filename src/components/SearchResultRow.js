import { useNavigate } from "react-router-dom";

const SearchResultsRow = ({house}) => {
    let navigate = useNavigate();
    let clickHandler = () =>{
        console.log(house);
        navigate('/searchhouse/'+house._id)
    }
    return ( 
       <tr key={house._id} onClick={clickHandler}>
                            <th scope="row">{house.address}</th>
                            <th>$ {house.price}</th>
        </tr>
    );
}
 
export default SearchResultsRow;