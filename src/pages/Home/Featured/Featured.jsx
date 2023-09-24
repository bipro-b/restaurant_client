import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white ot-8 my-20 ">
      <SectionTitle
        subHeading="Check it Out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-opacity-60">
        <div>
          <img src={featuredImg} alt="/" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can I get some?</p>
          <p className="text-white">
            Need some placeholder text in your code? Type lorem and press Tab.
            If needed, you can add the text together with a tag: just add a tag
            name and before lorem. If you want to generate a specific number
            of words, add a number after lorem, e.g. lorem5, then press Tab.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
