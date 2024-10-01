// pages/404.js
import Link from 'next/link';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-4">
      <title>Page Not Found</title>
      <Image
        src="https://i.postimg.cc/13mPhCRL/softcodeon.gif"
        alt="404 gif"
        width={400}
        height={400}
        className="mb-4"
      />
      <h1 className="text-4xl font-bold mb-4">
        Whoops, We can`t seem to find the resource you`re looking for.
      </h1>
      <p className="text-lg mb-6">
        Please check that the website address is spelled correctly. Or,
      </p>
      <Link href="/user" 
        className="px-6 py-3 text-lg bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition">
        Go to Homepage
      </Link>
    </div>
  );
}
