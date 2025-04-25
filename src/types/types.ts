export interface ProfileData {
  name: string;
  age: number;
  height: string;
  dateOfBirth: string;
  birthPlace: string;
  religion: string;
  caste: string;
  education: string;
  occupation: string;
  rashi: string,
  subCaste: string,
  Gotra: string,
  totalBrothers: number,
  totalSisters: number,
  Complexion: string,
  income: string;
  maritalStatus: string;
  languages: string[];
  hobbies: string[];
  about: string;
  profileImage: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  family: {
    father: string;
    fatherContactNo: string;
    fatherOccupation: string;
    mother: string;
    motherOccupation: string;
    siblings: Array<{
      relation: string;
      name: string;
      age?: number;
      occupation?: string;
    }>;
  };
  educations: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  gallery: Array<{
    id: number;
    url: string;
    caption: string;
  }>;
}