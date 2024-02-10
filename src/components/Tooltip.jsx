// Tooltip.js
import React from "react";

const Tooltip = ({ date, summary }) => {
  return (
    <div className="react-calendar-heatmap-tooltip">
      {date && <div>Date: {date}</div>}
      {summary && <div>Summary: {summary}</div>}
      {!date && !summary && <div>No data</div>}
    </div>
  );
};

export default Tooltip;
