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
    const price = form.price.value; // changed
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      price, // changed
      details,
      photo,
    };

    console.log(newCoffee);

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server Response:", data);

        if (data.insertedId) {
          Swal.fire({
            title: "☕ Coffee Added!",
            html: `
              <div style="font-size: 18px; margin-top:10px;">
                Your delicious coffee has been added successfully!
              </div>
            `,
            imageUrl:
              "https://cdn-icons-png.flaticon.com/512/924/924514.png",
            imageWidth: 100,
            imageHeight: 100,
            background: "#F4F3F0",
            color: "#5C4033",
            confirmButtonText: "Brew More ☕",
            confirmButtonColor: "#D2B48C",
            showClass: {
              popup: "animate__animated animate__zoomIn",
            },
            hideClass: {
              popup: "animate__animated animate__zoomOut",
            },
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-[#F4F3F0] min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10">
        <h2 className="text-3xl font-bold text-center mb-4">
          Add New Coffee
        </h2>

        <p className="text-center text-gray-500 mb-10">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <form onSubmit={handleAddCoffee}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="w-full border rounded-md p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Quantity</label>
              <input
                type="text"
                name="quantity"
                placeholder="Enter coffee Quantity"
                className="w-full border rounded-md p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Supplier</label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="w-full border rounded-md p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Taste</label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="w-full border rounded-md p-3"
              />
            </div>

            {/* Changed Section */}
            <div>
              <label className="block mb-2 font-semibold">Price</label>
              <input
                type="text"
                name="price"
                placeholder="Enter coffee price"
                className="w-full border rounded-md p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Details</label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="w-full border rounded-md p-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-semibold">Photo</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="w-full border rounded-md p-3"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-[#D2B48C] hover:bg-[#c49a6c] text-black font-semibold py-3 rounded-md transition"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;