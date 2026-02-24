export interface Movie {
  id: string;
  title: string;
  description: string;
  image: string;
  release_date: string;
  running_time: string;
  director: string;
  producer: string;
  rt_score: string;

  watched?: boolean;
  favorite?: boolean;
  notes?: string;
  rating?: number;
}
