// homepage - ultra-modern pre-launch site
import NavigationSlash from "@/components/NavigationSlash";
import HeroSlash from "@/components/HeroSlash";
import HowItWorks from "@/components/HowItWorks";
import FeaturesModern from "@/components/FeaturesModern";
import SecurityTrust from "@/components/SecurityTrust";
import SecureByDesign from "@/components/SecureByDesign";
import DashboardExperience from "@/components/DashboardExperience";
import RewardsIncentives from "@/components/RewardsIncentives";
import EnterprisePower from "@/components/EnterprisePower";
import WaitlistCTA from "@/components/WaitlistCTA";
import FooterSlash from "@/components/FooterSlash";

// homepage for pre-launch
export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* modern dark navigation */}
      <NavigationSlash />
      
      {/* hero with stunning card and waitlist form */}
      <HeroSlash />
      
      {/* how it works - 4 simple steps */}
      <HowItWorks />
      
      {/* three pillars - integrated modern style */}
      <FeaturesModern />
      
      {/* security features - travel mode, phoenix, zero-fx */}
      <SecurityTrust />
      
      {/* secure by design - like slash */}
      <SecureByDesign />
      
      {/* dashboard experience - live feed, ai monitoring */}
      <DashboardExperience />
      
      {/* rewards and incentives */}
      <RewardsIncentives />
      
      {/* enterprise capabilities - request & fund */}
      <EnterprisePower />
      
      {/* final waitlist cta with id for nav button */}
      <WaitlistCTA />
      
      {/* footer with compliance */}
      <FooterSlash />
    </main>
  );
}
