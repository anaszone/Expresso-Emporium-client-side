import React, { useState } from "react";
import { useLoaderData, Link } from "react-router";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUserCircle, FaEye, FaEdit } from "react-icons/fa";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#331A15",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been removed.", "success");
              const remainingUsers = users.filter((u) => u._id !== id);
              setUsers(remainingUsers);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#F4F3F0] py-12 px-4 md:px-24">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-[#D2B48C]/30">
        {/* Header Section */}
        <div className="bg-[#331A15] p-8 text-center">
          <h2 className="text-4xl font-serif text-[#D2B48C] mb-2 tracking-wide">
            Coffee Enthusiasts Community
          </h2>
          <p className="text-gray-300 italic">
            Manage your shop's growing family of {users.length} members
          </p>
        </div>

        {/* Table Container */}
        <div className="p-6 md:p-10">
          <div className="overflow-x-auto rounded-lg border border-gray-100">
            <table className="table w-full">
              {/* Head */}
              <thead>
                <tr className="bg-[#ECEAE3] text-[#331A15] uppercase text-sm leading-normal">
                  <th className="py-4 px-6 text-left rounded-tl-lg">User</th>
                  <th className="py-4 px-6 text-left">Email Address</th>
                  <th className="py-4 px-6 text-left">Joined Date</th>
                  <th className="py-4 px-6 text-center rounded-tr-lg">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-600 text-sm font-light">
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b border-gray-100 hover:bg-[#F4F3F0]/50 transition-colors"
                  >
                    <td className="py-4 px-6 text-left">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="w-10 h-10 rounded-full bg-[#D2B48C]/20 flex items-center justify-center">
                            <FaUserCircle className="text-[#331A15] text-2xl" />
                          </div>
                        </div>
                        <span className="font-bold text-[#331A15] text-base">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-left">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {user.email}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-left font-medium">
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : "Classic Member"}
                    </td>

                    {/* ACTIONS COLUMN */}
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {/* View Button */}
                        <button
                          className="w-9 h-9 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                          title="View Details"
                        >
                          <FaEye />
                        </button>

                        {/* Edit Button */}
                        <Link to={`/updateUser/${user._id}`}>
                          <button
                            className="w-9 h-9 flex items-center justify-center bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-sm"
                            title="Edit User"
                          >
                            <FaEdit />
                          </button>
                        </Link>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="w-9 h-9 flex items-center justify-center bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm"
                          title="Delete User"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {users.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400 font-serif">
                No coffee lovers found in the database yet!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
