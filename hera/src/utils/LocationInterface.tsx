export interface IVille {
    _id: string;
    name: string;
    address: string;
    email: string;
    phone: string;
    vatNumber: string;
    imgCover?: string; // Optional
    description?: string; // Optional
    like?: number; // Optional
    createdAt?: Date; // Automatically added by Mongoose timestamps
    updatedAt?: Date; // Automatically added by Mongoose timestamps
}

export interface ISale {
    name: string;
    address: string;
    email: string;
    phone: string;
    vatNumber: string;
    imgCover?: string; // Optional
    description?: string; // Optional
    like?: number; // Optional
    createdAt?: Date; // Automatically added by Mongoose timestamps
    updatedAt?: Date; // Automatically added by Mongoose timestamps
}

export interface IDimore {
    name: string;
    address: string;
    email: string;
    phone: string;
    vatNumber: string;
    imgCover?: string; // Optional
    description?: string; // Optional
    like?: number; // Optional
    createdAt?: Date; // Automatically added by Mongoose timestamps
    updatedAt?: Date; // Automatically added by Mongoose timestamps
}

export interface ICatering {
    name: string;
    address: string;
    email: string;
    phone: string;
    vatNumber: string;
    imgCover?: string; // Optional
    description?: string; // Optional
    like?: number; // Optional
    createdAt?: Date; // Automatically added by Mongoose timestamps
    updatedAt?: Date; // Automatically added by Mongoose timestamps
}

 export interface IImage {
    url: string;
    _id: string;
  }