import axios from "axios";
import { useEffect, useState } from "react";

const Enquiries = () => {
    // State to store enquiries
    let [allEnquiries, setAllEnquiries] = useState([]);

    // Fetch enquiries on component mount
    useEffect(() => {
        let fetchData = async () => {
            try {
                // Fetch enquiries data from the backend
                let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}enquiries`);
                // Directly set the response data to state
                setAllEnquiries(response.data);
            } catch (err) {
                console.log("Error while fetching enquiries");
                console.error(err); // Improved error logging
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container mt-4">
            <h5>Enquiries</h5>
            <div className="table-responsive">
                <table className="table table-striped table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allEnquiries.map((enquiry, index) => (
                            <tr key={index}> {/* Added unique key for each row */}
                                <td>{enquiry.address}</td>
                                <td>{enquiry.name}</td>
                                <td>{enquiry.email}</td>
                                <td>{enquiry.mobilenum}</td>
                                <td>{enquiry.remarks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Enquiries;
