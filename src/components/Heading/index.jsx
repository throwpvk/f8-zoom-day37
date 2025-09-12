import clsx from "clsx";
import style from "./Heading.module.scss";
import { PropTypes } from "prop-types";

function Heading({
  level = 3,
  onDetailClick = null,
  children,
  wrapperStyle: wrapperStyle = {},
  headingStyle: headingCustomStyle = {},
  detailStyle: detailCustomStyle = {},
  className,
}) {
  const HeadingTag = `h${level || 3}`;
  return (
    <div className={clsx(style.heading, className)} style={wrapperStyle}>
      <HeadingTag style={headingCustomStyle}>{children}</HeadingTag>
      {onDetailClick && (
        <button
          onClick={onDetailClick}
          className={style.detail}
          style={detailCustomStyle}
        >
          xem thêm
        </button>
      )}
    </div>
  );
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  onDetailClick: PropTypes.func,
  wrapperStyle: PropTypes.object,
  headingStyle: PropTypes.object,
  detailStyle: PropTypes.object,
  className: PropTypes.string,
};

export default Heading;
