// mock user profiles for use in demonstrations

export interface UserProfile {
  id: number;
  avatar?: {
    src: string;
    alt: string;
  };
  username: string;
}

export const AnonymousProfile = {
  id: 0,
  username: 'Anonymous',
};

export const DemoUser1: UserProfile = {
  id: 1,
  avatar: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg',
    alt: 'Man with Glasses',
  },
  username: 'BVGlearner99',
};

export const DemoUser2: UserProfile = {
  id: 2,
  username: 'G3Tschooled22',
};
