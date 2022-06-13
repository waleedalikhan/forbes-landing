import type { NextPage } from "next";
import BannerComponent from "@/components/BannerComponent";
import CounterSection from "~/components/CounterSection";
import EventsSection from "~/components/EventsSection";

const Home: NextPage = () => {
  return (
    <>
      <BannerComponent />
      <CounterSection />
      <EventsSection />
    </>
  );
};

export default Home;
