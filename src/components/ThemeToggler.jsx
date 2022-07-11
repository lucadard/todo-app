import { Box } from "@chakra-ui/react";
import { React, useState } from "react";

function ThemeToggler({ onThemeChange }) {
  return (
    <Box
      id="Toggler"
      fontSize="2rem"
      cursor="pointer"
      onClick={() => onThemeChange()}
    >
      {window.localStorage.getItem("chakra-ui-color-mode") === `"light"`
        ? "🌙"
        : "☀️"}
    </Box>
  );
}

export default ThemeToggler;
