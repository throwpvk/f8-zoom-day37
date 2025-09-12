import clsx from "clsx";
import style from "./SearchItem.module.scss";
import { PropTypes } from "prop-types";

function SearchItem({
  children,
  image,
  wrapperStyle: wrapperStyle = {},
  imageStyle: imageStyle = {},
  textStyle: textStyle = {},
  className,
}) {
  return (
    <div className={clsx(style.searchItem, className)} style={wrapperStyle}>
      <img src={image} alt="image" style={imageStyle} />
      <p style={textStyle}>{children}</p>
    </div>
  );
}

SearchItem.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  wrapperStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  textStyle: PropTypes.object,
  className: PropTypes.string,
};

export default SearchItem;
