import PageHeader from '../components/PageHeader';
import CaptionedImage from '../components/CaptionedImage';
import Button from '../components/Button';
import headshot from '../assets/about/headshot.png';
import portrait from '../assets/about/portrait.png';
import './About.css';

function AboutPage() {
  return (
    <div className="aboutPage">
      <PageHeader title="About Me" />
      <img className="aboutPage-headshot" src={headshot} alt="Megan Kossa" />
      <p>
        I'm Megan, a designer, developer, and maker. I think of myself as a toymaker: I build things that are useful, engaging, and that you want to pick up again. Whether that's a design system for a corporate product or a resin-dipped gold-tipped earring made from a real hand-collected cicada wing, the goal is the same. Make something of beauty that sparks curiosity and actually works. Good UX gets out of the way. Good design makes you want to come back.
      </p>
      <p>
        I live in Bryan, Texas with my husband and two young boys. My husband is an engineer and data scientist who sees the world in systems and structures. I come at it from the creative and artistic side. We overlap more than you'd expect, which makes for interesting dinner conversation. Our house is full of experiments, unfinished projects, and questions we don't always have answers to.
      </p>
      <CaptionedImage
        src={portrait}
        alt="Illustrated portrait of the Meganopteryx"
        caption="Meet the Meganopteryx: my alter-ego and the namesake of this site"
      />
      <p>
        The boys are budding engineers and enthusiastic playtesters. Watching a six-year-old figure something out, or a two-year-old find a new and creative way to break it, teaches you a lot about what design actually means. A good example: I once printed articulated snakes for the boys, fairly long ones. The first thing they did was start swinging them around and whacking things with the tail. Not exactly what I wanted, so I redesigned them shorter. Now they just hold them and make them wiggle along the floor, which was the idea all along. Children are the best testers, they'll try so many unexpected things. When something doesn't work, you'll know immediately. This is why I care about the details: keeping things safe, keeping things usable, and whenever possible, sparking joy.
      </p>
      <p>
        I work across a pretty wide range of mediums: UX and product design, front-end development, physical making like jewelry and cast pieces, and illustration. I got my start in software through game design and development, which is where I learned that the rules, the feel, and the fun are all part of the same design problem. I grew up in Saudi Arabia, the UAE, Australia, and Venezuela before landing in Texas in high school, which has been home ever since. Growing up across those very different places gave me a broad sense of what people find intuitive, beautiful, and fun. I care about making things that work for real people, whether the brief is corporate or deeply personal.
      </p>
      <p>
        I'm available for freelance product design and UX work, development projects, commissions for physical pieces and illustration, and creative collaborations. If something I've made has caught your eye, or you have a project that needs a toymaker, I'd love to hear from you!
      </p>
      <Button variant="ghost" href="/Megan Kossa - Developer and Designer - May 2026.pdf">
        Download Resume
      </Button>
    </div>
  );
}

export default AboutPage;
