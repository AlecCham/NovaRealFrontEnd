import axios from "axios";
import { useState } from "react";

const Enquiry = (props) => {
    // State to hold form data and submission status
    let [enquiryObject, setEnquiryObject] = useState({email: "", name: "", mobilenum: "", remarks: ""});
    let [submittedEnquiry, setSubmittedEnquiry] = useState(false);

    // Update state on form field change
    let onChangeHandler = (e) => {
        setEnquiryObject({...enquiryObject, [e.target.name]: e.target.value});
    }

    // Handle form submission
    let onClickHandler = async () => {
        console.log("Clicked submit enquiry");
        try {
            // Add address to enquiry object from props
            let enquiryData = {...enquiryObject, address: props.address};
            console.log(enquiryData);

            // Post enquiry data to backend
            let response = await axios.post(process.env.REACT_APP_BACKEND_URL + 'addenquiry', enquiryData);
            console.log(response.data);
            console.log("Enquiry submitted");

            // Update submission status
            setSubmittedEnquiry(true);
        } catch (err) {
            console.log("Error while adding enquiry");
            console.error(err); // Using console.error for better visibility of errors
            setSubmittedEnquiry(false);
        }
    }

    return (
        submittedEnquiry ? (
            <div className="mt-3">
                <h5>Thanks for submitting! Our realtor will get in touch with you soon!</h5>
            </div>
        ) : (
            <div>
                {/* Form fields for enquiry submission */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="emailHelpId"
                        placeholder="abc@mail.com"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobilenum" className="form-label">Mobile</label>
                    <input
                        type="text"
                        className="form-control"
                        name="mobilenum"
                        id="mobilenum"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="remarks" className="form-label">Remarks</label>
                    <input
                        type="text"
                        className="form-control"
                        name="remarks"
                        id="remarks"
                        onChange={onChangeHandler}
                    />
                </div>
                {/* Submit button */}
                <button onClick={onClickHandler} className="btn btn-dark">
                    Submit
                </button>
            </div>
        )
    );
};

export default Enquiry;
