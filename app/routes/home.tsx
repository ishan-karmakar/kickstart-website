import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import Mission from "~/components/Mission";
import Navbar from "~/components/nav/NavBar";
import Socials from "~/components/socials/Socials";
import Team from "~/components/team/Team";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Kickstart | Home" }
    ];
}

export default function Home() {
    return <>
        <Navbar />
        <Hero />
        <Mission />
        <Team />
        <Socials />
    </>
}
