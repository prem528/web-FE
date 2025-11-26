import Footer from "@/layout/Footer";
import HeroSection from "./HeroSection";
import ReviewCompo from "./ReviewCompo";
import FeaturesSection from "./FeaturesSection";
import RatingSummary from "@/CustomComponents/RatingSummary";

export default function Review() {
    return (
        <div>
            <HeroSection/>
            <RatingSummary />
            <FeaturesSection/>
            <ReviewCompo/>
            <Footer/>
        </div>
    )
}