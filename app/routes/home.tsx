import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import Mission from "~/components/Mission";
import NavBar from "~/components/NavBar";
import Socials from "~/components/Socials";
import Team from "~/components/Team";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Kickstart | Home" }
    ];
}

export default function Home() {
    return <>
        <NavBar />
        <Hero />
        <Mission />
        <Team />
        <Socials />
    </>
}
