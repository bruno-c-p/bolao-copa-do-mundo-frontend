import { Team } from './team';

export interface Match {
  id: number;
  teams: Team[];
  result: string;
  date: string;
}
