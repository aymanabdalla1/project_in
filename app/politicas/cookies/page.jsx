import React from 'react';
import Head from 'next/head';
import Cookies from "./Section";

export const metadata = {
    title: 'Cookie Policy | La Hora Libre',
    description: 'Notice about Cookie Policy on La Hora Libre',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre cookies', 'la hora libre privacy', 'lahoralibre cookies', 'lahoralibre privacy'],
    authors: [{ name: 'lahoralibre' }, { name: 'lahoralibre.com', url: 'https://lahoralibre.com/politicas/cookies' }],
    creator: 'lahoralibre.com/politicas/cookies',
    publisher: 'lahoralibre.com/',
    icons: {
        icon: '/small_logo.png',
    },
}
export default function CookiesSection() {
    return (
        <React.Fragment>
            {/* [Header] */}
            <Head>
                <title>Cookie Policy | La Hora Libre</title>
                <meta name="description" content="An impartial and quality source of articles in the digital era with the aim of providing complete, balanced, and summarized journalistic coverage, committed to the ethical and professional principles of modern digital journalism." />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, la hora libre, la hora libre home, la hora libre cookies, la hora libre support, la, hora, libre" />
                <meta name="author" content="lahoralibre" />
                <link rel="canonical" href="https://lahoralibre.com/" />
                <link rel="icon" href="/small_logo.png" sizes="any" />
            </Head>

            {/* [Content] */}
            <Cookies />
        </React.Fragment>
    )
}
