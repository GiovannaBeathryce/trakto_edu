export interface IDesignData {
  data : Array<IDesigns> | null
}

export interface IDesigns {
  id: string,
  title: string,
  cover: string,
  thumbs: string,
}
