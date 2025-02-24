import { projects } from "./projects";

export * from "./projects";
export const quantity = projects.length;

export type ProjectMetadata = {
    title: string,
    subtitle: string,
    images: string[],
    slug: string,
    description: string,
    additionalInfo: string
    index: number;
}