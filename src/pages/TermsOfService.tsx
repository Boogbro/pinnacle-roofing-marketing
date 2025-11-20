import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const TermsOfService = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBookClick = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onBookClick={handleBookClick} />
      
      <main className="flex-grow pt-24 pb-12 px-6">
        <div className="container max-w-4xl mx-auto prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Terms and Conditions</h1>
          
          <p className="mb-8">
            Welcome to SP Digital Growth. These Terms and Conditions ("Terms") govern your use of our website, services, and any related materials provided by SP Digital Growth ("Company," "we," "our," or "us"). These Terms create a legally binding agreement between you ("Client," "you," or "your") and SP Digital Growth. Please read these Terms carefully before using our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Agreement to Terms</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>By accessing or using SP Digital Growth services, you agree to be bound by these Terms and Conditions</li>
            <li>These terms constitute a legally binding agreement between you and SP Digital Growth</li>
            <li>If you do not agree to these terms, you must not use our services or website</li>
            <li>We reserve the right to modify these terms at any time with notice to users</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Eligibility</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be at least 18 years old to use our services</li>
            <li>You must be authorized to enter into agreements on behalf of your business</li>
            <li>You must provide accurate and complete information during registration</li>
            <li>You must operate a legitimate landscaping or related business to qualify for our programs</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Services Description</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Marketing Consultation Services</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Strategic marketing consultation specifically for landscaping businesses</li>
            <li>Website optimization and SEO services tailored to the landscaping industry</li>
            <li>Social media marketing and advertising campaign management</li>
            <li>Lead generation systems and customer relationship management guidance</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Service Limitations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Services are provided for business-to-business marketing consultation only</li>
            <li>We do not guarantee specific results, leads, or revenue increases</li>
            <li>Success depends on client implementation and market conditions</li>
            <li>Services are advisory in nature and require active client participation</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Terms and Billing</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Payment Structure</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>All fees are quoted in US dollars and payable in advance unless otherwise agreed</li>
            <li>Monthly retainer fees are due on the first day of each service month</li>
            <li>One-time setup fees and project costs are due upon contract signing</li>
            <li>Late payments may result in service suspension and additional fees</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Refund Policy</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Setup fees and completed work are non-refundable</li>
            <li>Monthly retainers may be refunded on a pro-rated basis with 30 days notice</li>
            <li>Refund requests must be submitted in writing with specific reasoning</li>
            <li>Disputed charges will be reviewed on a case-by-case basis</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Client Responsibilities</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Information and Access</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate business information and access to necessary accounts</li>
            <li>Respond to requests for information within reasonable timeframes</li>
            <li>Implement recommended strategies and maintain consistent communication</li>
            <li>Provide feedback and report results to help optimize campaigns</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Compliance and Conduct</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operate your business in compliance with all applicable laws and regulations</li>
            <li>Maintain professional conduct in all communications with our team</li>
            <li>Not use our services for any illegal or unethical business practices</li>
            <li>Respect intellectual property rights and confidentiality agreements</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property Rights</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Our Intellectual Property</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>All strategies, methodologies, and proprietary systems remain our property</li>
            <li>Client may not reproduce, distribute, or sell our proprietary materials</li>
            <li>Training materials and documentation are licensed for client use only</li>
            <li>Trademarks, logos, and brand materials are protected intellectual property</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Client Materials</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Client retains ownership of their business information and existing materials</li>
            <li>We may use client results and testimonials for marketing with permission</li>
            <li>Created content and campaigns become client property upon full payment</li>
            <li>Both parties respect third-party intellectual property rights</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitations of Liability</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Service Disclaimers</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Services are provided "as is" without warranties of specific outcomes</li>
            <li>We do not guarantee increased revenue, leads, or business growth</li>
            <li>Marketing results depend on factors beyond our control including market conditions</li>
            <li>Client is responsible for implementing recommendations and monitoring results</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Liability Limits</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our total liability is limited to the amount paid for services in the past 12 months</li>
            <li>We are not liable for indirect, consequential, or punitive damages</li>
            <li>Force majeure events excuse performance delays or failures</li>
            <li>Client assumes responsibility for business decisions based on our recommendations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Termination and Cancellation</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Termination Rights</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Either party may terminate the agreement with 30 days written notice</li>
            <li>Immediate termination allowed for material breach or non-payment</li>
            <li>We reserve the right to terminate for violation of these terms</li>
            <li>Termination does not relieve payment obligations for completed services</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Post-Termination</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Client retains access to completed work and purchased materials</li>
            <li>Ongoing campaign management and monitoring services will cease</li>
            <li>Final invoices and account settlements due within 30 days</li>
            <li>Confidentiality obligations survive termination of the agreement</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law and Disputes</h2>
          <p className="mb-8">
            These Terms and Conditions are governed by and construed in accordance with the laws of the United States. Any disputes arising from these terms or our services will be resolved through binding arbitration rather than court proceedings.
          </p>

          <div className="mt-12 p-6 rounded-lg bg-muted/30 border border-border">
            <h2 className="text-2xl font-bold mb-4">Important Legal Notice</h2>
            <p className="mb-4">These terms constitute the entire agreement between you and SP Digital Growth. No modifications are valid unless made in writing and signed by both parties. If any provision is found unenforceable, the remaining terms remain in effect.</p>
            <p className="mb-4">For questions about these Terms and Conditions, please contact us:</p>
            <div className="space-y-2">
              <p className="font-semibold text-primary">legal@mail.spdigitalgrowth.com</p>
              <p className="font-semibold text-primary">952-992-0777</p>
            </div>
          </div>
        </div>
      </main>

      <Footer onBookClick={handleBookClick} />
      <BookingModal isOpen={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default TermsOfService;
