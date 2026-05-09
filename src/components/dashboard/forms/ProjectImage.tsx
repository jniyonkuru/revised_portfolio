import { Box } from '@mui/material';

interface IProps {
  imageUrl: string;
  alt: string;
}

const ProjectImage = ({ imageUrl, alt }: IProps) => {
  return (
    <Box
      component="img"
      sx={{
        height: '100%',
        maxInlineSize: '100%',
        borderRadius: 1,
        display: 'block',
      }}
      src={imageUrl}
      alt={alt}
    />
  );
};

export default ProjectImage;
