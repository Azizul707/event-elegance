import Marquee from "react-fast-marquee";
import FeaturedWorks from "./FeaturedWorks";
import Testimonials from "../Testimonials/Testimonials";
const Home = () => {

  return (
    <div className="mt-5">
      <div className="carousel h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img  src="https://i.ibb.co/9YftG2C/carousel2.png" className="w-full " />
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 ">
            <h4 className="text-5xl font-bold text-white p-2 md:mt-40 md:ml-40 ">The Ultimate Choice  for <br /> Exceptional Corporate <br /> Event Management</h4>
            <p className="text-white p-2 md:mt-10 md:ml-40 w-[50rem]"> With our wealth of experience and unwavering commitment to excellence, we specialize in crafting and executing corporate events that leave a lasting impact. From meticulously planned conferences to flawlessly executed product launches, our dedicated team ensures that every detail is handled with precision and care.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/jfL8cGD/Marsh-and-Mclennan-Conference-by-Pegasus-Events-India-Pvt-Ltd-2.jpg
" className="w-full" />
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 ">
            <h4 className="text-5xl font-bold text-white p-2 md:mt-40 md:ml-40 ">The Ultimate Choice  for <br /> Exceptional Corporate <br /> Event Management</h4>
            <p className="text-white p-2 md:mt-10 md:ml-40 w-[50rem]"> With our wealth of experience and unwavering commitment to excellence, we specialize in crafting and executing corporate events that leave a lasting impact. From meticulously planned conferences to flawlessly executed product launches, our dedicated team ensures that every detail is handled with precision and care.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/6NXR9HL/What-Size-Projector-Screen-For-Events.jpg" className="w-full" />
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 ">
            <h4 className="text-5xl font-bold text-white p-2 md:mt-40 md:ml-40 ">The Ultimate Choice  for <br /> Exceptional Corporate <br /> Event Management</h4>
            <p className="text-white p-2 md:mt-10 md:ml-40 w-[50rem]"> With our wealth of experience and unwavering commitment to excellence, we specialize in crafting and executing corporate events that leave a lasting impact. From meticulously planned conferences to flawlessly executed product launches, our dedicated team ensures that every detail is handled with precision and care.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/5sQ8JJP/al-elmes-ULHx-Wq8reao-unsplash.jpg
" className="w-full" />
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 ">
            <h4 className="text-5xl font-bold text-white p-2 md:mt-40 md:ml-40 ">The Ultimate Choice  for <br /> Exceptional Corporate <br /> Event Management</h4>
            <p className="text-white p-2 md:mt-10 md:ml-40 w-[50rem]"> With our wealth of experience and unwavering commitment to excellence, we specialize in crafting and executing corporate events that leave a lasting impact. From meticulously planned conferences to flawlessly executed product launches, our dedicated team ensures that every detail is handled with precision and care.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      {/* second section start */ }

      <section className=" max-w-screen-xl mx-auto mt-24 md:flex gap-36">
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl font-bold ">Empowering Corporations to Seamlessly Execute Events</h2>
          <p className="text-sm">At Event Elegance, our mission is to empower corporations with seamless event management solutions. With our expertise and dedication, we take the stress out of planning and executing corporate events, allowing businesses to focus on their core objectives. Whether it is a product launch, a conference, a team-building retreat, or any corporate gathering, we ensure every detail is meticulously handled. From conceptualization to execution, our team is committed to delivering flawless and memorable events that leave a lasting impression. </p>

          <div className="flex justify-between bg-slate-100 p-5 text-xl font-semibold">
            <span>1986 <br />ESTABLISHED</span>
            <span>1000 <br />EMPLOYEE</span>
          </div>
        </div>
        <div className="flex-1">
          <img src="https://i.ibb.co/kyNq7ZG/png-transparent-small-business-management-company-employee-benefits-meeting-company-service-public-r.png" alt="" />
        </div>
      </section>
      {/* Third section start */ }
      <section className="max-w-screen-xl mx-auto mt-24">
        <h4 className="text-4xl font-bold mb-20 border-l-4 border-yellow-600 px-4">Our Loving Partners</h4>
        <Marquee className="shadow-md p-5 rounded-xl">
          <img className="mr-40" src="https://i.ibb.co/FY8VtLG/amazon.png" alt="" />
          <img className="mr-40" src="https://i.ibb.co/Xsq0df5/figma.png" alt="" />
          <img className="mr-40" src="https://i.ibb.co/2n8S5Hy/spotify.png" alt="" />
          <img className="mr-40" src="https://i.ibb.co/6F9J464/google.png" alt="" />
          <hr />

        </Marquee>
      </section>

      {/* fourth section start */ }

      <section className="max-w-screen-xl mx-auto mt-24">
        <h4 className="text-4xl font-bold border-l-4 border-yellow-600 px-4">Featured Works</h4>
        <div className="">
          <div className="">
            <FeaturedWorks></FeaturedWorks>
          </div>

        </div>
      </section>

      {/* section five start */ }
      <section>
        <Testimonials/>
      </section>




    </div>

  );
};

export default Home;