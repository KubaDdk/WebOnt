// Create a new file named types.d.ts in your project root
declare namespace Express {
  export interface Request {
    caesar: (str: string, shift: number) => string;
    reverse: (str: string) => string;
    shorten: (str: string, length: number) => string;
  }
}