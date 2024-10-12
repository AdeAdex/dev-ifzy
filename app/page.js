import Image from "next/image";
import sampleImage from "@/public/images/samantha.png"; // Make sure to add an image in the public folder
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Welcome to Dev Ifzy!
      </h1>
      <Image
        src={sampleImage}
        alt="Sample"
        className="rounded-lg shadow-lg"
        width={500} // Adjust width as needed
        height={300} // Adjust height as needed
      />
      <p className="text-lg text-gray-700 mt-4">
        This is a simple Next.js application styled with Tailwind CSS.
      </p>
      </div>
      <Footer/>
    </>
  );
}
