import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>
          
          <p className="mb-8">
            SP Digital Growth ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with our marketing materials. By using our services, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, phone number, and business information when you submit our application form</li>
            <li>Communication preferences and marketing consent</li>
            <li>Business details including revenue, service areas, and current challenges</li>
            <li>Payment information processed through secure third-party providers</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address, browser type, device information, and operating system</li>
            <li>Website usage data including pages visited, time spent, and referring websites</li>
            <li>Cookies and similar tracking technologies for website functionality and analytics</li>
            <li>Location data based on IP address for service area determination</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Primary Uses</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Evaluate applications for our landscaping business growth programs</li>
            <li>Provide marketing consultation and strategy development services</li>
            <li>Communicate about our services, updates, and educational content</li>
            <li>Process payments and manage client relationships</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Marketing and Analytics</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Send newsletters and marketing communications (with your consent)</li>
            <li>Analyze website performance and user behavior to improve our services</li>
            <li>Create case studies and testimonials (with explicit permission)</li>
            <li>Conduct market research to better serve the landscaping industry</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing and Disclosure</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">We Do Not Sell Your Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>SP Digital Growth does not sell, rent, or trade your personal information to third parties</li>
            <li>We maintain strict confidentiality of all client business information</li>
            <li>Any case studies or testimonials require explicit written consent</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Limited Sharing Circumstances</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who assist with website hosting, email delivery, and payment processing</li>
            <li>Legal compliance when required by law, court order, or government regulation</li>
            <li>Business transfers in the event of merger, acquisition, or sale of assets</li>
            <li>Protection of rights and safety when necessary to prevent fraud or security threats</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security and Protection</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Security Measures</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>SSL encryption for all data transmission and form submissions</li>
            <li>Secure servers with regular security updates and monitoring</li>
            <li>Access controls limiting employee access to necessary information only</li>
            <li>Regular security audits and vulnerability assessments</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Retention</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Client information retained for the duration of our business relationship</li>
            <li>Marketing communications data retained until you unsubscribe</li>
            <li>Website analytics data retained for up to 2 years for business insights</li>
            <li>Legal documents and communications retained as required by law</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Privacy Rights</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Access and Control</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to personal information we have about you</li>
            <li>Update or correct inaccurate personal information</li>
            <li>Request deletion of your personal information (subject to legal requirements)</li>
            <li>Opt-out of marketing communications at any time</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Communication Preferences</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unsubscribe from email newsletters using the link in any email</li>
            <li>Contact us directly to update your communication preferences</li>
            <li>Opt-out of phone communications by requesting removal from our call list</li>
            <li>Control cookie settings through your browser preferences</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Types of Cookies We Use</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Essential cookies for website functionality and security</li>
            <li>Analytics cookies to understand website usage and improve user experience</li>
            <li>Marketing cookies for targeted advertising and lead tracking</li>
            <li>Preference cookies to remember your settings and choices</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Managing Cookies</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Configure cookie preferences through your browser settings</li>
            <li>Disable cookies entirely, though this may limit website functionality</li>
            <li>Use browser extensions or privacy tools to control tracking</li>
            <li>Contact us for assistance with cookie-related questions</li>
          </ul>

          <div className="mt-12 p-6 rounded-lg bg-muted/30 border border-border">
            <h2 className="text-2xl font-bold mb-4">Contact Us About Privacy</h2>
            <p className="mb-4">If you have questions about this Privacy Policy, want to exercise your privacy rights, or need assistance with your personal information, please contact us:</p>
            <div className="space-y-2">
              <p className="font-semibold text-primary">privacy@mail.spdigitalgrowth.com</p>
              <p className="font-semibold text-primary">952-992-0777</p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">Privacy Commitment: We will respond to all privacy-related inquiries within 48 hours and work with you to address any concerns about your personal information.</p>
          </div>
        </div>
      </main>

      <Footer onBookClick={handleBookClick} />
      <BookingModal isOpen={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default PrivacyPolicy;
