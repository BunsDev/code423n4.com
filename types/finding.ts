export interface Finding {
  title: string;
  body: string;
  labels: {
    name: string;
    color: string;
  }[];
  risk: string;
  state: "OPEN" | "CLOSED";
  createdAt: string;
  updatedAt: string;
  issueNumber: number;
  handle: string;
}

export interface FindingEditRequest {
  issue: number;
  contest: number;
  emailAddresses: string[];
  attributedTo: {
    newValue: string;
    oldValue: string;
    // @todo: remove this once all teams have a saved polygon address
    address?: string;
  };
  risk: {
    newValue: string;
    oldValue: string;
  };
  title?: string;
  body?: string;
}

export interface FindingsResponse {
  user: Finding[];
  teams: Record<string, Finding[]>;
}

export interface FindingCreateRequest {
  user: string;
  contest: string;
  sponsor: string;
  repo: string;
  emailAddresses: string[];
  attributedTo: string;
  risk: string;
  title: string;
  body: string;
  labels: string[];
  address?: string;
}

export interface FindingDeleteRequest {
  attributedTo: string;
  risk: string;
  emailAddresses: string[];
}

export interface TotalData {
  H: number;
  M: number;
  QA: number;
  Gas: number;
}
export interface OverviewData {
  total: TotalData;
  dupesID: TotalData;
}
