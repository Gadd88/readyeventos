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
    <section id='Nosotros'>
        <PhotoAlbum layout='masonry' photos={imgData} defaultContainerWidth={900} onClick={({index}) => setIndex(index)}/>
        <Lightbox
            slides={imgData}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails]}
            />
    </section>
  )
}