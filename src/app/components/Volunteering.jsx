"use client";
import React from 'react';
import Image from 'next/image';

const volunteeringData = [
  {
    title: "Volunteer Team Member for ICARC",
    description: "Annual International Conference Organized by FOC, SUSL",
    imageUrl: "/images/beach-cleanup.jpg", 
  },
  {
    title: "Initiative Group Vice Presidentfor Marketing & Digital Experience",
    description: " AIESEC in SUSL",
    imageUrl: "/images/tree-planting.jpg", 
  {
    title: "Committee member ",
    description: " IEEE WIE Affinity Group",
    imageUrl: "/images/food-donation.jpg", 
  },
  {
    title: "Member ",
    description: " IEEE Student Branch ",
    imageUrl: "/images/food-donation.jpg", 
  },
  {
    title: "Member ",
    description: " Society of Computer Sciences  ",
    imageUrl: "/images/food-donation.jpg",
  },
  {
    title: "Design team  ",
    description: " IEEE WIE Affinity Group  ",
    imageUrl: "/images/food-donation.jpg", 
  },
];

const Volunteering = () => {
  return (
    <section className="min-h-screen px-4 py-16 text-gray-800">
      <div className="container mx-auto">
        <h1 className="mb-12 text-4xl font-bold text-center text-gradient">My Volunteering Experience</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {volunteeringData.map((volunteer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg">
              <Image
                src={volunteer.imageUrl}
                alt={volunteer.title}
                width={500}
                height={300}
                className="object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="mb-2 text-xl font-semibold">{volunteer.title}</h2>
                <p className="text-gray-600">{volunteer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
