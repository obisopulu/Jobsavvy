export type ButtonProps = {
  symbol?: string;
  text: string;
  onClick: () => void;
}

export type TablistProps = {
  buttons: ButtonProps[];
  selected: string;
}

export type TextInputProps = { 
  text?: string;
  id?: string;
  name: string;
  type?: string;
  placeholder?: string;
  required: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; //remove ?
}

export type TextAreaProps = { 
  text?: string;
  id?: string;
  name: string;
  placeholder?: string;
  required: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; //remove ?
}

export type HeroProps = {
  children?: React.ReactNode;
}

export type ImageProps = {
  src: any;
  alt: any;
  scale: number;
};

export type KeywordProps = {
  keyword: string;
  found: boolean;
};

export type StackedListProps = {
  action:  (id: string) => void;
  jobs: any[];
};

export type JobCardProps = {
  action:  (id: string) => void;
  id: string;
  companyName: string;
  firmImageUrl: string;
  position: string;
  datePosted: string;
};

export type OffcanvasProps = {
  jobId: string;
  onClose: (id: string) => void;
}

export type LoginProps = {
  onSignIn: () => void;
  onSignInWithGoogle: () => void;
  onSignInWithGit: () => void;
}

export type LogoutProps = {
  logOut: () => void;
  user: any
}

export type SettingsProps = {
  user: any
}

export type UserOption = {
  body: string;
  dateCreated: any;
  email: string,
  keywordsExclude: string;
  keywordsInclude: string;
  name: string;
  subject: string;
  userId: string;
}

export type AlertProps = {
  text: string;
  isError: boolean;
  show: boolean;
}
