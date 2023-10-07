import { CSSProperties } from "react";
import backIcon from "../../assets/icons/backIcon.svg";
import closeIcon from "../../assets/icons/closeIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import logo from "../../assets/icons/logo.svg";
import { IconNames } from "../../constants/constants";

interface SVGIconProps {
  iconName: IconNames;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

interface Icons {
  [key: string]: string;
}

const icons: Icons = {
  backIcon: backIcon,
  closeIcon: closeIcon,
  searchIcon: searchIcon,
  logo: logo,
};

export const SVGIcon = ({
  iconName,
  className,
  style,
  onClick,
}: SVGIconProps) => {
  return (
    <img
      src={icons[iconName]}
      alt={icons[iconName]}
      className={className}
      onClick={onClick}
      style={style}
    />
  );
};
