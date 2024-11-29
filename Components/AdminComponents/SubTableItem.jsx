import React from "react";
import { toast } from "react-toastify";

const SubTableItem = ({ email, mongoId, date, deleteEmail }) => {
  const handleClick = () => {
    toast.error("You do not have permission to delete. ");
  };
  const emailDate = new Date(date);

  return (
    <tr className="bg-white dark:bg-transparent border-b text-left">
      <td
        scope="row"
        className="px-6 py-4 hidden sm:table-cell font-medium text-gray-900 dark:text-gray-400 whitespace-nowrap"
      >
        {email ? email : "No Email"}
      </td>
      <td className="px-6 py-4 dark:text-gray-400 hidden sm:table-cell">
        {emailDate.toDateString()}
      </td>
      <td
        onClick={handleClick}
        className="px-6 py-4 text-red-500 cursor-pointer font-bold"
      >
        X
      </td>
    </tr>
  );
};

export default SubTableItem;
