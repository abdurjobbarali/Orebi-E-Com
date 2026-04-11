import Container from "../common/Container";
import FooterLinks from "../common/FooterLinks";
import { Link } from "react-router-dom";
import Image from "../common/Image";
import logo from "/src/assets/logo.svg";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-15 bg-[#F5F5F3]">
      <Container>
        <div className="flex justify-between items-start">
          <div className="space-y-1.5">
            <h3 className="font-bold text-secondary">MENU</h3>
            <Link to={"/"}>
              <FooterLinks ftrLink={"Home"} />
            </Link>
            <Link to={"shop"}>
              <FooterLinks ftrLink={"Shop"} />
            </Link>
            <Link to={"about"}>
              <FooterLinks ftrLink={"About"} />
            </Link>
            <Link to={"contact"}>
              <FooterLinks ftrLink={"Contact"} />
            </Link>
           
          </div>

          <div className="space-y-1.5">
            <h3 className="font-bold text-secondary">SHOP</h3>
            <Link to={"/"}>
              <FooterLinks ftrLink={"Category 1"} />
            </Link>
            <Link to={"shop"}>
              <FooterLinks ftrLink={"Category 2"} />
            </Link>
            <Link to={"about"}>
              <FooterLinks ftrLink={"Category 3"} />
            </Link>
            <Link to={"contact"}>
              <FooterLinks ftrLink={"Category 4"} />
            </Link>
            <Link to={"journal"}>
              <FooterLinks ftrLink={"Category 5"} />
            </Link>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-bold text-secondary">HELP</h3>
            <Link to={"/"}>
              <FooterLinks ftrLink={"Privacy Policy"} />
            </Link>
            <Link to={"shop"}>
              <FooterLinks ftrLink={"Terms & Conditions"} />
            </Link>
            <Link to={"about"}>
              <FooterLinks ftrLink={"Special E-shop"} />
            </Link>
            <Link to={"contact"}>
              <FooterLinks ftrLink={"Shipping"} />
            </Link>
            <Link to={"journal"}>
              <FooterLinks ftrLink={"Secure Payments"} />
            </Link>
          </div>

          <div>
            <h3 className="font-bold text-secondary w-46.75">
              (052) 611-5711 company@domain.com
            </h3>
            <p className="text-[14px] text-[#6d6d6d]">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>

          <div className="w-100">
            <Image src={logo} className={"w-30"} />
          </div>
        </div>

        <div className="flex justify-between items-center pt-16">
          <div className="flex justify-between items-center gap-x-6">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
          <p className="text-[14px] text-[#6d6d6d]">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Footer;
