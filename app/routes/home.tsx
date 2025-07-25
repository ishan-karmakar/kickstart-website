import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import Mission from "~/components/Mission";
import Portfolio from "~/components/Portfolio";
import Team from "~/components/Team";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Kickstart | Home" }
    ];
}

export default function Home() {
    return <>
        <Hero />
        <Mission />
        <Team />
        <Portfolio />
    </>
}
