interface Audiobook {
  wrapperType: 'audiobook'
  artistName: string
  artworkUrl60: string
  primaryGenreName: string
  artistViewUrl: string
  collectionName: string
  collectionId: number
}

interface Track {
  wrapperType: 'track'
  artistName: string
  collectionId: number
  trackName: string
  trackViewUrl: string
  artworkUrl60: string
}

export type MediaType = Audiobook | Track
