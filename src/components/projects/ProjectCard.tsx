import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Stack,
  Chip,
  Box,
} from "@mui/material";
import { ExternalLink, ImageOff } from "lucide-react";
import type { Project } from "../../types";

interface Props {
  project: Project;
}

function ProjectShowcaseCard({ project }: Props) {
  const { title, description, tags, github_url, image } = project;
  const mediaUrl = typeof image === "string" ? image : undefined;

  return (
    <Card
      elevation={0}
      sx={(theme) => ({
        width: { xs: "100%", sm: 240 },
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 3,
        overflow: "hidden",
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
      })}
    >
      {mediaUrl ? (
        <CardMedia
          component="img"
          image={mediaUrl}
          alt={title}
          sx={(theme) => ({
            width: "100%",
            aspectRatio: "16 / 10",
            objectFit: "cover",
            borderRadius: 2,
            backgroundColor: theme.palette.action.hover,
          })}
        />
      ) : (
        <Box
          sx={(theme) => ({
            width: "100%",
            aspectRatio: "16 / 10",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            backgroundColor: theme.palette.action.hover,
            color: theme.palette.text.disabled,
          })}
        >
          <ImageOff size={28} />
        </Box>
      )}
      <CardContent sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          variant="h6"
          noWrap
          sx={(theme) => ({
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.text.primary,
            lineHeight: 1.2,
          })}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mt: 0.5,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>
        {tags.length > 0 && (
          <Stack
            direction="row"
            spacing={0.5}
            useFlexGap
            sx={{ flexWrap: "wrap", mt: 1.5 }}
          >
            {tags.map((item) => (
              <Chip
                key={item}
                label={item}
                size="small"
                sx={(theme) => ({
                  height: 22,
                  borderRadius: "6px",
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.text.primary,
                  backgroundColor:
                    "rgba(var(--mui-palette-secondary-mainChannel) / 0.14)",
                  border:
                    "1px solid rgba(var(--mui-palette-secondary-mainChannel) / 0.30)",
                  "& .MuiChip-label": { px: 1 },
                })}
              />
            ))}
          </Stack>
        )}
      </CardContent>
      {github_url && (
        <CardActions sx={{ px: 2, pb: 2 }}>
          <Button
            href={github_url}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="small"
            endIcon={<ExternalLink size={14} />}
            sx={{ borderRadius: 2, color: "text.primary" }}
          >
            View
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

export default ProjectShowcaseCard;
