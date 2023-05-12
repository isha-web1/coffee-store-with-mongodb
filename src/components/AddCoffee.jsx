import React from "react";

const AddCoffee = () => {
  return (
    <div className="p-24">
      <h1 className="text-4xl font-bold text-center text-purple-600">Add a Coffee</h1>
      <form>
        <div className="md:flex mb-8">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Coffee name</span>
          </label>
          <label className="input-group">
            
            <input
              type="text"
              placeholder="Coffee name"
              name="name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Available quantity</span>
          </label>
          <label className="input-group">
            
            <input
              type="text"
              name="quantity"
              placeholder="available quantity"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        </div>
        <div className="md:flex mb-8">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <label className="input-group">
            
            <input
              type="text"
              placeholder="Supplier name"
              name="supplier"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <label className="input-group">
            
            <input
              type="text"
              name="taste"
              placeholder="Taste"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        </div>
        <div className="md:flex mb-8">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <label className="input-group">
            
            <input
              type="text"
              placeholder="Category"
              name="category"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <label className="input-group">
            
            <input
              type="text"
              name="details"
              placeholder="Details"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        </div>
        <div className="md:flex mb-8">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label className="input-group">
            
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered w-full"
            />
          </label>
        </div>
       
        </div>
       
        <input type="submit" value="Add Coffee" className="btn btn-block bg-purple-500" />
      </form>
    </div>
  );
};

export default AddCoffee;
