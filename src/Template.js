import React from 'react';
import { NavLink } from 'react-router-dom';

function Template({ children }) {
  return (
    <div className="sv-bg-color--steel-50">
      <header className="sv-bg-color--blue-gray-200 sv-pv--20">
        <NavLink to="/" className="sv-ml--20 sv-mr--10" exact activeClassName="sv-color--red-500 sv-fw-bold">
          Home
        </NavLink>
        <NavLink to="/state" className="sv-mr--10" exact activeClassName="sv-color--red-500 sv-fw-bold">
          State
        </NavLink>
        <NavLink to="/todo" className="sv-mr--10" exact activeClassName="sv-color--red-500 sv-fw-bold">
          TO-DO
        </NavLink>
        <NavLink to="/mobx" className="sv-mr--10" exact activeClassName="sv-color--red-500 sv-fw-bold">
          Mobx
        </NavLink>
        <NavLink to="/api" className="sv-mr--10" exact activeClassName="sv-color--red-500 sv-fw-bold">
          Mobx + Api
        </NavLink>
      </header>
      <main style={{ height: 'calc(100vh - 65px)' }}>{children}</main>
    </div>
  );
}

export default Template;
