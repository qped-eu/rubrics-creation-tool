import { TaskSelector } from "../components/TaskManager";
import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { useReadLocalStorage } from "usehooks-ts";

jest.mock("usehooks-ts");

const mockKey = "all_tasks";
const mockData = [
  {
    name: "Test-task",
    courseIdx: 0,
    week: "2",
    maxPoints: "4",
    differentiationIdx: 0,
    topic: "logical operators",
    deliverables: ["IO1 - TILEd assignment"],
    activeFeatures: [
      {
        key: "modularity",
        checked: false,
        weight: 1,
      },
      {
        key: "data_types",
        checked: true,
        weight: "3",
      },
      {
        key: "readability",
        checked: false,
        weight: 1,
      },
      {
        key: "dry_principle",
        checked: true,
        weight: 1,
      },
      {
        key: "flow",
        checked: false,
        weight: 1,
      },
      {
        key: "api_documentation",
        checked: false,
        weight: 1,
      },
      {
        key: "correctness",
        checked: false,
        weight: 1,
      },
      {
        key: "robustness",
        checked: false,
        weight: 1,
      },
      {
        key: "test_traceability",
        checked: false,
        weight: 1,
      },
      {
        key: "test_completeness",
        checked: false,
        weight: 1,
      },
      {
        key: "pg_external_design",
        checked: false,
        weight: 1,
      },
      {
        key: "pg_external_specification",
        checked: true,
        weight: "2",
      },
      {
        key: "pg_external_tests",
        checked: false,
        weight: 1,
      },
      {
        key: "pg_internal_analysis",
        checked: false,
        weight: 1,
      },
      {
        key: "pg_internal_design",
        checked: false,
        weight: 1,
      },
      {
        key: "pg_internal_specification",
        checked: false,
        weight: 1,
      },
      {
        key: "pg_internal_tests",
        checked: false,
        weight: 1,
      },
      {
        key: "pg_implementation_analysis",
        checked: false,
        weight: 1,
      },
      {
        key: "pg_implementation_design",
        checked: false,
        weight: 1,
      },
      {
        key: "pg_implementation_coding",
        checked: false,
        weight: 1,
      },
      {
        key: "pg_implementation_tests",
        checked: false,
        weight: 1,
      },
    ],
    description: "Task description",
    additionalComments: "Some additional comments",
  },
];

describe("<TaskSelector />", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("check task selector item", () => {
    useReadLocalStorage.mockImplementation((key) => mockData);
    render(<TaskSelector />);
    localStorage.setItem(mockKey, JSON.stringify(mockData));

    const selectorButton = within(
      screen.getByTestId("task-selector")
    ).getByRole("button");

    expect(selectorButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.mouseDown(selectorButton);

    const taskItem = screen.getByText(/Test-task/i);

    expect(selectorButton).toHaveAttribute("aria-expanded", "true");
    expect(taskItem).toBeInTheDocument();

    fireEvent.click(taskItem);

    expect(selectorButton).toHaveAttribute("aria-expanded", "false");
    expect(selectorButton).toHaveTextContent(/Test-task/i);
  });

  it("check fill out rubric button", () => {
    useReadLocalStorage.mockImplementation((key) => mockData);
    render(<TaskSelector />);
    localStorage.setItem(mockKey, JSON.stringify(mockData));

    const selectorButton = within(
      screen.getByTestId("task-selector")
    ).getByRole("button");
    const fillOutRubricButton = screen.getByTestId("fill-out-rubric-button");

    expect(fillOutRubricButton).toHaveClass("Mui-disabled");

    fireEvent.mouseDown(selectorButton);

    const taskItem = screen.getByText(/Test-task/i);

    fireEvent.click(taskItem);

    expect(fillOutRubricButton).not.toHaveClass("Mui-disabled");
  });
});
