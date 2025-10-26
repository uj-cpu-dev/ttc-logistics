// src/components/ServiceCard.tsx (Corrected)
import React from 'react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, className = '' }) => {
  return (
    <div className={`p-8 rounded-3xl bg-white shadow-xl border-t-4 border-orange-500 transition duration-300 hover:shadow-2xl hover:scale-[1.02] ${className}`}>
      <div className="p-3 w-max rounded-full bg-blue-100 text-blue-900 mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;