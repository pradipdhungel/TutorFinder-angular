export interface GenericResponse<T> {
    response: T;
    messageCode: string;
}

export interface JobDTO {
    jobId: string;
    title: string;
    description: string;
}

export interface RequirementDTO {
    id: string;
    title: string;
    description: string;
    studentUserId: number
    postedDate: string
}