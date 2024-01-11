import React from "react";
import { FaArrowTrendDown as ArrowDownIcon } from "react-icons/fa6";
import { FaArrowTrendUp as ArrowUpIcon } from "react-icons/fa6";

function Dashboard() {
  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end bg-white p-3 flex-grow-1 rounded-3 gap-3">
          <div>
            <p>Total</p> <h4 className="mb-0">₹10,000</h4>
          </div>

          <div className="d-flex flex-column align-items-end">
          <h6 className="red"><ArrowDownIcon/> 25%</h6>
          <p className="mb-0">Last 30 days</p>

          </div>
        </div>

        <div className="d-flex justify-content-between align-items-end bg-white p-3 flex-grow-1 rounded-3 gap-3">
          <div>
            <p>Total</p> <h4 className="mb-0">₹10,000</h4>
          </div>

          <div className="d-flex flex-column align-items-end">
          <h6 className="red"><ArrowDownIcon/> 25%</h6>
          <p className="mb-0">Last 30 days</p>

          </div>
        </div>

        <div className="d-flex justify-content-between align-items-end bg-white p-3 flex-grow-1 rounded-3 gap-3">
          <div>
            <p>Total</p> <h4 className="mb-0">₹10,000</h4>
          </div>

          <div className="d-flex flex-column align-items-end">
          <h6 className="green"><ArrowUpIcon/> 25%</h6>
          <p className="mb-0">Last 30 days</p>

          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
