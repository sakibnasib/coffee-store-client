
import React, { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Signin = () => {
  const { createUser } = useContext(AuthContex); // fixed typo: `use(AuthContex)` => `useContext(AuthContex)`

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your account is created.",
                showConfirmButton: false,
                timer: 1500,
              });
              form.reset();
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error?",
              text: error.message || String(error),
              icon: "question",
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error?",
          text: error.message || String(error),
          icon: "question",
        });
      });
  };

  return (
    <div className="bg-amber-100 p-20">
      <h1 className="text-center text-5xl font-bold p-5">Signin</h1>
      <form onSubmit={handleSignin}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder="Enter name"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">
              Phone Number
            </label>
            <input
              type="text"
              className="input w-full"
              name="phone"
              placeholder="Enter phone number"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">Email</label>
            <input
              type="email"
              className="input w-full"
              name="email"
              placeholder="Enter email"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">Password</label>
            <input
              type="password"
              className="input w-full"
              name="password"
              placeholder="Enter password"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">Address</label>
            <input
              type="text"
              className="input w-full"
              name="address"
              placeholder="Enter address"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">Age</label>
            <input
              type="text"
              className="input w-full"
              name="age"
              placeholder="Enter age"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">Gender</label>
            <input
              type="text"
              className="input w-full"
              name="gender"
              placeholder="Enter gender"
            />
          </fieldset>

          <fieldset className="fieldset rounded-box p-4">
            <label className="label font-semibold text-black">Photo</label>
            <input
              type="text"
              className="input w-full"
              name="photo"
              placeholder="Enter photo URL"
            />
          </fieldset>
        </div>

        <fieldset className="fieldset rounded-box p-4">
          <input
            type="submit"
            className="w-full bg-blue-600 p-2 border-2 text-white font-bold"
            value="Signin"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Signin;
