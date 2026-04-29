// ==================== TERMS & CONDITIONS ====================
const TermsAndConditions = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Terms & Conditions – Brando User</h2>
      <p>
        By using the Brando User App to book hostel accommodations, you agree to the following terms and conditions.
      </p>

      <h5 className="mt-4">1. Account Registration</h5>
      <ul>
        <li>You must provide accurate, current, and complete information during registration (name, mobile number, profile image).</li>
        <li>You are responsible for maintaining the confidentiality of your account and OTP.</li>
        <li>One mobile number can be used for one user account unless otherwise approved.</li>
      </ul>

      <h5 className="mt-4">2. Profile Information</h5>
      <ul>
        <li>Your profile name must be your real name as per government ID.</li>
        <li>Profile image should be a clear, recent photograph of yourself.</li>
        <li>Inappropriate or misleading profile images may result in account suspension.</li>
      </ul>

      <h5 className="mt-4">3. Booking Requirements</h5>
      <ul>
        <li>You must provide accurate booking details: name, room number, room type (AC/Non-AC), and email.</li>
        <li><strong>Aadhaar is mandatory</strong> for identity verification and hostel compliance.</li>
        <li><strong>PAN is mandatory</strong> for financial processing and government requirements.</li>
        <li>Providing false or forged documents will result in immediate booking cancellation and account ban.</li>
      </ul>

      <h5 className="mt-4">4. Booking Confirmation & Payment</h5>
      <ul>
        <li>Booking is confirmed only after successful verification of your documents and payment (if applicable).</li>
        <li>Room availability is subject to hostel owner's confirmation.</li>
        <li>You agree to pay the applicable room rent and fees as per hostel policies.</li>
      </ul>

      <h5 className="mt-4">5. User Responsibilities</h5>
      <ul>
        <li>You must follow all rules and regulations of the hostel where you book a room.</li>
        <li>You are responsible for any damages caused to hostel property during your stay.</li>
        <li>You must provide valid government ID proof upon check-in if requested by the hostel.</li>
      </ul>

      <h5 className="mt-4">6. Cancellation & Refund</h5>
      <ul>
        <li>Cancellation policies vary by hostel. Please check the specific hostel's cancellation policy before booking.</li>
        <li>Refunds, if applicable, will be processed to the original payment method within 7-10 business days.</li>
        <li>No-shows may result in full charge without refund.</li>
      </ul>

      <h5 className="mt-4">7. Account Suspension/Termination</h5>
      <p>
        Brando User reserves the right to suspend or terminate your account if you violate these terms, provide false information, misuse the platform, or engage in illegal activities.
      </p>

      <h5 className="mt-4">8. Limitation of Liability</h5>
      <p>
        Brando User acts as a platform connecting users with hostel owners. We are not responsible for:
        <ul>
          <li>The quality, safety, or legality of hostel accommodations</li>
          <li>Disputes between users and hostel owners</li>
          <li>Any indirect, incidental, or consequential damages</li>
        </ul>
      </p>

      <h5 className="mt-4">9. Acceptance of Terms</h5>
      <p>
        By registering and using Brando User, you confirm that you have read, understood, and agreed to these Terms & Conditions.
      </p>
    </div>
  );
};

export default TermsAndConditions;