import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div className="h-screen w-full p-1 flex justify-center items-center bg-gray-200">
      <form className="border shadow-md rounded-lg p-6 bg-white">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl text-blue-600 font-bold pb-5">HealthBD</h1>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="Email"
            className="text-black-300 font-semi-bold text-md py-2"
          >
            Email
          </label>
          <input type="email" name="email" className="border rounded-sm p-2" />
        </div>
        <div className="flex flex-col ">
          <label
            htmlFor="Password"
            className="text-black-300 font-semi-bold text-md py-2"
          >
            Password
          </label>
          <input type="email" name="email" className="border rounded-sm p-2" />
        </div>
        <div className="flex flex-col text-xs mt-6">
          <p>
            By clicking Agree & Join or continue,you agree to the HealthBD User
            Agreement,
            <br />
            Privacy Policy and Cookie Policy
          </p>
        </div>
        <div className="h-10 w-5/6 bg-blue-600 mt-6 flex justify-center items-center ml-6 rounded-md ">
          <button className="text-white text-xs">Agree & Join</button>
        </div>
        <div className="flex flex-row justify-center items-center my-3">
          <hr />
          <span className="text-sm font-bold">or</span> <hr />
        </div>
        <div className="flex justify-center items-center mt-2">
          <h1 className="text-sm font-bold">
            Dont have an account on HealthBD ?
            <Link to="/signup" className="text-xs text-blue-600 font-bold">
              {" "}
              Sign up
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Signin;
