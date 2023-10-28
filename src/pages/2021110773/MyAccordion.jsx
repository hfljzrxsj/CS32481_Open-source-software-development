import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import GitHubSvg from './GitHubSvg';
export default function MyAccordion () {
  return (
    <div className="MUI">
      <h3>Accordion</h3>
      <Accordion className="Accordion">
        <AccordionSummary
          aria-controls="panel1a-content"
        >
          面板1
        </AccordionSummary>
        <AccordionDetails>
          <Typography><GitHubSvg></GitHubSvg></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2a-content">
          面板2
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            textAlign: 'center',
            fontFamily: "Comic Sans MS",
          }}><a href="http://blog.nng-hrb.buzz/MUI-demo/" target="_blank" rel="noreferrer">Hello World</a></Typography>
        </AccordionDetails>
      </Accordion>
    </div >
  );
}
