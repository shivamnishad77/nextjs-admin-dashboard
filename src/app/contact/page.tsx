
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
    

      <Contact />
    </>
  );
};

export default ContactPage;
