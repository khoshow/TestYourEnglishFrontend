import Link from "next/link";
import { useRouter } from "next/router";

const Services2 = (props) => {
  const currentPath = useRouter.path;

  const sendDataToParent = () => {
    const path = currentPath;
    return props.sendDataToParent(path);
  };

  const toMap = props.sendToChild().pageInfo;
  console.log("TO Map", toMap);

  const services = [
    {
      icon: "/images/myImages/dictionary.png",
      title: "Vocabulary Test",
      delay: 100,
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
      {toMap.map((data, index) => (
        <div
          key={index}
          //   className={`col-lg-3 col-md-4 col-sm-6 mt-40`}
          className="col-lg-4 col-md-4 col-sm-6 mt-40"
          style={{ textAlign: "center" }}
          // data-aos="fade-up"
          // data-aos-delay={service.delay}
        >
          <Link href={data.url} className="read-btn mt-auto ">
            <div
              className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
              style={{ minWidth: "" }}
            >
              {/* <div className="icon d-flex justify-content-center">
                <img src={data.image} alt="icon" className="lazy-img " />
              </div> */}
              <p className="fw-300 mt-20 mb-50">{data.title}</p>
              <p className="btn-eleven fs-15 tran3s text-center">Start</p>
            </div>
          </Link>
          {/* /.card-style-ten */}
        </div>
      ))}

      {/* End .col-xxl-2 */}
    </>
  );
};

export default Services2;
