export interface FormType {
    name: string;
    email: string;
    longitude: string;
    latitude: string;
    password: string;
}

export interface User{
    name:string;
    email:string;
}
export interface AuthContexData {
    signed: boolean;
    // token: string;
    user: User | null;
    signInWow(): Promise<void>;
    signOut(): void;
    loading:boolean;
    // loadStorageData():Promise<void>;
}

export interface ResponseTypes {
    token: string;
    user: { name: string; email: string; };
}