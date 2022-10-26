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

export interface ReservationDTO {
    reservationId: string
    tutorUserId: number
    tutorRequirementId: string
    reservationDate: string
    reservationStatus: boolean
    studentUserId: number
    tutorRequirementTitle: string
    tutorRequirementDesc: string
}