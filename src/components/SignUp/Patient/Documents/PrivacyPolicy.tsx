// src/components/Documents.tsx

import React from 'react';

const privacyPolicy = `
# Insta Health Privacy Policy

Welcome to Insta Health! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our platform to schedule appointments, track payments, and manage your medical documents.

## Information We Collect
- Personal Information: Name, email, phone number, and other contact details.
- Medical Information: Checkup logs, insurance documents, and other health-related information.
- Payment Information: Details related to your payments for services.

## How We Use Your Information
- To provide and manage your appointments.
- To process payments and manage billing.
- To communicate with you regarding your health and services.

## Data Protection
We implement various security measures to protect your personal information. Your data is stored securely and is only accessible to authorized personnel.

## Your Rights
You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.

## Changes to This Policy
We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website.

## Contact Us
If you have any questions about this Privacy Policy, please contact us at support@instahealth.com.
`;

const termsOfUse = `
# Insta Health Terms of Use

Welcome to Insta Health! By using our platform, you agree to the following terms and conditions.

## Acceptance of Terms
By accessing or using our services, you agree to comply with these Terms of Use.

## Services Provided
Insta Health provides a platform for scheduling medical appointments, tracking payments, and managing medical documents.

## User Responsibilities
You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.

## Limitation of Liability
Insta Health is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.

## Changes to Terms
We may modify these Terms of Use at any time. Your continued use of the platform after changes constitutes your acceptance of the new terms.

## Contact Us
For any questions regarding these Terms of Use, please contact us at support@instahealth.com.
`;

const PDocuments: React.FC = () => {
  const renderMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-4">{line.slice(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold mt-4">{line.slice(3)}</h2>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="ml-5 list-disc">{line.slice(2)}</li>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="mt-2">{line}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4 text-[#0086AD]">Insta Health Documents</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#0086AD]">Privacy Policy</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          {renderMarkdown(privacyPolicy)}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2 text-[#0086AD]">Terms of Use</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          {renderMarkdown(termsOfUse)}
        </div>
      </div>
    </div>
  );
};

export default PDocuments;