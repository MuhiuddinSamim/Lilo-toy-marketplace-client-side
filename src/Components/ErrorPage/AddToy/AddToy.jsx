import React from 'react';

const AddToy = () => {
    return (
        <div>
        <h1 className='text-4xl text-orange-500 font-mono font border-l-orange-600 font-extrabold text-center py-6'>What do You want to add?</h1>
        <form>
             <div className="card-body">
      
      <div className='md:flex '>
          <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" name='Seller' placeholder="Seller Name" required className="input input-bordered" />
        </div>
          <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input type="text" name='toy' placeholder="Toy Name" required className="input input-bordered" />
        </div>
      </div>
      <div className='md:flex'>
          <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Sub Category</span>
  </label>
  <input
    type="text"
    name="category"
    placeholder="Sub Category"
    required
    className="input input-bordered"
    list="categoryOptions"
    onInput={(event) => {
      const inputValue = event.target.value;
      const options = Array.from(document.getElementById("categoryOptions").options).map((option) => option.value);
      if (!options.includes(inputValue)) {
        event.target.value = "";
      }
    }}
  />
  <datalist id="categoryOptions">
    <option value="Bus" />
    <option value="Car" />
    <option value="Jeep" />
    <option value="Antique" />
  </datalist>
</div>
<div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <input type="number" name="price" required placeholder="Price" className="input input-bordered" min="1" />
</div>
      </div>
     
  






        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' required placeholder="password" className="input input-bordered" />
          
        </div>
        
       

        
      </div>

        </form>
        </div>
    );
};

export default AddToy;