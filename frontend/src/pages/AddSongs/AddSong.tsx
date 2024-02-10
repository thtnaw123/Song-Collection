import "./addsong.css";

const AddSong = () => {
  return (
    <div className="signup-form">
      <div>
        <div className="logo">
          {" "}
          <h1>
            {" "}
            <span>Add</span> Song
          </h1>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">First Name</label>
            <input
              type="firstname"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              placeholder="Enter your first name"
            />

            <label htmlFor="exampleInputEmail1">Last Name</label>
            <input
              type="lastname"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              placeholder="Enter your last name"
            />
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <label htmlFor="exampleInputEmail1">Current City</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your current city"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="signupSubmitBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSong;
