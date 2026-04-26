// third party packages
import { RotatingLines } from "react-loader-spinner";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

//local packages

function Spinner() {
  const theme = useTheme();

  return (
    <Box>
      <RotatingLines
        height="32"
        width="32"
        visible={true}
        color={theme.palette.primary.main}
        strokeWidth="3"
      />
    </Box>
  );
}

export default Spinner;
