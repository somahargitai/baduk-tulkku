export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  isApproved: boolean;
  isAdmin: boolean;
  createdAt: Date;
} 