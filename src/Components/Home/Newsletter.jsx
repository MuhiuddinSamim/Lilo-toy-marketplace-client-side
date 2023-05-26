import React, { useRef, useState } from "react";

const Newsletter = () => {
      const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the email to a server or perform any necessary actions
    console.log(email);
    // Reset the email input field
    setEmail("");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
    return (
          <div className="newsletter text-center bg-fuchsia-200 py-20">
      <h2 className="text-3xl font-bold pt-10">Subscribe for Our Offer and Update</h2>
      <form onSubmit={handleSubmit} className="my-4">
        <input
        className="me-4 p-4"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={handleChange}
          required
        />
        <button className="btn btn-warning" type="submit">Subscribe</button>
      </form>
    </div>
    );
};

export default Newsletter;