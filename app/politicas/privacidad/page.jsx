import React from 'react';
import Head from 'next/head';
import Privacy from "./Section";

export const metadata = {
    title: 'Privacy Policy | La Hora Libre',
    description: 'Notice about Privacy Policy on La Hora Libre',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre cookies', 'la hora libre privacy', 'lahoralibre cookies', 'lahoralibre privacy'],
    authors: [{ name: 'lahoralibre' }, { name: 'lahoralibre.com', url: 'https://lahoralibre.com/politicas/privacidad' }],
    creator: 'lahoralibre.com/politicas/privacidad',
    publisher: 'lahoralibre.com/',
    icons: {
        icon: '/small_logo.png',
    },
}
export default function PrivacySection() {
    return (
        <React.Fragment>
            {/* [Header] */}
            <Head>
                <title>Privacy Policy | La Hora Libre</title>
                <meta name="description" content="A source of unbiased and quality articles in the digital era with the aim of providing comprehensive, balanced, and summarized journalistic coverage, committed to the ethical and professional principles of modern digital journalism." />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, la hora libre, la hora libre home, la hora libre privacy, la hora libre support, la, hora, libre" />
                <meta name="author" content="lahoralibre" />
                <link rel="canonical" href="https://lahoralibre.com/" />
                <link rel="icon" href="/small_logo.png" sizes="any" />
            </Head>

            {/* [Content] */}
            <Privacy />
        </React.Fragment>
    )
}
