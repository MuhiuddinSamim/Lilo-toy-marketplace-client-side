import React from 'react';

const AddToy = () => {

    const handleAddToy=(event)=>{
        event.preventDefault();
        const form=event.target;
        const seller_name=form.seller.value;
        const seller_email=form.email.value;
        const toy_name=form.toy.value;
        const sub_category=form.category.value;
        const photo_url=form.photo.value;
        const price=form.price.value;
        const  availability=form.availability.value;
        const rating=form.rating.value;
        const details=form.description.value;

        const addedToy={seller_name,seller_email,toy_name,sub_category,photo_url,price,availability,rating,details}

        console.log( addedToy)

    }


    return (
        <div className='bg-slate-300 p-10'>
        <h1 className='text-4xl text-orange-500 font-mono font border-l-orange-600 font-extrabold text-center py-6'>What do You want to add?</h1>
        <form onSubmit={handleAddToy}>
             <div className="card-body">
      
      <div className='md:flex '>
          <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" name='seller' placeholder="Seller Name" required className="input input-bordered" />
        </div>
         
          <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type="email" name='email' placeholder="email" required className="input input-bordered" />
        </div>
      </div>
      <div className='md:flex'>
         <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input type="text" name='toy' placeholder="Toy Name" required className="input input-bordered" />
        </div>
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
         {/* <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <input type="number" name="price" required placeholder="Price" className="input input-bordered" min="1" />
</div> */}
      </div>
      <div className='md:flex'>
         <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="photo" name='photo' placeholder="Photo" required className="input input-bordered" />
        </div>
        <div className="form-control md:w-1/2">
         <label className="label">
            <span className="label-text">Price</span>
             </label>
            <input type="number" name="price" required placeholder="Price" className="input input-bordered" min="1" />
         </div>
         
      </div>
      <div className='md:flex'>
         <div className="form-control md:w-1/2">
         <label className="label">
            <span className="label-text">Available quantity</span>
             </label>
            <input type="number" name="availability" required placeholder="Available quantity" className="input input-bordered" min="1" />
         </div>
          <div className="form-control md:w-1/2">
         <label className="label">
            <span className="label-text">Rating</span>
             </label>
            <input type="number" name="rating" required placeholder="Rating" className="input input-bordered" min="1" max='5' />
         </div>

      </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Detail description</span>
          </label>
          <input type="text" name='description' placeholder="Detail description" required className="input input-bordered" />
        </div>  
      </div>
        <div className="form-control w-24 mx-auto my-auto">
          <button className="btn btn-primary ">Submit</button>
        </div>
      
       </form>
        </div>
    );
};

export default AddToy;