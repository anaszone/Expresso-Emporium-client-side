import React from "react";
import { useLoaderData } from "react-router";
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

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      price,
      details,
      photo,
    };

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-[#F4F3F0] p-8 md:p-24">
      <div className="max-w-6xl mx-auto mb-8">
        <a
          href="/"
          className="flex items-center gap-2 text-[#374151] font-serif text-2xl hover:text-[#D2B48C] transition-colors"
        >
          <span>&larr;</span>{" "}
          <span style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>
            Back to home
          </span>
        </a>
      </div>

      <div className="max-w-6xl mx-auto bg-[#F4F3F0] py-16 px-8 md:px-28 rounded-md shadow-sm border border-gray-200">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2
            className="text-4xl font-serif text-[#374151] mb-6"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
          >
            Update Existing Coffee Details
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Updating info for:{" "}
            <span className="text-[#331A15] font-bold">{name}</span>
          </p>
        </div>

        <form onSubmit={handleUpdateCoffee} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Name */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold mb-2 block">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name} // Default Value Set
                placeholder="Enter coffee name"
                className="w-full p-3 bg-white border-none rounded-md focus:outline-[#D2B48C]"
              />
            </div>

            {/* Chef */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold mb-2 block">
                  Chef
                </span>
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef} // Default Value Set
                placeholder="Enter coffee chef"
                className="w-full p-3 bg-white border-none rounded-md focus:outline-[#D2B48C]"
              />
            </div>

            {/* Supplier */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold mb-2 block">
                  Supplier
                </span>
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier} // Default Value Set
                placeholder="Enter coffee supplier"
                className="w-full p-3 bg-white border-none rounded-md focus:outline-[#D2B48C]"
              />
            </div>

            {/* Taste */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold mb-2 block">
                  Taste
                </span>
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste} // Default Value Set
                placeholder="Enter coffee taste"
                className="w-full p-3 bg-white border-none rounded-md focus:outline-[#D2B48C]"
              />
            </div>

            {/* Price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold mb-2 block">
                  Price
                </span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price} // Default Value Set
                placeholder="Enter coffee price"
                className="w-full p-3 bg-white border-none rounded-md focus:outline-[#D2B48C]"
              />
            </div>

            {/* Details */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold mb-2 block">
                  Details
                </span>
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details} // Default Value Set
                placeholder="Enter coffee details"
                className="w-full p-3 bg-white border-none rounded-md focus:outline-[#D2B48C]"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-semibold mb-2 block">
                Photo
              </span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo} // Default Value Set
              placeholder="Enter photo URL"
              className="w-full p-3 bg-white border-none rounded-md focus:outline-[#D2B48C]"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#D2B48C] border-2 border-[#331A15] text-[#331A15] font-serif text-2xl py-3 rounded-md cursor-pointer hover:bg-[#b89a74] transition-all"
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
