'use client'
import React, { ReactNode, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

interface Props {
  titulo: string,
  text1: string,
  text2: string,
  img: string,
}

export const CardServicio:React.FC<Props> = ({titulo, text1, text2, img}):ReactNode => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // bg-gradient-to-br from-purple-900 to-purple-600
  return (
    <Card sx={{ maxWidth: 345, width: 345 }} className='bg-purple-400 text-slate-100 flex flex-col items-center justify-center rounded-none shadow-ready2 p-5'>
      <CardContent>
        <figure 
            className='w-full grid place-content-center'>
          <Image
            height={70}
            width={70}
            src={img}
            alt="Logo servicio"
          />
        </figure>
        <h3 className='mt-2 flex justify-center items-center font-bold text-slate-200 text-3xl tracking-wide'>
            {titulo}
        </h3>
      </CardContent>
      <CardActions disableSpacing className='flex items-center justify-center -mt-5'>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon color='warning'/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className='-mt-7 h-44'>
          <p className='font-bold'>{text1}</p>
          <p className='font-normal leading-6 text-xl tracking-wide'>
            {text2}
          </p>
        </CardContent>
      </Collapse>
    </Card>
  );
}
