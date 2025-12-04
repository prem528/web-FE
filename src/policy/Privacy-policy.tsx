import { useEffect, useState } from "react";
import HtmlContent from "@/components/ui/HtmlContent";
import { privacyPolicy } from "@/lib/wp-graphql";

const PrivacyPolicyPage = () => {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await privacyPolicy("privacy-policy");
        setContent(data);
      } catch (err) {
        console.error("Error fetching privacy policy:", err);
        setError("Unable to load privacy policy. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, []);

  if (loading) {
    return (
      <div className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-white mt-12">
          {content && <HtmlContent html={content} />}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
