import { UserDTO } from "@app/core/model/user.model";


export interface RegisterContext {
    username: string;
    password: string;
    role : string;
    fullname: string;
    address: string;
    phone: string;   
    description: string;    
    shortInfo: string;
    expertise: string;    
}

export interface LoginContext {
    username: string;
    password: string;
    rememberMe?: boolean;
}

export interface AuthResponse {
    token: string;
}

export interface JwtTokenPayload {
    sub: string;
    username: string;
    user: UserDTO
    authorities?: object;
    attributes?: object;
    iat: string;
    exp: string
}
