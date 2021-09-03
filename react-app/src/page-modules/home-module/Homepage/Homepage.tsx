import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../../data/reducers";

import * as authActions from "data/reducers/auth.reducer";

const Homepage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(authActions.getUserData());
  }, []);

  const data = useSelector((root: RootState) => root.authReducer.userData);
  const loggedIn = useSelector(
    (root: RootState) => root.authReducer.isloggedIn
  );

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <p className="text-4xl">Trying out Static Web apps authentication</p>
      <p className="text-blue-500">Go to `/login` to try out logging in</p>
      <p>
        Current user name is -{" "}
        {JSON.stringify(data?.clientPrincipal?.userDetails)}
      </p>
      {!loggedIn ? (
        <button
          onClick={() => {
            window.location.replace("/login");
          }}
          className="bg-green-400 p-2 px-4"
        >
          Click here to login
        </button>
      ) : (
        <a href="/.auth/logout" className="bg-blue-400 p-2 px-4">
          Log out
        </a>
      )}
    </div>
  );
};

export default Homepage;
