import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="./unsplash.png" alt="" className="nav-img" />
      <div className="brand-name">My Unsplash</div>
      <div className="nav-search-wrapper">
        <i class="eos-icons nav-search-icon">search</i>
        <input
          type="text"
          placeholder="Search by name"
          className="nav-search-bar"
        />
      </div>
      <button className="add-photo-btn">Add a photo</button>
      <i class="eos-icons toggle-nav-icon">menu</i>
    </div>
  );
};

export default Navbar;
