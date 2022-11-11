import { Team } from './team';
import { TipType } from './tip-type';

export interface TipEvent {
  team?: Team;
  type: TipType;
}
