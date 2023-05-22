import {
  SentimentDissatisfied,
  SentimentSatisfiedAlt,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied,
} from "@mui/icons-material";

export const customIcons = {
  1: {
    icon: (
      <SentimentVeryDissatisfied
        color="error"
        data-testid="rating-1-selected"
      />
    ),
    emptyIcon: (
      <SentimentVeryDissatisfied
        color="disabled"
        data-testid="rating-1-not-selected"
      />
    ),
    label: "Fully Failed",
  },
  2: {
    icon: (
      <SentimentDissatisfied color="warning" data-testid="rating-2-selected" />
    ),
    emptyIcon: (
      <SentimentDissatisfied
        color="disabled"
        data-testid="rating-2-not-selected"
      />
    ),
    label: "Partly Failed",
  },
  3: {
    icon: (
      <SentimentSatisfiedAlt color="warning" data-testid="rating-3-selected" />
    ),
    emptyIcon: (
      <SentimentSatisfiedAlt
        color="disabled"
        data-testid="rating-3-not-selected"
      />
    ),
    label: "Partly Satisfied",
  },
  4: {
    icon: (
      <SentimentVerySatisfied color="success" data-testid="rating-4-selected" />
    ),
    emptyIcon: (
      <SentimentVerySatisfied
        color="disabled"
        data-testid="rating-4-not-selected"
      />
    ),
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
