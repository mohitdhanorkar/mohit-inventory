import './App.css';
import React, { useState } from 'react';
import Checkbox from './components/Checkbox';
import ItemForm from './components/ItemForm';
import SupplierForm from './components/SupplierForm';
import { getData } from './services/api';

function App() {
  const [showItemForm, setShowItemForm] = useState(false);
  const [showSupplierForm, setshowSupplierForm] = useState(false);

  const handleItemSubmit = async (itemData) => {
    console.log('Item data submitted', itemData);
    try {
      const result = await getData({itemDetails: itemData});
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  const handleSupplierSubmit = async (supplierData) => {
    console.log('Supplier data submitted', supplierData);
    try {
      const result = await getData({supplier: supplierData});
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='App'>
      <h1 className='projectName'><span className='circle'></span>Inventory Management System</h1>
      <div className='chkDiv'>
        <Checkbox
          label="Item" 
          checked={showItemForm} 
          onChange={() => setShowItemForm(!showItemForm)} 
          className="chk"
        /> 
        &nbsp;&nbsp;&nbsp;
        <Checkbox
          label="Supplier" 
          checked={showSupplierForm} 
          onChange={() => setshowSupplierForm(!showSupplierForm)} 
        />
      </div>
      {showItemForm && <ItemForm onSubmit={handleItemSubmit} />}
      {showSupplierForm && <SupplierForm onSubmit={handleSupplierSubmit} />}
    </div> 
  );
}

export default App;
