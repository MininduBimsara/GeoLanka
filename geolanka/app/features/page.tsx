import AutomatedReportsSection from "@/components/Features/AutomatedReportsSection";
import FieldCollectionSection from "@/components/Features/FieldCollectionSection";
import IntegrationsSection from "@/components/Features/IntegrationsSection";
import WebDashboardSection from "@/components/Features/WebDashboardSection";


export default function Featues() {
  return (
    <main>
      <IntegrationsSection />
      <WebDashboardSection />
      <FieldCollectionSection />
      <AutomatedReportsSection />
    </main>
  );
}