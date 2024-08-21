import React from 'react';
import BottomNavBar from './BottomNavBar';
import './Payments.css';

const Payments = () => {
  return (
    <div className="paymentpagesection-container">
      <div className="paymentpagesection-header">
        <div className="paymentpagesection-backarrow">&lt;</div> {/* Unicode for back arrow */}
        <h5 className="paymentpagesection-title">Payments</h5>
      </div>
      
      <div className="paymentpagesection-payment">
        <h6>Total Earned</h6>
        <div className="paymentpagesection-amount">
          <span className="paymentpagesection-rupee">₹</span> 5000
        </div>
      </div>

      <div className="paymentpagesection-container-inner">
        <BottomNavBar />
      </div>
    </div>
  );
}

export default Payments;
