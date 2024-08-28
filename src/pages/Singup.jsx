import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Signup.css';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phoneNumber: '',
    email: '',
    collegeName: '',
    referralId: '',
    password: '',
    bankAccountNumber: '',
    accountHolderName: '',
    ifsc: '',
    branch: '',
    bankName: '',
    upiId: '',
  });
  const [profilePic, setProfilePic] = useState(null);
  const [adharFront, setAdharFront] = useState(null);
  const [adharBack, setAdharBack] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e, setImage) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleRemoveImage = (setImage) => {
    setImage(null);
  };

  const validateForm = () => {
    for (const key in formData) {
      if (key !== 'referralId' && formData[key] === '') {
        return false;
      }
    }
    if (!profilePic || !adharFront || !adharBack) {
      return false;
    }
    if (!termsAccepted) {
      return false;
    }
    return true;
  };

  const checkReferralId = async (referralId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/check-referral/${referralId}`);
      return response.data.exists;
    } catch (error) {
      console.error('Error checking referral ID:', error);
      return false;
    }
  };
  

  const handleSubmit = async () => {
    if (!validateForm()) {
      setSnackbarMessage('All fields are required and you must accept the terms and conditions.');
      setSnackbarOpen(true);
      return;
    }
  
    const isReferralIdValid = await checkReferralId(formData.referralId);
    if (!isReferralIdValid) {
      setSnackbarMessage('Referral ID is invalid.');
      setSnackbarOpen(true);
      return;
    }
  
    try {
      const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      };
  
      const profilePicBase64 = await convertToBase64(profilePic);
      const adharFrontBase64 = await convertToBase64(adharFront);
      const adharBackBase64 = await convertToBase64(adharBack);
  
      const generateMyCodeID = (username) => {
        const firstThree = username.slice(0, 3).toUpperCase();
        const randomPart = Math.random().toString(36).substring(2, 5).toUpperCase();
        return firstThree + randomPart;
      };
  
      const myCodeID = generateMyCodeID(formData.username);
  
      const user = {
        ...formData,
        profilePic: profilePicBase64,
        adharFront: adharFrontBase64,
        adharBack: adharBackBase64,
        myCodeID
      };
  
      await axios.post('http://localhost:5000/api/users', user);
  
      setSnackbarMessage('Account created successfully!');
      setSnackbarOpen(true);
  
      setFormData({
        name: '',
        username: '',
        phoneNumber: '',
        email: '',
        collegeName: '',
        referralId: '',
        password: '',
        bankAccountNumber: '',
        accountHolderName: '',
        ifsc: '',
        branch: '',
        bankName: '',
        upiId: '',
      });
      setProfilePic(null);
      setAdharFront(null);
      setAdharBack(null);
      setTermsAccepted(false);
  
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setSnackbarMessage('Error creating account.');
      setSnackbarOpen(true);
    }
  };
  
  
  return (
    <div className="signupjob-container">
      <h3 className="signupjob-title">Create New Account</h3>
      <div className="signupjob-vector-image">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/user-sign-up-illustration-download-in-svg-png-gif-file-formats--login-registration-interface-account-register-form-or-pack-illustrations-3723261.png"
          alt="Signup Vector"
        />
      </div>

      {/* Step 1 */}
      <div className="signupjob-step">
        <h4 className="signupjob-step-title">Step 1: Enter Your Details</h4>
        <label className="signupjob-label">Name</label>
        <input
          type="text"
          name="name"
          className="signupjob-input"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label className="signupjob-label">User Name</label>
        <input
          type="text"
          name="username"
          className="signupjob-input"
          placeholder="User Name"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <label className="signupjob-label">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          className="signupjob-input"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <label className="signupjob-label">Email Id</label>
        <input
          type="email"
          name="email"
          className="signupjob-input"
          placeholder="Email Id"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label className="signupjob-label">College Name</label>
        <input
          type="text"
          name="collegeName"
          className="signupjob-input"
          placeholder="College Name"
          value={formData.collegeName}
          onChange={handleInputChange}
          required
        />
        <label className="signupjob-label">Referral ID</label>
        <input
          type="text"
          name="referralId"
          className="signupjob-input"
          placeholder="Referral ID"
          value={formData.referralId}
          onChange={handleInputChange}
        />
         <label className="signupjob-label">Create Password</label>
        <input
          type="password"
          name="password"
          className="signupjob-input"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Step 2 */}
      <div className="signupjob-step">
        <h4 className="signupjob-step-title">Step 2: Add Profile Picture</h4>
        <input
          type="file"
          className="signupjob-input"
          onChange={(e) => handleImageChange(e, setProfilePic)}
          required
        />
        {profilePic && (
          <div className="signupjob-image-container">
            <img src={URL.createObjectURL(profilePic)} alt="Profile Preview" className="signupjob-image-preview" />
            <button
              className="signupjob-remove-image"
              onClick={() => handleRemoveImage(setProfilePic)}
            >
              x
            </button>
          </div>
        )}
        <h4 className="signupjob-step-title">Adhar Front</h4>
        <input
          type="file"
          className="signupjob-input"
          onChange={(e) => handleImageChange(e, setAdharFront)}
          required
        />
        {adharFront && (
          <div className="signupjob-image-container">
            <img src={URL.createObjectURL(adharFront)} alt="Adhar Front Preview" className="signupjob-image-preview" />
            <button
              className="signupjob-remove-image"
              onClick={() => handleRemoveImage(setAdharFront)}
            >
              Remove
            </button>
          </div>
        )}
        <h4 className="signupjob-step-title">Adhar Back</h4>
        <input
          type="file"
          className="signupjob-input"
          onChange={(e) => handleImageChange(e, setAdharBack)}
          required
        />
        {adharBack && (
          <div className="signupjob-image-container">
            <img src={URL.createObjectURL(adharBack)} alt="Adhar Back Preview" className="signupjob-image-preview" />
            <button
              className="signupjob-remove-image"
              onClick={() => handleRemoveImage(setAdharBack)}
            >
              Remove
            </button>
          </div>
        )}
      </div>

      {/* Step 3 */}
      <div className="signupjob-step">
        <h4 className="signupjob-step-title">Step 3: Update Payment Accounts</h4>
        <label className="signupjob-label">Bank Account Number</label>
        <input
          type="text"
          name="bankAccountNumber"
          className="signupjob-input"
          placeholder="Bank Account Number"
          value={formData.bankAccountNumber}
          onChange={handleInputChange}
          required
        />
        <label className="signupjob-label">Account Holder Name</label>
        <input
          type="text"
          name="accountHolderName"
          className="signupjob-input"
          placeholder="Account Holder Name"
          value={formData.accountHolderName}
          onChange={handleInputChange}
          required
        />
        <label className="signupjob-label">IFSC</label>
        <input
          type="text"
          name="ifsc"
          className="signupjob-input"
          placeholder="IFSC"
          value={formData.ifsc}
          onChange={handleInputChange}
          required
        />
        <label className="signupjob-label">Branch</label>
        <input
          type="text"
          name="branch"
          className="signupjob-input"
          placeholder="Branch"
          value={formData.branch}
          onChange={handleInputChange}
          required
        />
        <label className="signupjob-label">Bank Name</label>
        <input
          type="text"
          name="bankName"
          className="signupjob-input"
          placeholder="Bank Name"
          value={formData.bankName}
          onChange={handleInputChange}
          required
        />
        <label className="signupjob-label">UPI Id</label>
        <input
          type="text"
          name="upiId"
          className="signupjob-input"
          placeholder="UPI Id"
          value={formData.upiId}
          onChange={handleInputChange}
          required
        />
        <div className="signupjob-terms">
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required
          />
          <label htmlFor="terms" className="signupjob-terms-label">
           <span style={{fontSize:'14px'}}>I accept <span style={{color:'#277c5d'}}>terms and conditions</span></span>
          </label>
        </div>
      </div>

      <button className="signupjob-submit-button" onClick={handleSubmit}>Create Account</button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000} // Auto close after 2 seconds
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Position at the top
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarMessage === 'Account created successfully!' ? 'success' : 'error'} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
