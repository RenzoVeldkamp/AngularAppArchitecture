export interface IProfileSummaryData {
    user: string;
    isAuthenticated: boolean;
    avatarUrl: string;
    jobTitle: string;
    employer: string;
}

export class ProfileSummaryData implements IProfileSummaryData {
    public user = '';
    public jobTitle = '';
    public employer = '';
    public isAuthenticated = false;
    public avatarUrl = '';
}
