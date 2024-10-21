export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  isInvited: boolean;
  onClickInvite: (id: number) => void;
}