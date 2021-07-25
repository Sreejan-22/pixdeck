import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="./unsplash.png" alt="" className="nav-img" />
        <div className="brand-name">Pixdeck</div>
      </div>
      <div className="nav-search-wrapper">
        <i className="eos-icons nav-search-icon">search</i>
        <input
          type="text"
          placeholder="Search by name"
          className="nav-search-bar"
        />
      </div>
      <div className="nav-last-div">
        <button className="add-photo-btn">Add a photo</button>
        <i className="eos-icons toggle-nav-icon">menu</i>
      </div>
    </nav>
  );
};

export default Navbar;
