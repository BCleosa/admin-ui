import React from "react"; 

function Card(props) {
  const { title, link = false, desc } = props;

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center text-gray-02 dark:text-gray-300 mb-2">
        <div className="text-2xl">{title}</div> 
        {link && <div className="text-xs">View All</div>}
      </div>
      <div className="flex-1 bg-white dark:bg-[#2f2f2f] dark:text-white rounded-lg px-6 py-5 shadow-xl">
        {desc}
      </div>
    </div>
  );
}

export default Card;