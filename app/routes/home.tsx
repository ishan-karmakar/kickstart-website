import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import Intro from "~/components/Intro";
import Portfolio from "~/components/Portfolio";
import Services from "~/components/Services";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Kickstart | Home" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return <>
        <Hero />
        <Intro />
        <Services />
        <Portfolio />
    </>
}
