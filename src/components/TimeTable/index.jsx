/* eslint-disable react/prop-types */
import "./style.css";

export const TimeTableModal = ({ setTimeTable }) => {
  return (
    <div className="timeTableModalContainer">
      <div className="timeTableModal">
        <span
          className="timeTableModalClose"
          onClick={() => setTimeTable(false)}
        >
          x
        </span>
      </div>
    </div>
  );
};
