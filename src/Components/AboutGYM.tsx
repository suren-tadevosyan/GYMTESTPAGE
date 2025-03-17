import Image from "next/image";

const About = () => {
  return (
    <section className="w-full py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-start md:text-left">
          ABOUT OUR GYM
        </h2>

        <div className="w-full">
          <Image
            src="/trainer.jpg"
            alt="Our Gym"
            width={1200}
            height={400}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <span className="max-w-3xl text-center md:text-left text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
            nisi nec mi feugiat sagittis vitae nec risus. Sed cursus, lectus sed
            finibus molestie, enim mauris eleifend neque, nec vestibulum enim
            turpis sed lacus. Integer nec purus enim.
          </span>

          <span className="bg-[#D7FB00] px-8 py-4 text-xl text-black rounded-3xl inline-flex items-center justify-center text-center">
            10 YEARS
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
