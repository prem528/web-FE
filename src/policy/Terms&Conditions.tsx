import HtmlContent from "@/components/ui/HtmlContent";
import { privacyPolicy } from "@/lib/wp-graphql";
import { useEffect, useState } from "react";
 

const TermsAndConditionsPage = () => {
    const [content, setContent] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError]    = useState<string | null>(null);


    useEffect(() => {
        const fetchTermsAndConditions = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await privacyPolicy("terms-and-conditions");
                setContent(data);
            } catch(err) {
                console.log("Error while fetching terms and conditions", err);
                setError("Unable to load terms and conditions policy");
            } finally {
                setLoading(false);
            }   
        };
        fetchTermsAndConditions();
    }, []);

    if(loading) {
        return (
            <div className="bg-black py-16 px-4">
                <div className="max-w-6xl mx-auto text-gray-600">
                    Loading ...
                </div>
            </div>
        )
    }

    if(error) {
        return(
            <div className="bg-black py-16 px-4">
                <div className="max-w-6xl mx-auto text-red-600">{error}</div>
            </div>
        )
    }

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mt-12 ">
          {content && <HtmlContent html={content} />}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
