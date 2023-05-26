import React, { useEffect, useState } from 'react';
import SingleToyData from './SingleToyData';

const AllToys = () => {
  const [toyData, setToyData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('https://lilo-server-muhiuddinsamim.vercel.app/allToys')
      .then((res) => res.json())
      .then((data) => {
        setToyData(data);
        setFilteredData(data);
      });
  }, []);

  useEffect(() => {
    // Filter the data based on the search query
    const filtered = toyData.filter((toy) =>
      toy.toy_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [toyData, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mx-4 px-1 py-10">
      <h1 className="text-5xl text-center font-bold text-teal-800 my-10">
        All toys
      </h1>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by toy name"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((singleToy, index) => (
              <SingleToyData
                key={singleToy._id}
                index={index}
                singleToy={singleToy}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;



