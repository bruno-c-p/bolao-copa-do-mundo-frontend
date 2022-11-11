export interface Jwt {
  iss: string;
  sub: string;
  iat: number;
  exp: number;
  nickname: string;
  points: number;
  roles: string;
}
