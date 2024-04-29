import React from "react";
import Accordion from "./Accordion";

export default {
  title: "Atoms/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};
export const Example = {
  args: {
    accordionGroupProps: {},
    accordionSummaryProps: {},
    accordionDetailsProps: {},
    accordionProps: {
      color: "danger",
      disabled: false,
      onChange: () => {
        console.log("Accordion changed");
      },
    },
    panels: [
      { id: 1, title: "Panel 1", content: "Content 1" },
      { id: 2, title: "Panel 2", content: "Content 2" },
      { id: 3, title: "Panel 3", content: "Content 3" },
    ],
  },
};
