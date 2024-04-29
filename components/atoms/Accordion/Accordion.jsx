import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Accordion as MuiAccordion } from "@mui/joy";
import { AccordionGroup } from "@mui/joy";
import { AccordionDetails } from "@mui/joy";
import { AccordionSummary } from "@mui/joy";

function Accordion(props) {
  const {
    panels,
    accordionProps,
    accordionGroupProps,
    accordionSummaryProps,
    accordionDetailsProps,
  } = props;

  return (
    <ThemeWrapper>
      <AccordionGroup {...accordionGroupProps}>
        {panels.map((panel) => {
          return (
            <MuiAccordion key={panel.id} {...accordionProps}>
              <AccordionSummary {...accordionSummaryProps}>
                {panel.title}
              </AccordionSummary>
              <AccordionDetails {...accordionDetailsProps}>
                {panel.content}
              </AccordionDetails>
            </MuiAccordion>
          );
        })}
      </AccordionGroup>
    </ThemeWrapper>
  );
}

export default Accordion;
