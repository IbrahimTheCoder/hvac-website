export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export interface Neighbourhood {
  id: string;
  name: string;
  slug: string;
}

export interface Guarantee {
  id: string;
  title: string;
  description: string;
  icon: string;
}
