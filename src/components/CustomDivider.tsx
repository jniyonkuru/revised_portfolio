
import React from "react"
import { Divider } from "@mui/material";

const CustomDivider: React.FC = () => {

    return (
      <Divider
        sx={{
          boxShadow: "0px 0.5px 0px rgba(255, 255, 255, 0.5)",
          my: 2,
        }}
      />
    );
}

export default CustomDivider