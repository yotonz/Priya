import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Priya - Advanced AI assistant",
        template: `%s | Priya`
    },
    description: "Unleash the power of AI with Priya! Customize your AI assistant to fit your needs and turn your vision into reality with Sonata. Feel the future of AI at your fingertips!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Priya - Advanced AI assistant",
        description: "Unleash the power of AI with Priya! Customize your AI assistant to fit your needs and turn your vision into reality with Sonata. Feel the future of AI at your fingertips!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@Balaji_VK",
        title: "Priya - Advanced AI assistant",
        description: "Unleash the power of AI with Priya! Customize your AI assistant to fit your needs and turn your vision into reality with Sonata. Feel the future of AI at your fingertips!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://www.priya.cloud"),
};
