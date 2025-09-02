export interface ICategory {
  id?: string;
  name?: string;
}

export interface IProject {
  id?: string;
  name?: string;
  budget?: number;
  category?: ICategory;
  cost?: number;
  services?: any[]; // Pode ser melhorado se soubermos a estrutura de 'services'
}