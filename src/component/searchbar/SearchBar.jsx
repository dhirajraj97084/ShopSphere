import React, { useState } from "react";

const searchData = [
  {
    name: "fashion",
    image:
      "https://media.istockphoto.com/id/1350027417/photo/young-adult-dancers-in-the-city-on-a-modern-staircase.jpg?b=1&s=612x612&w=0&k=20&c=M77zUbxXdeh-7z13Poyu8Co4I6qB-S8XDBBITZhNM28=",
  },
  {
    name: "shirt",
    image:
      "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "jacket",
    image:
      "https://images.pexels.com/photos/20008913/pexels-photo-20008913/free-photo-of-family-with-two-kids-playing-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "shoes",
    image:
      "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "mobile",
    image:
      "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "laptop",
    image:
      "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
  },
];
function SearchBar() {
  const [search, setSearch] = useState("");
  // filterData
  const filterData = searchData
    .filter((obj) => obj.name.toLowerCase().includes(search))
    .slice(0, 6);
  return (
    <div>
      <div className="search">
        <div className="main">
          <input
            className="py-2 px-2 rounded-md outline-none w-96 sm:w-96 text-black placeholder-slate-800 bg-gray-200 shadow-md"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here"
          />
        </div>
        {/* searchdrop_down */}
        <div className="flex justify-center   absolute bg-gray-200 my-1 rounded-md text-black">
         {search &&  <div className=" w-96 block py-2 px-2 my-2">
            {filterData.length>0 ? <>
              {
              filterData.map((item,index)=>{
                return (
                  <div key={index} className="div">
                  <div className="img flex gap-2 my-2  items-center">
                    <img className="w-10 rounded-md" src={item.image} alt="img" />
                    {item.name}
                  </div>
                  </div>
                )
              })
            }
            </>:
            <><h1>Your product is not available</h1></>}
          </div>}
        </div>

      </div>
    </div>
  );
}

export default SearchBar;
