import "./scss/style.scss";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RiFolder5Line } from "react-icons/ri";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoCodeSharp } from "react-icons/io5";
import { FcApproval } from "react-icons/fc";
import { BsBootstrap } from "react-icons/bs";
import { BsCardHeading } from "react-icons/bs";
import CardComp from "./components/Card";
import { Container, Row } from "react-bootstrap";

const data = [
  {
    id: "1",
    icon: RiFolder5Line,
    title: "Fresh new Layout",
    content:
      "With Bootstrap 5, we've created a fresh new layout for this template!",
  },
  {
    id: "2",
    icon: FaCloudDownloadAlt,
    title: "Free to download",
    content:
      "As always, Start Bootstrap has a powerful collectin of free templates!",
  },
  {
    id: "3",
    icon: BsCardHeading,
    title: "Jumbotron hero header",
    content: "The heroic part of this template is the jumbotron hero header!",
  },
  {
    id: "4",
    icon: BsBootstrap,
    title: "Feature boxes",
    content: "We've created some custom feature boxes using Bootstrap icons!",
  },
  {
    id: "5",
    icon: IoCodeSharp,
    title: "Simple Clean Code",
    content:
      "We keep our dependencies up to date and squash bugs as they come!",
  },
  {
    id: "6",
    icon: FcApproval,
    title: "A name you trust",
    content:
      "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Container className="card-container">
        <Row className="row-gap-5">
          {data.map(({ icon, content, title, id }) => (
            <CardComp key={id} content={content} icon={icon} title={title} />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
