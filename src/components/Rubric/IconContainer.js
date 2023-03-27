import {
  SentimentDissatisfied,
  SentimentSatisfiedAlt,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied,
} from "@mui/icons-material";

export const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfied color="error" />,
    emptyIcon: <SentimentVeryDissatisfied color="disabled" />,
    label: "Fully Failed",
  },
  2: {
    icon: <SentimentDissatisfied color="warning" />,
    emptyIcon: <SentimentDissatisfied color="disabled" />,
    label: "Partly Failed",
  },
  3: {
    icon: <SentimentSatisfiedAlt color="warning" />,
    emptyIcon: <SentimentSatisfiedAlt color="disabled" />,
    label: "Partly Satisfied",
  },
  4: {
    icon: <SentimentVerySatisfied color="success" />,
    emptyIcon: <SentimentVerySatisfied color="disabled" />,
    label: "Fully Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  if (other.className.includes("MuiRating-iconEmpty")) {
    return <span {...other}>{customIcons[value].emptyIcon}</span>;
  } else {
    return <span {...other}>{customIcons[value].icon}</span>;
  }
}

export default IconContainer;
