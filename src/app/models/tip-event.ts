import { Match } from './match';
import { TipType } from './tip-type';

export interface TipEvent {
  match: Match;
  type: TipType;
}
