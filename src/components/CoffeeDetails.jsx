import React from "react";
import { useLoaderData, Link } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  const { name, chef, supplier, taste, price, details, photo } = coffee;

  return (
    <div className="min-h-screen bg-[#F4F3F0] py-12 px-6">
      <Link to="/" className="text-lg font-semibold mb-8 inline-block">
        ← Back to home
      </Link>

      <div className="max-w-5xl mx-auto bg-[#F4F3F0] rounded-xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-12">
        <div className="w-64">
          <img src={photo} alt={name} className="w-full object-cover" />
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-[#3C2F2F] mb-4">Niceties</h2>

          <p>
            <span className="font-bold">Name:</span> {name}
          </p>
          <p>
            <span className="font-bold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-bold">Supplier:</span> {supplier}
          </p>
          <p>
            <span className="font-bold">Taste:</span> {taste}
          </p>
          <p>
            <span className="font-bold">Price:</span> {price} Taka
          </p>
          <p>
            <span className="font-bold">Details:</span> {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
