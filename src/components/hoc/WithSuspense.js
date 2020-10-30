import React from "react";
import Loader from "../Loaders/Loader";

function WithSuspense(props) {
  function ComponentWrapper({ Component }) {
    return (
      <React.Suspense fallback={<Loader />}>
        <Component />
      </React.Suspense>
    );
  }

  return <ComponentWrapper {...props} />
}

export default WithSuspense;
