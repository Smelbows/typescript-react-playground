import React from 'react'
import styles from './Song.module.sass'

import { MediaType } from '../media'

interface Props {
  media: MediaType
}

const getUrl = (media: MediaType) => {
  switch (media.wrapperType) {
    case 'audiobook': {
      return media.artistViewUrl
    }
    case 'track': {
      return media.trackViewUrl
    }
  }
}

export const Media = ({ media }: Props) => {
  return (
    <div className={styles.contentWrapper}>
      <a href={getUrl(media)}>
        <img src={media.artworkUrl60}/>
        <p>{media.wrapperType}</p>
        <p>{media.artistName}</p>
        {media.wrapperType === 'track' && <p>{media.trackName}</p>}
        {media.wrapperType === 'audiobook' && <p>{media.collectionName}</p>}
      </a>
    </div>
  )
}

export {}
