//third party packages
import {List, Typography } from '@mui/material';
//local packages
import ExperienceItem from './ExperienceItem';
import useExperience from '../../ hooks/experiences';
import Spinner from '../Spinner';




//  const experiences=[{organization:"andela",role:'web developer intern',startDate:"01-01-2024",endDate:"30-06-2025",id:1, tasks:["app design","app development","refactoring"]}]

function ExperiencesList() {
  const {data:experiences,isError,isLoading}=useExperience()
  const handleEdit = (id: number) => {
    console.log("edit", id);
  };
  const handleDelete = (id: number) => {
    console.log("delete", id);
  };
  if (isLoading) {
    return(<Spinner/>)
  }
  if (isError) {
    return(<Typography color='error'>error</Typography>)
  }
  return (
      <List sx={(theme)=>({display:'flex',flexDirection:'column',gap:theme.spacing(1)})}>
          {experiences && experiences.map(item=>(<ExperienceItem key={item.id} experience={item} onDelete={handleDelete} onEdit={handleEdit}/>))}
    </List>
  )
}

export default ExperiencesList
