import React from "react";
import {
  Deck,
  Slide,
  Title,
  Subtitle,
  Image,
  Columns,
  List,
  Video,
  Footer,
  Highlight
} from "@sambego/diorama";

import Cat from "./video/cat.mp4";

import cc from "./img/cc.svg";
import Sam from "./img/sam.png";
import Catt from "./img/cat.jpg";
import Catt2 from "./img/cat2.jpg";

function SlideDeck() {
  return (
    <Deck
      footer={
        <Footer
          left={
            <Highlight
              style={{
                backgroundColor: "#6699cc",
                padding: ".5rem 1rem"
              }}
            >
              @sambego
            </Highlight>
          }
          right={
            <Highlight
              style={{
                backgroundColor: "#6699cc",
                padding: ".5rem 1rem"
              }}
            >
              remote.sambego.tech
            </Highlight>
          }
        />
      }
    >
      <Slide style={{ background: "#6699cc", color: "#fff" }}>
        <Video
          src={Cat}
          loop
          autoplay
          full
          color="#6699cc"
          style={{ overflow: "hidden", zIndex: 1 }}
        />
        <Title style={{ color: "#ffffff", position: "relative", zIndex: 1 }}>
          5 things you should know about working remote!
        </Title>
        <Image
          src={cc}
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "2rem",
            width: "10%",
            zIndex: 2
          }}
          alt="Creative commons"
        />
      </Slide>
      <Slide>
        <Columns>
          <div>
            <Image src={Sam} alt="A picture of me" full color="#6699cc" />
          </div>
          <div>
            <Subtitle> Sam Bellen </Subtitle>
            <List>
              <li>Developer Advocate Engineer</li>
              <li>Auth0</li>
            </List>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <Subtitle>
          We're a{" "}
          <Highlight style={{ backgroundColor: "#6699cc" }}>
            remote friendly
          </Highlight>{" "}
          company
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          {" "}
          Get a{" "}
          <Highlight style={{ backgroundColor: "#6699cc" }}>
            desk
          </Highlight>{" "}
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          {" "}
          Take a{" "}
          <Highlight style={{ backgroundColor: "#6699cc" }}>
            break
          </Highlight>{" "}
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          {" "}
          Don't work{" "}
          <Highlight style={{ backgroundColor: "#6699cc" }}>
            too much
          </Highlight>{" "}
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          {" "}
          Get{" "}
          <Highlight style={{ backgroundColor: "#6699cc" }}>
            out of the house
          </Highlight>{" "}
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          Make some{" "}
          <Highlight style={{ backgroundColor: "#6699cc" }}>
            small talk
          </Highlight>{" "}
        </Subtitle>
      </Slide>

      <Slide>
        <Subtitle>
          <Highlight style={{ backgroundColor: "#6699cc" }}>Bonus</Highlight>
        </Subtitle>
      </Slide>
      <Slide>
        <Image
          src={Catt}
          alt="Get a pet, it will always keep you company"
          full
        />
      </Slide>
      <Slide>
        <Image
          src={Catt2}
          alt="Get a pet, it will always keep you company"
          full
        />
      </Slide>

      <Slide>
        <Subtitle>
          Come talk to me at the{" "}
          <Highlight style={{ backgroundColor: "#6699cc" }}>
            Auth0 booth
          </Highlight>
        </Subtitle>
      </Slide>
      <Slide>
        <Subtitle>
          <Highlight style={{ backgroundColor: "#6699cc" }}>
            Thank you!
          </Highlight>
        </Subtitle>
      </Slide>
    </Deck>
  );
}

export default SlideDeck;
