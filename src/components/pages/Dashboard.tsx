import { Box, Divider, Fab, Button } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { ArrowLeft } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

//local packages
import ProjectList from '../dashboard/projectslist';
import PrimaryTitle from '../dashboard/PrimaryTitle';
import ExperiencesList from '../dashboard/ExperiencesList';
import AccountMenu from '../dashboard/AccountMenu';
import { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ProjectForm from '../dashboard/ProjectForm.tsx';

function Dashboard() {
  const [createOpen, setCreateOpen] = useState(false);

  const columnSx = (theme: Theme) => ({
    flex: 1,
    minHeight: { xs: '60vh', md: 0 },
    display: 'flex',
    flexDirection: 'column' as const,
    overflow: 'auto',
    borderRadius: 2,
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 2, 2),
  });

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        padding: { xs: theme.spacing(1), md: theme.spacing(2) },
        height: { xs: 'auto', md: '100vh' },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: { xs: 'visible', md: 'hidden' },
      })}
    >
      <Box
        component="main"
        sx={(theme) => ({
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          flex: 1,
          minHeight: 0,
          gap: theme.spacing(2),
        })}
      >
        <ProjectForm open={createOpen} setOpen={setCreateOpen} />
        <Box
          component="section"
          sx={(theme) => ({
            width: { xs: '100%', md: '200px' },
            flexShrink: 0,
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            alignItems: { xs: 'center', md: 'stretch' },
            justifyContent: { xs: 'space-between', md: 'flex-start' },
            gap: { xs: theme.spacing(1), md: theme.spacing(1) },
            padding: theme.spacing(1.5),
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
          })}
        >
          <Button
            component={RouterLink}
            to="/"
            aria-label="Back to site"
            sx={(theme) => ({
              flexShrink: 0,
              minWidth: 0,
              justifyContent: 'flex-start',
              color: theme.palette.text.secondary,
              textTransform: 'none',
              order: { xs: -1, md: 0 },
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
                color: theme.palette.text.primary,
              },
            })}
          >
            <ArrowLeft size={16} />
            <Box
              component="span"
              sx={{ ml: 1, display: { xs: 'none', md: 'inline' } }}
            >
              Back to site
            </Box>
          </Button>
          <Divider sx={{ display: { xs: 'none', md: 'block' }, my: 0.5 }} />
          <Box sx={{ mt: { md: 'auto' } }}>
            <AccountMenu />
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            flex: 1,
            minHeight: 0,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: theme.spacing(2),
          })}
        >
          <Box sx={columnSx}>
            <PrimaryTitle>Projects</PrimaryTitle>
            <ErrorBoundary>
              <ProjectList />
            </ErrorBoundary>
            <Box
              sx={(theme) => ({
                position: 'sticky',
                bottom: theme.spacing(2),
                display: 'flex',
                justifyContent: 'flex-end',
                pointerEvents: 'none',
                mt: 'auto',
                pt: 2,
              })}
            >
              <Fab
                onClick={() => setCreateOpen(true)}
                aria-label="Add project"
                sx={(theme) => ({
                  pointerEvents: 'auto',
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                })}
              >
                <AddOutlinedIcon />
              </Fab>
            </Box>
          </Box>
          <Box sx={columnSx}>
            <PrimaryTitle>Experiences</PrimaryTitle>
            <ErrorBoundary>
              <ExperiencesList />
            </ErrorBoundary>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
