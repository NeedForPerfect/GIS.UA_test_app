export interface menuItem {
    title: string;
    link: string;
}

export interface Supplier {
    id?: string; // guid
    ggn: string;
    name: string;
    country: string;
    roles: string[];
    sector: string;
}