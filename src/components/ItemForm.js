import React, { useState} from "react";
//import './styles/Form.css';

function ItemForm({onSubmit}) {
    const[itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [unitPrice, setUnitPrice] = useState('');
    const [submissionDate, setSubmissionDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({itemName, quantity, unitPrice, submissionDate });
    }

    return(        
        <form onSubmit={handleSubmit}>
        <h3>Item Details</h3>         
            <div className="form-row">
                <div className="form-group">
                    <label>Item Name:</label>
                    <input 
                        type="text" 
                        placeholder='Enter item name' 
                        maxLength="255"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    <small>Max 50 characters</small>
                </div>
                <div className="form-group">
                    <label>Quantity:</label>
                    <input 
                        type="number" 
                        placeholder='Enter quantity'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <small>Numeric value (USD)</small>
                </div>
            </div>
            
            <div className="form-row">
                <div className="form-group">
                    <label>Unit Price:</label>
                    <input 
                        type="text" 
                        placeholder='Enter unit price'
                        value={unitPrice}
                        onChange={(e) => setUnitPrice(e.target.value)}
                    />
                    <small>Numeric value (USD)</small>
                </div>
                <div className="form-group">
                    <label>Date of Submission :</label>
                    <input 
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={submissionDate}
                        onChange={(e) => setSubmissionDate(e.target.value)}
                    />
                    <small>Format: MM/DD/YYYY</small>
                </div>
            </div>         
            <button type="submit">Submit</button>
        </form>
    )
}
export default ItemForm;