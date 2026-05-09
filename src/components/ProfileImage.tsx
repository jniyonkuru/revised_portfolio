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
      alt="Niyonkuru Jacques"
      sx={{
        width: width ?? { xs: 120, md: 150 },
        height: height ?? { xs: 120, md: 150 },
        borderRadius: "inherit",
        objectFit: "cover",
        display: "block",
      }}
    />
  );
}

export default ProfileImage;
