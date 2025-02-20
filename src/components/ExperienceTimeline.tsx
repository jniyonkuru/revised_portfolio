
import { Box, Typography, List} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ListItemChecked from './ListItemChecked'

function ExperienceTimeline() {
  return (
    <Box sx={{color:'#fff'}}>
        <Timeline   sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector/>
            </TimelineSeparator>
  <TimelineContent>
    <Box sx={{display:'flex', gap:3,p:1 ,justifyContent:'flex-start',alignItems:'center'}}>
       <Box>
        <Typography variant='h5' sx={{color:'secondary.main', textWrap:'nowrap'}}>Andela Rwanda</Typography>
       <Typography>
         Web developer intern
       </Typography>
       <Typography variant='subtitle2' sx={{color:'grey.500'}}>
        October -2024
       </Typography>
       </Box>
       <Box>
       <List>
      <ListItemChecked text='Developed intuitive mockups design(UI/UX) for projects'/>
      <ListItemChecked text='Worked on documenting the projects, deployment of the apps and writing reports'/>
      <ListItemChecked text='Wrote, maintained code, worked on bug fixes and conducted development tests'/>
       </List>
       </Box>
    </Box>
  </TimelineContent>
        </TimelineItem>
      
  
        </Timeline>
    </Box>
  )
}

export default ExperienceTimeline