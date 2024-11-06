

import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page ",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
     <DefaultLayout>
     <p className="text-black dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat animi vel aspernatur sint laboriosam quas dolore mollitia. Veritatis harum quam hic autem molestiae illo voluptates saepe. Accusamus praesentium eum illo voluptatibus nobis.</p>
    </DefaultLayout>
    </>
  );
};

export default AboutPage;
