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
    
    <div className="min-h-screen bg-[#F4F3F0] py-8 md:py-12 px-2 md:px-24">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-[#D2B48C]/30">
        
      
        <div className="bg-[#331A15] p-6 md:p-8 text-center">
          <h2 className="text-2xl md:text-4xl font-serif text-[#D2B48C] mb-2 tracking-wide">
            Coffee Enthusiasts Community
          </h2>
          <p className="text-gray-300 italic text-sm md:text-base">
            Manage your shop's growing family of {users.length} members
          </p>
        </div>

      
        <div className="p-2 md:p-10">
          <div className="overflow-x-auto rounded-lg border border-gray-100">
            <table className="table w-full border-collapse">
              {/* Head */}
              <thead>
                <tr className="bg-[#ECEAE3] text-[#331A15] uppercase text-xs md:text-sm leading-normal">
                  <th className="py-4 px-3 md:px-6 text-left">User</th>
                  <th className="py-4 px-3 md:px-6 text-left">Email Address</th>
                  <th className="py-4 px-3 md:px-6 text-left hidden sm:table-cell">Joined Date</th>
                  <th className="py-4 px-3 md:px-6 text-center">Actions</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-gray-600 text-xs md:text-sm font-light">
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b border-gray-100 hover:bg-[#F4F3F0]/50 transition-colors"
                  >
                    <td className="py-4 px-3 md:px-6 text-left">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="avatar hidden xs:block">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D2B48C]/20 flex items-center justify-center">
                            <FaUserCircle className="text-[#331A15] text-xl md:text-2xl" />
                          </div>
                        </div>
                        <span className="font-bold text-[#331A15] text-sm md:text-base break-words max-w-[80px] md:max-w-none">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-3 md:px-6 text-left">
                      <span className="bg-blue-100 text-blue-700 px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-medium truncate inline-block max-w-[100px] md:max-w-none">
                        {user.email}
                      </span>
                    </td>
                    {/* Joined Date column hidden on very small screens */}
                    <td className="py-4 px-3 md:px-6 text-left font-medium hidden sm:table-cell">
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : "Classic Member"}
                    </td>

                    <td className="py-4 px-3 md:px-6 text-center">
                      <div className="flex items-center justify-center gap-1 md:gap-2">
                        <button
                          className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                          title="View"
                        >
                          <FaEye className="text-sm md:text-base" />
                        </button>

                        <Link to={`/updateUser/${user._id}`}>
                          <button
                            className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition-all shadow-sm"
                            title="Edit"
                          >
                            <FaEdit className="text-sm md:text-base" />
                          </button>
                        </Link>

                        <button
                          onClick={() => handleDelete(user._id)}
                          className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all shadow-sm"
                          title="Delete"
                        >
                          <FaTrashAlt className="text-sm md:text-base" />
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
            <div className="text-center py-20 px-4">
              <p className="text-lg md:text-xl text-gray-400 font-serif">
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