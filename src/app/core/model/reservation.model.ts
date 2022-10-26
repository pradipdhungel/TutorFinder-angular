export interface reservationDTO {
    reservationId?: string;
    tutorUserId?: number;
    tutorRequirementId: string;
    reservationDate?: Date;
    reservationStatus?: Boolean;
    studentUserId: number
    tutorRequirementTitle: string
    tutorRequirementDesc: string
}