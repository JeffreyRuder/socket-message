import {UserProfile} from '../data/profiles';

export interface Message {
  id: string;
  sender: UserProfile;
  text: string;
  time: Date;
}
