interface ICreateFarmaciasDTO {
  id?: string;
  name: string;
  urllogo: string;
  phone: string;
  whatsapp: string;
  street: string;
  city: string;
  zipcode: number;
  neighborhood: string;
  lat: string;
  lng: string;
  email: string;
}

export { ICreateFarmaciasDTO };
