export interface Credits {
  cast: Cast[];
}

export interface Cast {
  id: number;
  name: string;
  cast_id: string;
  character: string;
  profile_path: string;
  original_name: string;
}
