'use client'

import React, { ReactNode, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardServicio:React.FC = ():ReactNode => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, width: 345 }} className='bg-gradient-to-b from-[#121212] to-purple-950 text-slate-100 flex flex-col items-start justify-center rounded-md p-5'>
      <CardHeader
        className='w-full p-0 flex justify-center items-center'
        avatar={
          <Avatar sx={{ display: 'flex', bgcolor:'transparent', placeSelf:'center', justifyContent:'space-between', alignItems:'center', gap:'50px', height:'50px' ,border:'4px solid red' ,padding: '2px', width:'100%', borderRadius: 0 }} aria-label="logo">
            <Image src='/img/logo2.png' width={100} height={50} alt="ready eventos logo" />
            <Image
              height={50}
              width={50}
              src="/img/servicio_juegos.png"
              alt="Logo servicio"
            />
          </Avatar>
        }
        // title="Inflables y Juegos"
        // subheader="Salón Ready"
      />
      <CardContent>
        <Typography variant="h5" color="text-slate-100">
            INFLABLES Y JUEGOS
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='flex items-center justify-center'>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon color='secondary'/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Te ofrecemos:</Typography>
          <Typography paragraph>
            Estructural doble con pelotero, inflable doble tobogán, 2 camas elásticas, metegoles, mesa de pool, mesa de ping pong, plaza blanda, cancha mini fútbol, telas, penta tejo y 4 máquinas retro arcade (precio a parte).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
