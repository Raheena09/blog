import React from "react";


function Nav(props) {
    const { handleLogout } = props;
   const name= JSON.parse(localStorage.getItem("username"))
  return (
    <section>
      <div>
        <nav>
          <h2>Welcome {name} </h2>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </div>
    </section>
  );
}

export default Nav;
