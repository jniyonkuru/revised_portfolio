import { Box, Typography } from '@mui/material'

function HomeSummaryNote() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: 'text.primary',
          lineHeight: 1.2,
          fontSize: { xs: '1.5rem', md: '2rem' },
        }}
      >
        Niyonkuru Jacques
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', mt: 0.5 }}>
        Full-stack software engineer based in Kigali, Rwanda.
      </Typography>
    </Box>
  )
}

export default HomeSummaryNote