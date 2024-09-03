"use client";
import React from 'react';
import Image from 'next/image';

const volunteeringData = [
  {
    title: "Volunteer Team Member for ICARC",
    description: "Annual International Conference Organized by FOC, SUSL",
    imageUrl: "/images/ica.jpeg", 
  },
  {
    title: "Initiative Group Vice President for Marketing & Digital Experience-23.24",
    description: "AIESEC in SUSL",
    imageUrl: "/images/aie.jpeg", 
  },
  {
    title: "Committee member",
    description: "IEEE WIE Affinity Group",
    imageUrl: "/images/wi.jpeg", 
  },
  {
    title: "Member",
    description: "IEEE Student Branch",
    imageUrl: "/images/iee.jpeg", 
  },
  {
    title: "Member",
    description: "Society of Computer Sciences",
    imageUrl: "/images/soc.png", 
  },
  {
    title: "Design team",
    description: "IEEE WIE Affinity Group",
    imageUrl: "/images/wides.jpeg", 
  },
];

const Volunteering = () => {
  return (
    <section
      id="Volunteering" 
      className="min-h-screen px-4 py-16 mt-12 text-gray-900"
    >
      <div className="container mx-auto">
        <h1 className="mb-16 text-4xl font-bold text-center text-gradient">
          My Volunteering Experience
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {volunteeringData.map((volunteer, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-purple-300 rounded-lg shadow-lg w-52"
            >
              <Image
                src={volunteer.imageUrl}
                alt={volunteer.title}
                width={208}
                height={130}
                className="object-contain rounded-t-lg"
              />
              <div className="flex flex-col justify-start p-3 min-h-32">
                <h2 className="mb-1 text-lg font-semibold text-center">
                  {volunteer.title}
                </h2>
                <p className="text-sm text-center text-gray-900">
                  {volunteer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
