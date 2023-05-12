import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {

  const handleAddCoffee = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name, quantity, supplier, taste, category, details, photo}
    console.log(newCoffee)

    fetch('http://localhost:5000/coffee',{
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'success',
          text: 'user added successfully',
          icon: 'success',
          confirmButtonText: 'ok'
        })

      }
    })
  }
  return (
    <div className="p-24">
      <h1 className="text-4xl font-bold text-center text-purple-600">Add a Coffee</h1>
      <form onSubmit={handleAddCoffee}>
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
