import React, { useState } from "react";

const PostCard = (props) => {
  const { id, userId, title, body } = props; 
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col justify-between p-6 bg-white rounded-xl shadow-lg border border-transparent transition-all duration-300 transform hover:scale-105 hover:border-black hover:bg-pink-50 group text-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-gray-800 capitalize">
          {title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {body}
        </p>
      </div>

      <div className="mt-6">
       <button 
      className={`w-full py-3 rounded-md font-semibold text-white transition-all duration-300 ${clicked ? "bg-special-red2" : "bg-gray-01"} group-hover:brightness-150 active:scale-95 shadow-md`}
      onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
      </div>
    </div>
  );
};

export default PostCard;