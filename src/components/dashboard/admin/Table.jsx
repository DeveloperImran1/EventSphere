import React from 'react';
import GoogleMapComponent from './googlemap';

const Table = () => {
  // Mapping of colors based on popularity
  const colorMap = {
    "blue-500": "bg-blue-500",
    "green-500": "bg-green-500",
    "red-500": "bg-red-500",
    "yellow-500": "bg-yellow-500",
  };

  const products = [
    { no: 1, name: "John Doe", popularity: "blue-500", sales: "45%" },
    { no: 2, name: "Jane Smith", popularity: "green-500", sales: "23%" },
    { no: 3, name: "Alice Johnson", popularity: "red-500", sales: "30%" },
    { no: 4, name: "Michael Brown", popularity: "yellow-500", sales: "60%" },
  ];

  return (
    <>
    <div className="my-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Top Product</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">No</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Popularity</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Sales</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((item) => (
              <tr key={item.no}>
                <td className="px-4 py-2 text-sm">{item.no}</td>
                <td className="px-4 py-2 text-sm">{item.name}</td>
                <td className="px-4 py-2 text-sm">
                  {/* Use the mapped color class */}
                  <hr
                    className={`h-2 ${colorMap[item.popularity]} rounded`}
                    style={{ width: `${item.sales.replace('%', '')}%` }}
                  />
                </td>
                <td className="px-4 py-2 text-sm">
                  <button className={`${colorMap[item.popularity]} text-white px-4 py-1 rounded-lg`}>
                    {item.sales}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div>
      {/* <GoogleMapComponent/> */}
    </div>
    
    </>
  );
};

export default Table;
