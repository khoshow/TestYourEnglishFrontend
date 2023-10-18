import Link from "next/link";
import { useRouter } from "next/router";

const Services2 = (props) => {
  const currentPath = useRouter.path;

  const sendDataToParent = () => {
    const path = currentPath;
    return props.sendDataToParent(path);
  };

  const toMap = props.sendToChild().pageInfo;

  const services = [
    {
      icon: "/images/myImages/dictionary.png",
      title: "Vocabulary Test",
      delay: 100,
      category: ["The Correct Word", "The Correct Sentence", "Synonym"],
    },
    {
      icon: "/images/icon/icon_52.svg",
      title: "Idioms & Phrases",
      delay: 200,
    },
    // {
    //   icon: "/images/icon/icon_53.svg",
    //   title: "Design & Devlopment",
    //   delay: 100,
    // },
    // {
    //   icon: "/images/icon/icon_54.svg",
    //   title: "SEO & Social marketing",
    //   delay: 200,
    // },
    // {
    //   icon: "/images/icon/icon_55.svg",
    //   title: "Pay per click",
    //   delay: 300,
    // },
  ];

  return (
    <>
      <div
        className={`col-lg-4 col-md-6 col-sm-7 mt-40`}
        style={{ textAlign: "center" }}
        // data-aos="fade-up"
        // data-aos-delay={service.delay}
      >
        <Link href="/words" className="read-btn mt-auto ">
          <div
            className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
            style={{ minWidth: "300px" }}
          >
            <div className="icon d-flex justify-content-center">
              <img
                src="/images/myImages/dictionary.png"
                alt="icon"
                className="lazy-img "
              />
            </div>
            <h4 className="fw-300 mt-20 mb-50">Vocabulary Test</h4>
            <p className="btn-eleven fs-15 fw-500 tran3s text-center">Start</p>
          </div>
        </Link>
      </div>

      {/* End .col-xxl-2 */}
    </>
  );
};

export default Services2;
