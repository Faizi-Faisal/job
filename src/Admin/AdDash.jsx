import React, { useState } from 'react';
import axios from 'axios';
import './AdDash.css';

const AdDash = () => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    projectName: '',
    title: '',
    noOfSlots: 0,
    description: '',
    eventDate: '',
    preferredBy: [],
    amount: 0,
    agentAmount: 0,
    pickupInfo: '',
    jobId: '',
    area: '',
    district: '',
    location: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      preferredBy: checked
        ? [...prevData.preferredBy, name]
        : prevData.preferredBy.filter((item) => item !== name),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/jobs', {
        ...formData,
        image,
      });
      alert('Job added successfully!');
      setBottomSheetOpen(false);
      setFormData({
        projectName: '',
        title: '',
        noOfSlots: 0,
        description: '',
        eventDate: '',
        preferredBy: [],
        amount: 0,
        agentAmount: 0,
        pickupInfo: '',
        jobId: '',
        area: '',
        district: '',
        location: '',
      });
      setImage(null);
    } catch (error) {
      console.error('Error adding job:', error);
      alert('Failed to add job. Please try again.');
    }
  };

  const boxItems = [
    { icon: '📄', text: 'Add Job', onClick: () => setBottomSheetOpen(true) },
    { icon: '👤', text: 'Add Agent' },
    { icon: '🛠️', text: 'User Manage' },
    { icon: '👥', text: 'Agent Manage' },
    { icon: '💰', text: 'Payment History' },
    { icon: '📋', text: 'Listed Jobs' },
    { icon: '🗓️', text: 'Today’s Works' },
    { icon: '💳', text: 'Agent Payments' },
  ];

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Dashboard</h3>
      <div className="adddashaddjob-dashboard-grid">
        {boxItems.map((item, index) => (
          <div key={index} className="adddashaddjob-dashboard-box" onClick={item.onClick}>
            <div className="adddashaddjob-dashboard-icon">{item.icon}</div>
            <div className="adddashaddjob-dashboard-text">{item.text}</div>
          </div>
        ))}
      </div>

      {isBottomSheetOpen && (
        <div className="adddashaddjob-bottom-sheet">
          <div className="adddashaddjob-bottom-sheet-content">
            <div className="adddashaddjob-bottom-sheet-header">
              <h3>Add Job</h3>
              <button className="adddashaddjob-close-btn" onClick={() => setBottomSheetOpen(false)}>✖</button>
            </div>
            <form className="adddashaddjob-form" onSubmit={handleSubmit}>
              <label>
                Project Name:
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                No. of Slots:
                <input
                  type="number"
                  name="noOfSlots"
                  value={formData.noOfSlots}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
              <label>
                Event Date:
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Preferred By:
                <div className="adddashaddjob-checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="Male"
                      checked={formData.preferredBy.includes('Male')}
                      onChange={handleCheckboxChange}
                    /> Male
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="Female"
                      checked={formData.preferredBy.includes('Female')}
                      onChange={handleCheckboxChange}
                    /> Female
                  </label>
                </div>
              </label>
              <label>
                Amount:
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </label>
              <label>
                Agent Amount:
                <input
                  type="number"
                  name="agentAmount"
                  value={formData.agentAmount}
                  onChange={handleChange}
                />
              </label>
              <label>
                Pickup Info:
                <input
                  type="text"
                  name="pickupInfo"
                  value={formData.pickupInfo}
                  onChange={handleChange}
                />
              </label>
              <label>
                Job ID:
                <input
                  type="text"
                  name="jobId"
                  value={formData.jobId}
                  onChange={handleChange}
                />
              </label>
              <label>
                Location:
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                />
                </label>
              <label>
                Area:
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                />
              </label>
              <label>
                District:
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                />
              </label>
              <label>
                Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {image && (
                  <div className="adddashaddjob-image-preview">
                    <img src={image} alt="Preview" />
                    <button type="button" onClick={handleImageRemove} className="adddashaddjob-remove-image-btn">Remove</button>
                  </div>
                )}
              </label>
              <button className="adddashaddjob-submit-btn" type="submit">Add</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AdDash;
