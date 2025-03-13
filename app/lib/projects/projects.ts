import { ProjectMetadata } from ".";

export const projects: ProjectMetadata[] = [
    {
        title: "The Ring AI",
        org: "Venn Studio",
        logo: "/images/projects/the-ring-ai/logo.svg",
        subtitle: "One generative AI app to rule them all!!",        
        images: [
                "/images/projects/the-ring-ai/promo_1.webp",
                "/images/projects/the-ring-ai/promo_2.webp",
                "/images/projects/the-ring-ai/promo_3.webp"
        ],
        slug: 'the-ring-ai-generative-ai-world-app',
        description: `The World project is building a global financial and identity network powered by proof of personhood. At its core is World App, a simple crypto wallet through which verified users receive UBI payments in WLD, the associated token of the project. Within World App, mini-apps extend functionality by offering integrated services through an app store.
        
**The Ring AI** is a mini-app that provides seamless access to generative AI technology, where users can pay small fees in WLD to use the cutting-edge benchmark models. This ensures an accessible, Web3-native AI experience for the World App community.
`,
        additionalInfo: `*Stage:* MVP (development of MVP took about 7 weeks).

Learn more by visiting [theringai.xyz](https://theringai.xyz).
        `
    },
    {
        title: "Deforestation Calculator",
        org: "Conservation Strategy",
        logo: "/images/projects/csf/logo.svg",
        subtitle: "Estimating economic damage to the Amazon",
        images: [
                "/images/projects/csf/deforestation-calculator/promo_1.webp",
                "/images/projects/csf/deforestation-calculator/promo_2.webp",
                "/images/projects/csf/deforestation-calculator/promo_3.webp",
        ],
        slug: "deforestation-calculator-amazon-damage-estimation-tool",
        description: `Deforestation in the Amazon is a critical environmental issue that leads not only to severe biodiversity loss, disruption of ecosystems, and increased carbon concentration in the atmosphere, but also threatens indigenous communities livelyhoods. The Amazon plays a crucial role in regulating global weather patterns and storing carbon, making its preservation essential for planetary health. Urgent action is needed to enforce conservation policies, promote sustainable land use, and curb deforestation to protect this vital ecosystem.
        
We helped the **Conservation Strategy Fund** (CSF) develop an online tool based on their own methodology to estimate the economic loss of instances of deforestation in the great Amazon rainforest.
        `,
        additionalInfo: `*Client:* Conservation Strategy Fund.
        
Learn more by visiting [Deforestation Calculator](https://deforestationcalculator.conservation-strategy.org/) and the [CSF's website](https://www.conservation-strategy.org/)
        `
    } 
].map((project, index) => ({ ...project, index }));
