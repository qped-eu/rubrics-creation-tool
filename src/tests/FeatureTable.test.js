import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
  queryByTestId,
} from "@testing-library/react";
import { useLocalStorage } from "usehooks-ts";
import FeatureTable from "../components/Rubric/FeatureTable";

jest.mock("usehooks-ts");

const features = {
  key: "rubric_features",
  data: [
    {
      name: "Data Types",
      key: "data_types",
      level: "basic",
      examples: [
        [
          {
            key: "1",
            mutex_key: "1",
            desc: "Wrong data types",
            desc_long:
              "The choice of some data types is wrong, e.g., an integer is used when a boolean is more suitable.",
            checked: true,
          },
          {
            key: "2",
            mutex_key: "1",
            desc: "Unnecessary complex types",
            desc_long:
              "Unnecessary use of more complex types. E.g., the result of an integer computation is stored in a double variable.",
            checked: true,
          },
          {
            key: "3",
            mutex_key: "2",
            desc: "Unnecessary type casts",
            desc_long:
              'Manually casting types unnecessarily. E.g., (Object) \\"Hello World!\\".',
            checked: true,
          },
          {
            key: "4",
            mutex_key: "2",
            desc: "Confusing implicit casting",
            desc_long: "Implicitly using toString() when not intended.",
            checked: false,
          },
        ],
        [
          {
            key: "1",
            mutex_key: "1",
            desc: "Appropriate data types",
            desc_long:
              "The choice of the data types is correct, e.g., an integer is used when an integer is necessary",
            checked: false,
          },
          {
            key: "2",
            mutex_key: "2",
            desc: "Appropriate data structures",
            desc_long:
              "Complex data structures are only used when needed, e.g., ArrayList instead of array when size varies dynamically. No unnecessary coercion or casts necessary.",
            checked: false,
          },
        ],
      ],
    },
    {
      name: "DRY principle",
      key: "dry_principle",
      level: "basic",
      examples: [
        [
          {
            key: "1",
            mutex_key: "1",
            desc: "Repeated code",
            desc_long: "Repeat snippets of code quite often.",
            checked: false,
          },
          {
            key: "2",
            mutex_key: "2",
            desc: "Magic numbers",
            desc_long:
              "Frequently used numbers or Strings with a specific meaning and/or derived values are hard-coded (magic numbers).",
            checked: false,
          },
        ],
        [
          {
            key: "1",
            mutex_key: "1",
            desc: "Helper functions are used",
            desc_long: "Helper functions are used in order to reuse code.",
            checked: false,
          },
          {
            key: "2",
            mutex_key: "2",
            desc: "Use of constants",
            desc_long:
              "Symbolic (named) constants are used and they are kept in a common place.",
            checked: false,
          },
        ],
      ],
    },
    {
      name: "PG - Extern - Specification",
      key: "pg_external_specification",
      level: "procedural_guidance",
      examples: [
        [],
        [
          {
            key: "1",
            mutex_key: "1",
            desc: "Informal pre- and postconditions",
            desc_long:
              "Giving informal preconditions and postconditions for the methods in the API in terms of the application domain.",
            checked: false,
          },
          {
            key: "2",
            mutex_key: "2",
            desc: "Specification for robustness",
            desc_long:
              "Providing robustness by specifying the desired behavior in case satisfying the postcondition is not possible (e.g. throwing exceptions, asking for user input, using default values).",
            checked: false,
          },
          {
            key: "3",
            mutex_key: "3",
            desc: "Well-named subspecifications",
            desc_long:
              "Organizing the case analysis in the specification into well-named subspecifications.",
            checked: false,
          },
          {
            key: "4",
            mutex_key: "4",
            desc: "Completeness of subcontracts",
            desc_long: "Completeness of subcontracts",
            checked: false,
          },
        ],
      ],
    },
  ],
};

const showTooltips = {
  key: "rubric_showTooltips",
  data: true,
};

const showPoints = {
  key: "rubric_points",
  data: [2, 4, 3],
};

const finalPoints = {
  key: "rubric_finalPoints",
  data: 2,
};

const featurePoints = [2, 4, 3];
const setPoints = jest.fn();
const setTotalPoints = jest.fn();
const totalPointsCalculated = 2;
const maxPoints = 4;

describe("<FeatureTable />", () => {
  beforeEach(() => {
    window.localStorage.clear();

    useLocalStorage.mockImplementation((key, defaultValue) => {
      if (key === features.key) {
        return [features.data, jest.fn()];
      }
      if (key === showTooltips.key) {
        return [showTooltips.data, jest.fn()];
      }
      if (key === showPoints.key) {
        return [showPoints.data, jest.fn()];
      }
      if (key === finalPoints.key) {
        return [finalPoints.data, jest.fn()];
      }
      return [null, jest.fn()];
    });
    localStorage.setItem(features.key, JSON.stringify(features.data));
    localStorage.setItem(showTooltips.key, JSON.stringify(showTooltips.data));
    localStorage.setItem(showPoints.key, JSON.stringify(showPoints.data));
    localStorage.setItem(finalPoints.key, JSON.stringify(finalPoints.data));
  });

  it("check tooltip", () => {
    render(
      <FeatureTable
        featurePoints={featurePoints}
        setPoints={setPoints}
        setTotalPoints={setTotalPoints}
        totalPointsCalculated={totalPointsCalculated}
        maxPoints={maxPoints}
      />
    );

    const example = screen.getByText(/Wrong[\n|\r|\s]+data[\n|\r|\s]+types/i);

    expect(screen.queryByRole("tooltip")).toBeNull();

    fireEvent.mouseOver(example);

    waitFor(() => expect(screen.getByRole("tooltip")).toBeInTheDocument());
  });

  it("check rating", () => {
    render(
      <FeatureTable
        featurePoints={featurePoints}
        setPoints={setPoints}
        setTotalPoints={setTotalPoints}
        totalPointsCalculated={totalPointsCalculated}
        maxPoints={maxPoints}
      />
    );

    const ratings = screen.getAllByTestId("feature-rating");

    for (let i = 0; i < ratings.length && i < featurePoints.length; i++) {
      const rating = ratings[i];
      const value = featurePoints[i];

      for (let j = 1; j <= 4; j++) {
        if (value === j) {
          expect(
            within(rating).queryByTestId(`rating-${j}-selected`)
          ).toBeInTheDocument();
        } else {
          expect(
            within(rating).queryByTestId(`rating-${j}-not-selected`)
          ).toBeInTheDocument();
        }
      }
    }
  });
});
