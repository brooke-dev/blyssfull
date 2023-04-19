import React from 'react';

export default function DateDisplay ({ timestamp }) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so we need to add 1
  const day = date.getDate();

  const formatDate = (value) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="text-bold text-xl">
      {year}-{formatDate(month)}-{formatDate(day)}
    </div>
  );
};