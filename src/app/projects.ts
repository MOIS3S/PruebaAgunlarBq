export interface Projects {
  _id: string;
  creator: {
    _id: string;
    username: string;
    }
  name: string;
  ampliacion: string;
  codeProject: boolean;
  timesAdded: number;
  timesViewed: number;
}
