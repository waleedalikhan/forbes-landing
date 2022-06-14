import type { NextPage } from "next";
import BannerComponent from "@/components/BannerComponent";
import CounterSection from "~/components/CounterSection";
import EventsSection from "~/components/EventsSection";
import Iniciativas from "@/components/Iniciativas";
import Sidebar from "~/components/Sidebar";
import PlanSection from "@/components/PlanSection";
import RecentSection from "@/components/RecentSection";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-white">
        <Sidebar />
        <div className="md:ml-16">
          <BannerComponent />
          <CounterSection />
          <EventsSection />
          <Iniciativas />
          <PlanSection />
          <RecentSection />
        </div>
      </div>
    </>
  );
};

export default Home;
