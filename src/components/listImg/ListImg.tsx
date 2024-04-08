'use client'
import { useState } from 'react';
import { imgData } from './imgData.ts';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen, Slideshow, Thumbnails } from 'yet-another-react-lightbox/plugins';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


export const ListImg = () => {
    const [index, setIndex] = useState(-1)

  return (
    <>
        <PhotoAlbum layout='masonry' photos={imgData} defaultContainerWidth={900} onClick={({index}) => setIndex(index)}/>
        <Lightbox
            slides={imgData}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails]}
            />
    </>
  )
}

{/* <Box className='w-full overflow-hidden h-[500px]'>
<ImageList variant="masonry" cols={5} gap={2}>
    {imgData.map((img) => (
    <ImageListItem key={img.id}>
        <Image
        src={img.src}
        alt={img.titulo}
        width={248}
        height={300}
        loading="lazy"
        className={`brightness-50 h-[${250 * ( 1 + Math.random())}px] w-auto active:brightness-100 hover:brightness-100 object-cover`}
        />
    </ImageListItem>
    
    ))}
</ImageList>
</Box> */}