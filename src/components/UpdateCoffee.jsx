import React from "react";
import { useLoaderData, Link } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, price, details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, chef, supplier, taste, price, details, photo };

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
            confirmButtonColor: "#331A15"
          });
        }
      });
  };

  return (
    
    <div className="min-h-screen bg-[#F4F3F0] p-4 md:p-12 lg:p-24">
      <div className="max-w-6xl mx-auto mb-6 md:mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#374151] font-serif text-xl md:text-2xl hover:text-[#D2B48C] transition-colors"
        >
          <span>&larr;</span>
          <span style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}>Back to home</span>
        </Link>
      </div>

    
      <div className="max-w-6xl mx-auto bg-[#F4F3F1] py-10 md:py-16 px-4 md:px-12 lg:px-28 rounded-md shadow-sm border border-gray-200">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-[#374151] mb-4">
            Update Existing Coffee Details
          </h2>
          <p className="text-gray-500 text-sm md:text-lg leading-relaxed">
            Updating info for: <span className="text-[#331A15] font-bold">{name}</span>
          </p>
        </div>

        <form onSubmit={handleUpdateCoffee} className="space-y-4 md:space-y-6">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-6">
            
            {/* Field Template */}
            {[
              { label: "Name", name: "name", val: name },
              { label: "Chef", name: "chef", val: chef },
              { label: "Supplier", name: "supplier", val: supplier },
              { label: "Taste", name: "taste", val: taste },
              { label: "Price", name: "price", val: price },
              { label: "Details", name: "details", val: details }
            ].map((field) => (
              <div key={field.name} className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg md:text-xl font-semibold mb-1 block">
                    {field.label}
                  </span>
                </label>
                <input
                  type="text"
                  name={field.name}
                  defaultValue={field.val}
                  placeholder={`Enter coffee ${field.label.toLowerCase()}`}
                  className="w-full p-3 bg-white border-none rounded-md focus:ring-2 focus:ring-[#D2B48C] outline-none"
                />
              </div>
            ))}
          </div>

          {/* Photo URL: Full Width */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg md:text-xl font-semibold mb-1 block">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="w-full p-3 bg-white border-none rounded-md focus:ring-2 focus:ring-[#D2B48C] outline-none"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-[#D2B48C] border-2 border-[#331A15] text-[#331A15] font-serif text-xl md:text-2xl py-3 rounded-md hover:bg-[#331A15] hover:text-white transition-all active:scale-[0.98]"
            >
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;