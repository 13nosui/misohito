import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'MISOHITO',
        short_name: 'MISOHITO',
        description: '31 SYLLABLES TO FORGET',
        start_url: '/',
        display: 'standalone', // 'fullscreen'にすると時計や電池残量も消えますが、通常はstandalone推奨
        background_color: '#fafafa',
        theme_color: '#fafafa',
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}