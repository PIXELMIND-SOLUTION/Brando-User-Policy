// Filename: BrandoUserPolicies.js
import React from "react";

// ==================== PRIVACY POLICY ====================
const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Privacy Policy – Brando User</h2>
      <p>
        At Brando User, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you use our platform to book hostel accommodations.
      </p>

      <h5 className="mt-4">1. Information We Collect</h5>
      <ul>
        <li><strong>Account Information:</strong> Full name, mobile number, profile image</li>
        <li><strong>Booking Information:</strong> Room number, room type (AC/Non-AC), email address</li>
        <li><strong>Identity Documents:</strong> Aadhaar number, PAN card number (for verification and compliance)</li>
        <li><strong>Usage Data:</strong> App interactions, booking history, preferences</li>
      </ul>

      <h5 className="mt-4">2. Use of Information</h5>
      <ul>
        <li>To create and manage your user profile</li>
        <li>To process and confirm hostel room bookings</li>
        <li>To verify your identity using Aadhaar and PAN</li>
        <li>To communicate booking confirmations, updates, and important notices</li>
        <li>To share your booking details with the respective hostel owner</li>
        <li>To comply with legal and regulatory requirements</li>
        <li>To improve app features and user experience</li>
      </ul>

      <h5 className="mt-4">3. Data Storage & Security</h5>
      <p>
        All your personal data, including Aadhaar and PAN details, are encrypted in transit and at rest. Sensitive documents are stored securely and are accessible only to authorized personnel and verified hostel owners. Your data is never displayed in plain text within the app.
      </p>

      <h5 className="mt-4">4. Data Sharing</h5>
      <p>
        Your booking and identity information is shared <strong>only</strong> with:
        <ul>
          <li>The hostel owner/vendor where you make a booking</li>
          <li>Legal or regulatory authorities when required by law</li>
          <li>Trusted service providers who assist in app operations (e.g., cloud storage, verification services)</li>
        </ul>
        We do not sell, rent, or share your information with unrelated third parties for marketing purposes.
      </p>

      <h5 className="mt-4">5. Data Retention</h5>
      <p>
        Your data will be retained as long as your user account is active. Booking records may be kept longer to comply with legal obligations or hostel policies. You may request account deletion by contacting support.
      </p>

      <h5 className="mt-4">6. Your Rights</h5>
      <ul>
        <li>Access, update, or correct your personal information</li>
        <li>Request deletion of your account and associated data</li>
        <li>Withdraw consent for data processing (where applicable)</li>
      </ul>

      <h5 className="mt-4">7. Policy Updates</h5>
      <p>
        We may update this Privacy Policy periodically. Continued use of Brando User constitutes your acceptance of any changes.
      </p>
    </div>
  );
};



// ==================== BOOKING POLICY (New) ====================
const BookingPolicy = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Booking Policy – Brando User</h2>
      <p>
        This Booking Policy outlines the process and requirements for users to book hostel rooms through the Brando User App.
      </p>

      <h5 className="mt-4">1. Eligibility to Book</h5>
      <ul>
        <li>You must be at least 18 years of age.</li>
        <li>You must have a verified Brando User account (mobile OTP verified).</li>
        <li>You must have a valid email address for booking confirmations.</li>
      </ul>

      <h5 className="mt-4">2. Required Information for Booking</h5>
      <ul>
        <li><strong>Full Name:</strong> As per government ID</li>
        <li><strong>Profile Image:</strong> Recent photograph</li>
        <li><strong>Room Number:</strong> Selected room number from available options</li>
        <li><strong>Room Type:</strong> AC or Non-AC</li>
        <li><strong>Email Address:</strong> For booking confirmation and updates</li>
        <li><strong>Aadhaar Number:</strong> Mandatory for identity verification</li>
        <li><strong>PAN Card Number:</strong> Mandatory for financial compliance</li>
      </ul>

      <h5 className="mt-4">3. Booking Process</h5>
      <ul>
        <li><strong>Step 1 – Login:</strong> Enter mobile number and verify with OTP.</li>
        <li><strong>Step 2 – Profile Setup:</strong> Add your name and profile image (if not already done).</li>
        <li><strong>Step 3 – Search & Select:</strong> Browse available hostels and rooms.</li>
        <li><strong>Step 4 – Enter Details:</strong> Provide room number, room type, email, Aadhaar, and PAN.</li>
        <li><strong>Step 5 – Verification:</strong> Your documents are verified (automated or manual).</li>
        <li><strong>Step 6 – Confirmation:</strong> Booking is confirmed upon successful verification and payment.</li>
      </ul>

      <h5 className="mt-4">4. Document Verification</h5>
      <p>
        All Aadhaar and PAN details submitted are verified for authenticity. Fake or forged documents will result in:
        <ul>
          <li>Immediate cancellation of booking</li>
          <li>Permanent ban from the Brando User platform</li>
          <li>Reporting to relevant authorities if required by law</li>
        </ul>
      </p>

      <h5 className="mt-4">5. Booking Modifications</h5>
      <p>
        You may modify your booking (room change, date change) subject to availability and hostel owner approval. Modification fees may apply.
      </p>

      <h5 className="mt-4">6. Check-in & Check-out</h5>
      <ul>
        <li>Standard check-in time: 12:00 PM</li>
        <li>Standard check-out time: 10:00 AM</li>
        <li>Early check-in or late check-out may incur additional charges</li>
        <li>Valid government ID must be presented at check-in</li>
      </ul>

      <h5 className="mt-4">7. Guest Policy</h5>
      <p>
        Overnight guests are not permitted in most hostels unless prior approval is obtained from the hostel owner. Visitors must leave by 10:00 PM unless otherwise specified.
      </p>

      <h5 className="mt-4">8. Compliance with Hostel Rules</h5>
      <p>
        By booking a room, you agree to comply with all rules and regulations of the respective hostel, including but not limited to:
        <ul>
          <li>Noise restrictions and quiet hours</li>
          <li>Prohibition of alcohol, drugs, or illegal substances</li>
          <li>Proper use of common areas and facilities</li>
        </ul>
      </p>
    </div>
  );
};

