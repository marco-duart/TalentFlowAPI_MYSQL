export interface CreateRecruiterDTO {
  name: string;
  email: string;
  position?: string;
  userId: number;
}

export interface UpdateRecruiterDTO {
  name?: string;
  email?: string;
  position?: string;
  interviewsId?: number[];
  hiringProcessesId?: number[];
}
