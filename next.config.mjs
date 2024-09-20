/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.licdn.com', 'encrypted-tbn0.gstatic.com', 'img.freepik.com', 'static.vecteezy.com', 'imgcdn.stablediffusionweb.com',"ashisheditz.com","images.pexels.com","i.postimg.cc"],
    },

        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // This allows any hostname
                port: '',
                pathname: '/**' // This allows any path
            }
        ]
    }


export default nextConfig;

