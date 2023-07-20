import { Link } from "react-router-dom";
const SectionTitle = ({ title, subTitle, btnValue }) => {
  return (
    <div className="section__title">
      <div className="title">
        <h1 className="md__heading">{title}</h1>
        <p>{subTitle}</p>
      </div>
      {btnValue && (
        <Link to={"/"} className="btn btn__view">
          {btnValue}
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
