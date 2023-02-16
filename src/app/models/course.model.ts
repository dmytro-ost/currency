export interface RawCourse {
    r030: number;
    txt: string;
    rate: number;
    cc: string;
    exchangedate: string;
}

export interface Course {
    id: number;
    name: string;
    rate: number;
    code: string;
}
