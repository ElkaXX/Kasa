export type Host = {
  name: string;
  picture: string;
};

export type Apartment = {
  id: string;
  title: string;
  description: string;
  cover: string;
  pictures: string[];
  host: Host;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};
