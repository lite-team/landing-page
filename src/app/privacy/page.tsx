import Container from '@/components/Container';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - Lite Team',
  description: 'Learn how we protect your privacy and handle your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Container>
        <div className="max-w-4xl mx-auto py-16 px-4">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            
            <p className="text-xl text-gray-300 mb-8">
              We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we handle your information across our applications.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Local Data Storage</h2>
              <p className="text-gray-300 leading-relaxed">
                All your data is stored locally on your device. Your personal information never 
                leaves your device unless you explicitly choose to enable cloud backup features.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">iCloud Backup</h2>
              <p className="text-gray-300 leading-relaxed">
                If you enable iCloud backup functionality, your data is encrypted end-to-end 
                and stored securely in your personal iCloud account. We do not have access 
                to your backed-up data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">No Data Collection</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not collect, analyze, or share your personal data. Your information 
                remains completely private and under your control at all times.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Analytics</h2>
              <p className="text-gray-300 leading-relaxed">
                We may collect anonymous usage statistics to improve our applications, 
                but this never includes your actual personal data or sensitive information. 
                All analytics data is aggregated and cannot be traced back to individual users.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us 
                through our support channels.
              </p>
            </section>

            <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
