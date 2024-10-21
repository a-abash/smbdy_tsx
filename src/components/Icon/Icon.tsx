type IconProps = {
  iconName: string;
  size?: "small" | "medium" | "large" | number;
  color?: string;
  title?: string;
  className?: string;
  sx?: object;
  onClick?: () => void;
};

function getIconSize(size?: "small" | "medium" | "large" | number) {
  if (!size) {
    return {
      width: 14,
      height: 14,
    };
  }
  if (typeof size === "string") {
    return styleIcon[size];
  }
  return {
    width: size,
    height: size,
  };
}

export function Icon({ iconName, color, size, ...props }: IconProps) {
  return (
    <span
      className={`custom-icon ${props.className}`}
      style={{
        ...styleIcon.root,
        ...getIconSize(size),
        color: color || "grey.600",
        ...props.sx,
      }}
      onClick={props.onClick}
    >
      <svg height="100%" width="100%" fill="currentColor">
        <use xlinkHref={`/sprites/sprite.svg#${iconName}`} />
      </svg>
    </span>
  );
}

const styleIcon = {
  root: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease-in-out",
  },
  small: {
    width: 20,
    height: 20,
  },
  medium: {
    width: 24,
    height: 24,
  },
  large: {
    width: 32,
    height: 32,
  },
};
