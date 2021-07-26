import "./Navbar.css";

const Navbar = ({ setQuery }) => {
  let debounceTimeout = 0;

  function debounceSearch(e) {
    const value = e.target.value;
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => {
      setQuery(value);
    }, 300);
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => window.location.reload()}>
        <img src="./unsplash.png" alt="" className="nav-img" />
        <div className="brand-name">Pixdeck</div>
      </div>
      <div className="nav-search-wrapper">
        <i className="eos-icons nav-search-icon">search</i>
        <input
          type="text"
          placeholder="Search by name"
          className="nav-search-bar"
          // value={query}
          onChange={(e) => debounceSearch(e)}
        />
      </div>
      {/* <div className="nav-last-div">
        <button className="add-photo-btn">Add a photo</button>
        <i className="eos-icons toggle-nav-icon">menu</i>
      </div> */}
    </nav>
  );
};

export default Navbar;
