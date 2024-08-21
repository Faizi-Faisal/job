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

      <div className="paymentpagesection-details">
        <div className="paymentpagesection-pending">
          <h6>Pending Amount</h6>
          <div className="paymentpagesection-amount" style={{ fontSize: '18px' }}>
            <span className="paymentpagesection-rupee">₹</span> 2000
          </div>
        </div>
        <div className="paymentpagesection-transferred">
          <h6>Transferred Amount</h6>
          <div className="paymentpagesection-amount" style={{ fontSize: '18px' }}>
            <span className="paymentpagesection-rupee">₹</span> 3000
          </div>
        </div>
      </div>

      <div className="paymentpagesection-history">
        <h6>History</h6>
        <div className="paymentpagesection-history-content">
          <div className="paymentpagesection-transaction">
            <div className="paymentpagesection-avatar" style={{fontSize:'12px'}}>Paid</div>
            <div className="paymentpagesection-info">
              <div className="paymentpagesection-transaction-id" style={{fontSize:'14px'}}>123456789</div>
              <div className="paymentpagesection-date" style={{fontSize:'12px'}}>21-08-2024</div>
            </div>
            <div className="paymentpagesection-amount" style={{fontSize:'16px',fontWeight:'bold',color:'green',marginRight:'5px'}}>₹ 500</div>
          </div>


          <div className="paymentpagesection-transaction">
            <div className="paymentpagesection-avatar" style={{fontSize:'12px'}}>Paid</div>
            <div className="paymentpagesection-info">
              <div className="paymentpagesection-transaction-id" style={{fontSize:'14px'}}>123456789</div>
              <div className="paymentpagesection-date" style={{fontSize:'12px'}}>21-08-2024</div>
            </div>
            <div className="paymentpagesection-amount" style={{fontSize:'16px',fontWeight:'bold',color:'green',marginRight:'5px'}}>₹ 750</div>
          </div>
          <div className="paymentpagesection-transaction">
            <div className="paymentpagesection-avatar" style={{fontSize:'12px'}}>Paid</div>
            <div className="paymentpagesection-info">
              <div className="paymentpagesection-transaction-id" style={{fontSize:'14px'}}>123456789</div>
              <div className="paymentpagesection-date" style={{fontSize:'12px'}}>21-08-2024</div>
            </div>
            <div className="paymentpagesection-amount" style={{fontSize:'16px',fontWeight:'bold',color:'green',marginRight:'5px'}}>₹ 1500</div>
          </div>

          
          {/* Add more .paymentpagesection-transaction items here as needed */}
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
}

export default Payments;
