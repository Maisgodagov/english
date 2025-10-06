export enum UserRole {
  Student = 'student',
  Teacher = 'teacher',
  Admin = 'admin',
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface UserProfileDto {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  avatarUrl?: string;
  streakDays: number;
  completedLessons: number;
  level: string;
  xpPoints: number;
}

export interface LessonDto {
  id: string;
  title: string;
  durationMinutes: number;
  order: number;
  contentPreview?: string;
}

export interface CourseDto {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessons: LessonDto[];
  progress: number;
}

export interface ApiErrorResponse {
  message: string;
  code?: string;
  details?: unknown;
}

export type RoleGuard = {
  role: UserRole;
  allowedRoutes: string[];
};
