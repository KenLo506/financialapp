import React, { useState } from 'react';
//import './Filters.css';

const Filters = ({ data, setFilteredData }) => {
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [minRevenue, setMinRevenue] = useState('');
  const [maxRevenue, setMaxRevenue] = useState('');
  const [minNetIncome, setMinNetIncome] = useState('');
  const [maxNetIncome, setMaxNetIncome] = useState('');

  const generateYearOptions = (start, end) => {
    const years = [];
    for (let year = start; year <= end; year++) {
      years.push(year);
    }
    return years;
  };

  const applyFilters = () => {
    let filtered = data;

    if (startYear) {
      filtered = filtered.filter(item => new Date(item.date).getFullYear() >= parseInt(startYear));
    }

    if (endYear) {
      filtered = filtered.filter(item => new Date(item.date).getFullYear() <= parseInt(endYear));
    }

    if (minRevenue) {
      filtered = filtered.filter(item => item.revenue >= parseFloat(minRevenue));
    }

    if (maxRevenue) {
      filtered = filtered.filter(item => item.revenue <= parseFloat(maxRevenue));
    }

    if (minNetIncome) {
      filtered = filtered.filter(item => item.netIncome >= parseFloat(minNetIncome));
    }

    if (maxNetIncome) {
      filtered = filtered.filter(item => item.netIncome <= parseFloat(maxNetIncome));
    }

    setFilteredData(filtered);
  };

  const years = generateYearOptions(1980, 2025);

  return (
    <div className="filters">
      <div>
        <label>Start Year:</label>
        <select value={startYear} onChange={(e) => setStartYear(e.target.value)}>
          <option value="">Any</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>End Year:</label>
        <select value={endYear} onChange={(e) => setEndYear(e.target.value)}>
          <option value="">Any</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Min Revenue:</label>
        <input
          type="number"
          value={minRevenue}
          onChange={(e) => setMinRevenue(e.target.value)}
          placeholder="Any Revenue"
          onWheel={(e) => e.target.blur()}
        />
      </div>
      <div>
        <label>Max Revenue:</label>
        <input
          type="number"
          value={maxRevenue}
          onChange={(e) => setMaxRevenue(e.target.value)}
          placeholder="Any Revenue"
          onWheel={(e) => e.target.blur()}
        />
      </div>
      <div>
        <label>Min Net Income:</label>
        <input
          type="number"
          value={minNetIncome}
          onChange={(e) => setMinNetIncome(e.target.value)}
          placeholder="Any Income"
          onWheel={(e) => e.target.blur()}
        />
      </div>
      <div>
        <label>Max Net Income:</label>
        <input
          type="number"
          value={maxNetIncome}
          onChange={(e) => setMaxNetIncome(e.target.value)}
          placeholder="Any Income"
          onWheel={(e) => e.target.blur()}
        />
      </div>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;
