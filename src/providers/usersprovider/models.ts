export interface ITrainer {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
    contactNumber: string;
    planType?: string;
    activeState: boolean;
    trial: boolean;
    dateOfBirth: string;
    policiesAccepted: boolean;
    trainerId: string;
}

export interface IClient {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: string;
    contactNumber: string;
    policiesAccepted: boolean;
    trainerId: string;
}

export interface IUser {
    _id?:string
    name: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    role?: string;  //if role is null that means he is a Client 
    contactNumber: string;
    planType?: string;
    activeState?: boolean;
    trial?: boolean;
    dateOfBirth: string;
    policiesAccepted?: boolean;
    trainerId: string;
    token?: string;
    sex?: string;
    date:string;
    __v?:string;
}

//name
//email
//password
//contactnumber
//policies
//date of birth,you dont have this one
//
