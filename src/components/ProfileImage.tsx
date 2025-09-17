import { Box } from "@mui/material";

interface Props {
  width?: number;
  height?: number;
}

function ProfileImage({ width, height }: Props) {
  return (
    <Box
      component="img"
      src="/me.jpg"
      alt="Random"
      sx={{
        width: width ? `${width}px` : "200px",
        height: height ? `${height}px` : "200px",
        borderRadius:32,
      }}
    ></Box>
  );
}

export default ProfileImage;
