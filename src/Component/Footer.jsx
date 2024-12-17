/* Social Media Icons Import */
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  const footerData = [
    {
      title: "Company",
      menu: [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Contact", link: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-zinc-900 text-white lg:p-6 p-2 font-manrope">
      <section>
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <a
            href="/"
            title="KMP Speed Parcel Services"
            className="inline-flex items-center"
          >
            <img src="/kmp.jpg" alt="KMP Logo" className="h-5" />
            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
              KMP Speed Parcel Services
            </span>
          </a>
          <p className="text-green-500 mb-5 text-sm tracking-wider">Smiles Beyond miles</p>
          <div className="grid gap-10 row-gap-10 mb-8 lg:grid-cols-2">
            <div className="space-y-4">
              {[
                { label: "Contact No", value: "+1 234 567 890" },
                {
                  label: "Address",
                  value: "123 Speed Parcel St, Logistics City, XY 78910",
                },
                { label: "Email", value: "support@kmpservices.com" },
              ].map((item, index) => (
                <div key={index}>
                  <p className="font-semibold py-1">{item.label}</p>
                  <p className="text-sm">{item.value}</p>
                </div>
              ))}
            </div>
            {/* About Section */}
            <div>
              <ul className="list-style-none lg:pl-5 space-y-6">
                {[
                  "We care - We carry. More Fast, Simple & Safe",
                  "Trustable Delivery Agent, Tamilnadu Wide Logistics Made Easy",
                  "Fast And Reliable Courier Services, Get it there when you need it there",
                ].map((aboutText, index) => (
                  <li key={index} className="text-sm decoration-none flex items-center ">
                    <FaLocationArrow className="text-green-500"/> {" "} 
                    <p className="pl-4">{aboutText}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="flex flex-col justify-between pt-5 border-t border-gray-200 sm:flex-row"></div>
        </div>
      </section>

      <section className="flex flex-col items-center mb-10">
        <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {footerData[0].menu.map((item, index) => (
            <li key={index} className="text-center sm:text-left">
              <a href={item.link} className="text-sm hover:text-blue-500">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-wrap justify-between items-center text-sm px-5 space-y-4 md:space-y-0">
        <p className="w-full md:w-auto text-center tracking-wider">
          Managed By{" "}
          <a
            href="https://metaphorhub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            Metaphor Hub
          </a>
        </p>
        <p className="w-full md:w-auto text-center md:text-left text-gray-400">
          © 2024 KMP Speed Parcel Services. All rights reserved.
        </p>
        <div className="flex justify-center md:justify-end space-x-4 w-full md:w-auto">
          <FaWhatsapp className="cursor-pointer hover:text-green-500 text-[18px]" />
          <RiFacebookCircleLine className="cursor-pointer hover:text-blue-500 text-[18px]" />
          <FaInstagram className="cursor-pointer hover:text-pink-500 text-[18px]" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
