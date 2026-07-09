import React from "react";
import Icon from "./Icon";

function ExpenseCategoryCard(props) {
  const { icon, category, amount, percentage, trend, items = [] } = props;

  const isUp = trend === "up";

  return (
    <div className="bg-white dark:bg-[#2f2f2f] dark:text-white rounded-lg px-5 py-4 shadow-xl flex flex-col">
      {/* header: icon + kategori + total + trend */}
      <div className="flex items-center mb-4">
        <div className="bg-special-bg text-gray-02 p-3 rounded-lg flex items-center justify-center me-3">
          {icon}
        </div>
        <div>
          <div className="text-gray-02 text-sm capitalize">{category}</div>
          <div className="font-bold text-xl">${amount}</div>
          <div className="flex items-center gap-1 text-xs text-gray-02">
            <span>{percentage}%</span>
            <span className={isUp ? "text-special-red" : "text-special-green"}>
              {isUp ? <Icon.ArrowUp size={14} /> : <Icon.ArrowDown size={14} />}
            </span>
            <span>Compare to the last month</span>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-05 mb-3"></div>

      {/* daftar item transaksi pada kategori ini */}
      <div className="flex flex-col gap-2">
        {items.length === 0 ? (
          <span className="text-xs text-gray-03">Belum ada transaksi</span>
        ) : (
          items.map((detail, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span>{detail.item}</span>
              <div className="text-right">
                <div className="font-bold">${detail.amount}</div>
                {detail.date && (
                  <div className="text-xs text-gray-03">{detail.date}</div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ExpenseCategoryCard;