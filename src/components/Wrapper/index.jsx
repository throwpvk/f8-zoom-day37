import clsx from "clsx";
import style from "./Wrapper.module.scss";
import { PropTypes } from "prop-types";
import { useEffect } from "react";

function Wrapper({
  children,
  onClickOutSide,
  style: customStyle = {},
  className,
}) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (onClickOutSide && !event.target.closest(`.${style.wrapper}`)) {
        onClickOutSide();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutSide]);

  return (
    <div className={clsx(style.wrapper, className)} style={customStyle}>
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  onClickOutSide: PropTypes.func,
};

export default Wrapper;
