import React from 'react';

export default function ProgressBar({title, percentage = 0, color = "", labelClass = ""}){

    return (
        <>
          <div className={"progress-bar-title"}>
            {title}
          
            <span className={labelClass}>{percentage}%</span>
          </div>

          <div className="progress">
            <div
              className={
                "progress-bar animated"
              }
              style={{
                width: `${percentage}%`,
                background: color
              }}
            >
            </div>
          </div>
        </>
      );
}