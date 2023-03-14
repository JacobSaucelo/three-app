import Herro from "../components/herro";
import Importtt from "../components/importtt";
import "./app.css";

import { GiDiamonds } from "react-icons/gi";
import InfoSection from "../components/InfoSection";

function App() {
  return (
    <main>
      {/* <Herro /> */}

      <section className="heroSection">
        <header>
          <strong>What is a Capybara?</strong>
          <p>
            <GiDiamonds /> Is it a hog?
          </p>
          <p>
            <GiDiamonds /> Are they rodents?
          </p>
          <p>
            <GiDiamonds /> Do they pull up?
          </p>
        </header>
        <Importtt />
      </section>

      <InfoSection
        title={"No, A Capybara is not a hog"}
        subText={
          "But it is often referred to as a 'water hog' due to its physical resemblance to a domestic pig."
        }
        subText2={
          "Unlike hogs, capybaras have webbed feet, which make them excellent swimmers, and they have a diet that consists mostly of grasses and aquatic plants. They are also social animals that live in groups and are known for their calm and gentle nature, which has made them a popular choice for domestication in some parts of South America."
        }
        image={
          "https://images.unsplash.com/photo-1525434280327-e525e03f17ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        }
        imgAlt={"capybara bing chillinging"}
      />

      <InfoSection
        title={"Yes, Capybaras are rodents."}
        subText={
          "In fact, they are the largest rodents in the world, belonging to the family Caviidae which also includes guinea pigs and rock cavies."
        }
        subText2={
          "Despite their large size, capybaras share many physical and behavioral traits with other rodents. They have long incisors that never stop growing, which they use for gnawing on tough vegetation, and they have a digestive system that allows them to extract maximum nutrition from their food. Additionally, capybaras are social animals that live in groups, another common characteristic of rodents."
        }
        image={"https://i.gifer.com/7QcC.gif"}
        imgAlt={"capybara sploosh"}
      />

      <InfoSection
        title={"Yes, They do indeed be pulling up."}
        subText={
          "As a matter of fact, They pull up, hop out at the after party. They and all their friends love to get naughty. Sipping on that Henn', they know their friends love that Bacardi. With 1942, they take their friends back in that 'Rari"
        }
        subText2={
          "They switch lanes and see lights, watching the curb to avoid any mishaps. They smoke weed to calm their nerves and get high. They trap hard and pump non-stop to earn the bag. They can try, but they might fail again because they never learn."
        }
        image={
          "https://preview.redd.it/photo-of-a-capybara-wearing-sunglasses-on-a-couch-v0-sx9i3c7sc1p91.png?width=640&crop=smart&auto=webp&s=5d67b60c0fd78a286c7572f01b7e27266eff4f68"
        }
        imgAlt={"capybara pullin up"}
      />
    </main>
  );
}

export default App;
