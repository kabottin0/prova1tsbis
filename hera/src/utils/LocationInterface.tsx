export interface IVille {
    _id: string;
    name: string;
    address: string;
    email: string;
    password: string;
    phone: string;
    vatNumber: string;
    imgCover?: string; // Optional
    shortDescription?: string; // Optional
    longDescription?: string;
    like?: number; // Optional
    createdAt?: Date; // Automatically added by Mongoose timestamps
    updatedAt?: Date; // Automatically added by Mongoose timestamps
}

export interface ISale {
    _id: string;
    name: string;
    address: string;
    email: string;
    password: string;
    phone: string;
    vatNumber: string;
    imgCover?: string; // Optional
    shortDescription?: string; // Optional
    longDescription?: string;
    like?: number; // Optional
    createdAt?: Date; // Automatically added by Mongoose timestamps
    updatedAt?: Date; // Automatically added by Mongoose timestamps
}

export interface IDimore {
    _id: string;
    name: string;
    address: string;
    email: string;
    password: string;
    phone: string;
    vatNumber: string;
    imgCover?: string; // Optional
    shortDescription?: string; // Optional
    longDescription?: string;
    like?: number; // Optional
    createdAt?: Date; // Automatically added by Mongoose timestamps
    updatedAt?: Date; // Automatically added by Mongoose timestamps
}

export interface ICatering {
    _id: string;
    name: string;
    address: string;
    email: string;
    password: string;
    phone: string;
    vatNumber: string;
    imgCover?: string; // Optional
    shortDescription?: string; // Optional
    longDescription?: string;
    like?: number; // Optional
    createdAt?: Date; // Automatically added by Mongoose timestamps
    updatedAt?: Date; // Automatically added by Mongoose timestamps
}

 export interface IImage {
    url: string;
    _id: string;
  }

  export interface ISubmit {
    name: string;
    address: string;
    email: string;
    password: string;
    phone: string;
    vatNumber: string;
    imgCover?: string; // Optional
    shortDescription?: string; // Optional
    longDescription?: string;
    like?: number; // Optional
    createdAt?: Date; // Automatically added by Mongoose timestamps
    updatedAt?: Date; // Automatically added by Mongoose timestamps
}
export interface IUSers {
    name: string;
    surname: string;
    password: string;
    email: string;
    phone: string;
    createdAt?: Date; // Automatically added by Mongoose timestamps
    updatedAt?: Date; // Automatically added by Mongoose timestamps
}