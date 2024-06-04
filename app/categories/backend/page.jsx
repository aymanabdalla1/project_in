import React from 'react'
import Head from 'next/head';
import { Section } from "./Section";

export const metadata = {
    title: 'backend | La Hora Libre',
    description: 'Artículos interesantes relacionados al ámbito del backend',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre backend', 'la hora libre categoria backend'],
    authors: [{ name: 'Barlow' }, { name: 'Barlow', url: 'https://lahoralibre.com/categories/backend' }],
    creator: 'lahoralibre.com/categories/backend',
    publisher: 'Barlow',
    icons: {
        icon: '/LOGO_noBackground.png',
    },
};
export default function page() {
    return (
        <React.Fragment>
            {/* [Corpus: HEADER] */}
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, backend, la hora libre backend, la hora libre categoria backend" />
                <meta name="author" content={metadata.creator} />
                <link rel="canonical" href="https://lahoralibre.com/" />
            </Head>


            {/* [Corpus; SECTIONS] */}
            <Section />
        </React.Fragment>
    );
};