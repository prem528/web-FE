import { useEffect, useState } from "react";
import InstallationProcess from "@/components/ui/InstallationProcess";
import type { installationProcess } from "@/components/ui/InstallationProcess";

const InstallationProcessPage = () => {
  const [data, setData] = useState<installationProcess[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const base = import.meta.env.VITE_API_URL; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!base) {
          setError("API URL is missing.");
          setLoading(false);
          return;
        }

        const res = await fetch(`${base}/api/installationProcess`);
        if (!res.ok) {
          setError("Failed to fetch installation process.");
          setLoading(false);
          return;
        }

        const json = await res.json();
        const raw = json?.respons;

        if (!raw) {
          setError("No installation data available.");
        } else {
          setData(raw);
        }
      } catch (err) {
        setError("Something went wrong while fetching installation data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [base]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  if (error)
    return <div className="p-10 text-center text-red-500">{error}</div>;

  if (!data)
    return (
      <div className="p-10 text-center text-gray-500">
        No installation process found.
      </div>
    );

  return (
    <div className="bg-black w-full">
      <InstallationProcess data={data} />
    </div>
  );
};

export default InstallationProcessPage;
