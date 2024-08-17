import "./Navbar.css";
import Logo from "../assets/Logo2.png";
import Logo2 from "../assets/Flag_of_India.png";

function Navbar() {
  return (
    <>
      <nav className="main-nav bg-slate-200 flex justify-between items-center">
        <div className="left">
          <div className="logo ml-6">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="right mr-6">
          <div className="page-list mr-4">
            <div className="travel">
              <i className="fa-solid fa-person-walking-luggage"></i>
              <p>My Trips</p>
            </div>
            <p>Manage your bookings</p>
          </div>
          <div className="register flex">
            <button className="btn bg-blue-500 flex items-center mr-4">
              <div className="btn-logo">
                <img src={Logo} alt="Logo" />
              </div>
              <p>Login or Create Account</p>
              <div className="btn-icon flex items-center">
                <i className="fa-solid fa-caret-down"></i>
              </div>
            </button>
            <button className="btn-2 bg-slate-400 flex items-center">
              <div className="btn-logo">
                <img src={Logo2} alt="Logo2" />
              </div>
              <p>IN | ENG | INR</p>
              <div className="btn-icon flex items-center">
                <i className="fa-solid fa-caret-down"></i>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

