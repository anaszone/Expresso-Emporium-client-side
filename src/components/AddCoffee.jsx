import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      price,
      details,
      photo,
    };

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "☕ Coffee Added!",
            html: `
              <div style="font-size: 16px; margin-top:10px;">
                Your delicious coffee has been added successfully!
              </div>
            `,
            imageUrl: "https://cdn-icons-png.flaticon.com/512/924/924514.png",
            imageWidth: 80,
            imageHeight: 80,
            background: "#F4F3F0",
            color: "#5C4033",
            confirmButtonText: "Brew More ☕",
            confirmButtonColor: "#D2B48C",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    
    <div className="bg-[#F4F3F0] min-h-screen py-8 px-4 md:py-16 md:px-24">
     
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-6 md:p-12 border border-[#D2B48C]/20">
        
      
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#331A15] mb-4">
            Add New Coffee
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Fill in the details below to add a new exotic blend to our collection. 
            Keep your customers delighted with the best beans from around the world.
          </p>
        </div>

        <form onSubmit={handleAddCoffee} className="space-y-6">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[#331A15]">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="w-full bg-[#F4F3F0] border-none rounded-md p-3 focus:outline-[#D2B48C]"
                required
              />
            </div>

            {/* Quantity */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[#331A15]">Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Enter coffee quantity"
                className="w-full bg-[#F4F3F0] border-none rounded-md p-3 focus:outline-[#D2B48C]"
                required
              />
            </div>

            {/* Supplier */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[#331A15]">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="w-full bg-[#F4F3F0] border-none rounded-md p-3 focus:outline-[#D2B48C]"
                required
              />
            </div>

            {/* Taste */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[#331A15]">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="w-full bg-[#F4F3F0] border-none rounded-md p-3 focus:outline-[#D2B48C]"
                required
              />
            </div>

            {/* Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[#331A15]">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter coffee price"
                className="w-full bg-[#F4F3F0] border-none rounded-md p-3 focus:outline-[#D2B48C]"
                required
              />
            </div>

            {/* Details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-[#331A15]">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="w-full bg-[#F4F3F0] border-none rounded-md p-3 focus:outline-[#D2B48C]"
                required
              />
            </div>

         
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text font-bold text-[#331A15]">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="w-full bg-[#F4F3F0] border-none rounded-md p-3 focus:outline-[#D2B48C]"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-[#D2B48C] border-2 border-[#331A15] hover:bg-[#331A15] hover:text-white text-[#331A15] font-serif font-bold text-xl py-3 rounded-md transition-all shadow-md active:scale-95"
          >
            Add Coffee ☕
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;