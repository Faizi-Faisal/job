import React from 'react'
import BottomNavBar from './BottomNavBar'
import './WorkHistory.css'

const WorkHistory = () => {
  return (
    <>
      <div className="workhistorysection-container">
        <div className="workhistorysection-header-container">
          <div className="workhistorysection-back-arrow">&lt;</div>
          <h5 className="workhistorysection-title">Work History</h5>
        </div>
      </div>
      <section className="workhistorysection-history-item">
        <div className="workhistorysection-horizontal-container">
          <div className="workhistorysection-avatar">A</div>
          <div className="workhistorysection-text">
            <div className="workhistorysection-title-text">Title Here</div>
            <div className="workhistorysection-subtitle">Subtitle Here</div>
          </div>
          <div className="workhistorysection-status">Ongoing</div>
        </div>

        <div className="workhistorysection-horizontal-container">
          <div className="workhistorysection-avatar">A</div>
          <div className="workhistorysection-text">
            <div className="workhistorysection-title-text">Title Here</div>
            <div className="workhistorysection-subtitle">Subtitle Here</div>
          </div>
          <div className="workhistorysection-status">Ongoing</div>
        </div>

        
      </section>
      <BottomNavBar />
    </>
  )
}

export default WorkHistory