// ==================== CANCELLATION & REFUND POLICY ====================
const CancellationRefundPolicy = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Cancellation & Refund Policy – Brando User</h2>

      <h5 className="mt-4">1. Cancellation by User</h5>
      <ul>
        <li><strong>More than 7 days before check-in:</strong> 90% refund (10% processing fee)</li>
        <li><strong>3-7 days before check-in:</strong> 50% refund</li>
        <li><strong>Less than 3 days before check-in:</strong> No refund</li>
        <li><strong>No-show on check-in day:</strong> No refund</li>
      </ul>

      <h5 className="mt-4">2. Cancellation by Hostel Owner</h5>
      <p>
        If the hostel owner cancels your booking due to unavailability or any other reason, you will receive a <strong>100% full refund</strong>. Brando User will also help you find an alternative accommodation if possible.
      </p>

      <h5 className="mt-4">3. Refund Process</h5>
      <ul>
        <li>Refunds are processed within 7-10 business days</li>
        <li>Refunds are issued to the original payment method used at the time of booking</li>
        <li>You will receive a refund confirmation via email and SMS</li>
      </ul>

      <h5 className="mt-4">4. Partial Booking Cancellation</h5>
      <p>
        If you cancel only a portion of your stay (e.g., reducing duration), refund will be calculated based on the cancelled days applying the same cancellation policy.
      </p>

      <h5 className="mt-4">5. Force Majeure</h5>
      <p>
        In case of natural disasters, government lockdowns, or other force majeure events, Brando User will process refunds on a case-by-case basis as per applicable laws.
      </p>
    </div>
  );
};



// ==================== ABOUT US ====================
const AboutUs = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">About Us – Brando User</h2>
      
      <p className="text-center mb-4">
        Brando User is a trusted platform connecting students and tenants with safe, verified hostel accommodations across India.
      </p>

      <h5 className="mt-4">Our Mission</h5>
      <p>
        To provide a seamless, secure, and transparent hostel booking experience for users, with verified hostels, easy digital documentation, and reliable support.
      </p>

      <h5 className="mt-4">Why Choose Brando User?</h5>
      <ul>
        <li><strong>Verified Hostels:</strong> All hostels on our platform are verified by the Brando Vendor network.</li>
        <li><strong>Secure Documentation:</strong> Your Aadhaar and PAN are encrypted and handled securely.</li>
        <li><strong>Easy Booking:</strong> Simple mobile OTP login, profile setup, and booking in minutes.</li>
        <li><strong>24/7 Support:</strong> Dedicated customer support for all your booking needs.</li>
        <li><strong>Transparent Policies:</strong> Clear cancellation, refund, and booking policies with no hidden charges.</li>
      </ul>

      <h5 className="mt-4">Our Network</h5>
      <p>
        We partner with hundreds of trusted hostel owners across major cities including Hyderabad, Bangalore, Mumbai, Delhi, Chennai, and Pune.
      </p>

      <h5 className="mt-4">Contact Information</h5>
      <p>
        For partnerships, feedback, or inquiries, reach out to us at <strong>hello@brandouser.com</strong>
      </p>
    </div>
  );
};

// ==================== EXPORT ALL ====================
export default PrivacyPolicy;