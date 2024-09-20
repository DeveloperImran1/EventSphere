/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
<<<<<<< HEAD
        domains: ['media.licdn.com', 'encrypted-tbn0.gstatic.com', 'img.freepik.com', 'static.vecteezy.com', 'imgcdn.stablediffusionweb.com',"ashisheditz.com","images.pexels.com"],
    },
=======

        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // This allows any hostname
                port: '',
                pathname: '/**' // This allows any path
            }
        ]
    }
>>>>>>> 57b2d88a7437973dd77ad3cf19e4de5cad180ce2
};

export default nextConfig;

