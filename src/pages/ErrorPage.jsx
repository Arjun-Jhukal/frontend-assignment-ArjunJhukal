import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="error__page">
      <div className="container">
        <div className="error__page__content">
          <h1 className="xl__heading">404</h1>
          <h1 className="sm__heading">Page Not Found</h1>
          <p>The Page You are trying to access is not found, it might be deleted or moved somewhere else</p>
          <Link to={"/"} className="btn btn__primary">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
