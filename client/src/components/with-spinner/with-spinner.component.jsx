import React from "react";

import Spinner from "../spinner/spinner.component";

const WithSpinner = WrapperComponent => ({ isLoading, ...props }) => {
  return isLoading ? <Spinner /> : <WrapperComponent {...props} />;
};

export default WithSpinner;
