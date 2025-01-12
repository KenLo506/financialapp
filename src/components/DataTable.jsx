import React, { useState } from 'react';

const DataTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;

    const sorted = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [data, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'ascending' ? 'descending' : 'ascending',
    }));
  };

  const renderSortIcon = (column) => {
    if (sortConfig.key === column) {
      return sortConfig.direction === 'ascending' ? '▲' : '▼';
    }
    return null;
  };

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th onClick={() => handleSort('date')}>
            Date {renderSortIcon('date')}
          </th>
          <th onClick={() => handleSort('revenue')}>
            Revenue {renderSortIcon('revenue')}
          </th>
          <th onClick={() => handleSort('netIncome')}>
            Net Income {renderSortIcon('netIncome')}
          </th>
          <th onClick={() => handleSort('grossProfit')}>
            Gross Profit {renderSortIcon('grossProfit')}
          </th>
          <th onClick={() => handleSort('eps')}>
            EPS (Earning Per Share) {renderSortIcon('eps')}
          </th>
          <th onClick={() => handleSort('operatingIncome')}>
            Operating Income {renderSortIcon('operatingIncome')}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.revenue.toLocaleString()}</td>
            <td>{item.netIncome.toLocaleString()}</td>
            <td>{item.grossProfit.toLocaleString()}</td>
            <td>{item.eps.toFixed(2)}</td>
            <td>{item.operatingIncome.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
