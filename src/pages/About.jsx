import React from "react";
import AboutPic from "../../public/aboutUs.jpg";

const About = () => {
  return (
    <div className="lg:max-w-3xl max-w-[90%] mx-auto my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        <div className="">
          <img className="rounded-2xl" src={AboutPic} alt="" />
        </div>
        <div className="">
          <h1 className="text-3xl font-bold">Our Story</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            asperiores! At libero inventore ipsam voluptas et? Natus suscipit,
            fuga hic a quisquam reiciendis ad ut dolores rem voluptatum quos
            assumenda deserunt veritatis dignissimos aliquam impedit itaque. Id
            velit recusandae dolores fuga. Odio voluptatem rem dolor asperiores
            dolore deserunt eos ratione!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
