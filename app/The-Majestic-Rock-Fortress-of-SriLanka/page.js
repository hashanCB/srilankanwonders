import SectionTitle from "@/components/SectionTitle";
import Destination from "@/components/slider/Destination";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

const page = () => {
  return (
    <ReveloLayout>
      {/* Page Banner Start */}
      {/* <section className="page-banner-two rel z-1">
        <div className="container-fluid">
          <hr className="mt-0" />
          <div className="container">
            <div className="banner-inner pt-15 pb-25">
              <h2
                className="page-title mb-10"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Sigiriya, Sri Lanka
              </h2>
              <nav aria-label="breadcrumb">
                <ol
                  className="breadcrumb justify-content-center mb-20"
                  data-aos="fade-right"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Destination Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section> */}
      {/* Page Banner End */}
      {/* Destination Gallery start */}
      {/* Destination Gallery start */}

      {/* Destination Gallery End */}

      {/* Destination Gallery End */}
      {/* About Us Area start */}
      <section className="about-us-area pt-90 pb-100 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-6">
              <div
                className="destination-details-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="h2 mb-15"> Sigiriya </span>
                  <h4>From the Era of King Ravana to Modern Times</h4>
                </div>
                <h6>Introduction</h6>
                <p className="text-justify">
                  Sigiriya, also known as the "Lion Rock," is a UNESCO World
                  Heritage Site and one of Sri Lanka's most iconic landmarks.
                  Rising majestically 200 meters above the surrounding plains,
                  this rock fortress is a testament to the country's rich
                  history, engineering marvels, and cultural heritage. Its story
                  spans millennia, weaving a tapestry of myths, ancient history,
                  and modern-day tourism. This article explores the journey of
                  Sigiriya, from the mythical era of King Ravana to its current
                  status as a global attraction.
                </p>
                <h6>The Mythical Connection: Sigiriya and King Ravana</h6>
                <p>
                  The legend of King Ravana, a central figure in the Indian epic
                  Ramayana, has long been associated with Sri Lanka. According
                  to folklore, Ravana was a powerful king who ruled over a
                  highly advanced civilization. While the exact connection
                  between Ravana and Sigiriya remains speculative, local legends
                  suggest that Sigiriya might have been one of his palaces or
                  hideouts. Some even believe the massive rock served as a
                  watchtower or fortress during his reign. Archaeological
                  evidence does not explicitly link Sigiriya to Ravana, but the
                  mythical narratives add a layer of intrigue to the site,
                  blending history with mythology. This association has
                  contributed to Sigiriya's allure as a place of mystery and
                  wonder.
                </p>
                <h6>Key Highlights</h6>
                <ul className="list-style-two mt-30 mb-45">
                  <li>
                    <strong>Rock Summit:</strong> Remains of King Kashyapa's
                    palace.
                  </li>
                  <li>
                    <strong>Frescoes:</strong> Paintings of celestial maidens.
                  </li>
                  <li>
                    <strong>Water Gardens:</strong> Advanced hydraulic systems.
                  </li>
                  <li>
                    <strong>Mirror Wall:</strong> Ancient graffiti showcasing
                    visitor impressions.
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="destination-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.2358397638354!2d80.74503861529698!3d7.957984079594478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca8b9df64a2a9%3A0x2ec87c0f29a01b71!2sSigiriya!5e0!3m2!1sen!2slk!4v1706508986625!5m2!1sen!2slk"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div
              className="destination-details-content rmb-55"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-25">
                <span className="h2 mb-15">The Historical Foundation</span>
                <h4> King Kashyapa's Masterpiece</h4>
              </div>

              <p>
                The recorded history of Sigiriya begins in the 5th century CE
                during the reign of King Kashyapa (477–495 CE). Kashyapa, the
                son of King Dhatusena, seized the throne through a coup, ousting
                his half-brother Moggallana. Fearing retaliation, Kashyapa
                decided to build an impregnable fortress atop Sigiriya.
              </p>

              <h6>
                Sigiriya became the king's capital and an architectural
                masterpiece. The complex included:
              </h6>
              <ul className="list-style-two mt-30 mb-45">
                <li>
                  <strong>The Lion Gate:</strong> The entrance to the palace,
                  flanked by giant lion paws carved into the rock.
                </li>
                <li>
                  <strong>The Mirror Wall:</strong> A polished wall where
                  visitors left inscriptions and poems, some dating back over a
                  thousand years.
                </li>
                <li>
                  <strong>The Water Gardens:</strong> Advanced irrigation
                  systems and ponds that demonstrate exceptional hydraulic
                  engineering.
                </li>
                <li>
                  <strong>The Frescoes:</strong> Exquisite paintings of
                  celestial maidens, believed to represent either apsaras
                  (heavenly beings) or Kashyapa's concubines.
                </li>
              </ul>

              <h6> Sigiriya's Transformation: A Buddhist Monastery </h6>
              <p>
                After Kashyapa's death, Sigiriya was abandoned as a royal
                palace. However, it found new life as a Buddhist monastery. For
                centuries, monks inhabited the caves and rock shelters around
                Sigiriya, turning it into a spiritual retreat. This period added
                a new layer to its history, blending secular and sacred
                elements.
              </p>

              <h6> Rediscovery in the Colonial Era </h6>
              <p>
                Sigiriya remained largely forgotten until its rediscovery during
                the British colonial period in the 19th century. Major Jonathan
                Forbes of the British Army documented its significance in 1831.
                Subsequent archaeological efforts revealed its full grandeur,
                bringing Sigiriya into the global spotlight. The 20th century
                saw systematic excavation and conservation projects led by Sri
                Lankan and international archaeologists. These efforts preserved
                Sigiriya's architectural and artistic treasures, making it a
                window into the island's ancient past.
              </p>

              <h6> Sigiriya in Modern Times </h6>
              <p>
                Today, Sigiriya is one of Sri Lanka's most visited tourist
                destinations, drawing travelers from around the globe. Its fame
                as a UNESCO World Heritage Site has made it a symbol of Sri
                Lanka's cultural heritage. Visitors marvel at:
                <ul className="list-style-two mt-30 mb-45">
                  <li>
                    <strong>The Ascent: </strong> Climbing the steep staircase
                    to the summit is an unforgettable experience, offering
                    panoramic views of the surrounding landscape.
                  </li>
                  <li>
                    <strong>The Frescoes:</strong> Despite their age, the
                    vibrant paintings continue to captivate audiences.
                  </li>
                  <li>
                    <strong>The Gardens:</strong> The symmetry and design of the
                    gardens reflect the sophistication of ancient Sri Lankan
                    engineering.
                  </li>
                </ul>
                <p>
                  Sigiriya has also become a center for research, with ongoing
                  studies exploring its history, engineering, and cultural
                  significance.
                </p>
              </p>

              <h6> The Mystique Lives On</h6>
              <p>
                From the mythical reign of King Ravana to the historical
                brilliance of King Kashyapa, Sigiriya's story is one of
                resilience and reinvention. Whether as a royal fortress, a
                Buddhist monastery, or a modern-day icon, Sigiriya continues to
                inspire awe and wonder. It stands as a testament to the
                ingenuity of ancient Sri Lankans and a timeless reminder of the
                island's rich cultural legacy.
              </p>

              <h6> Plan Your Visit</h6>
              <p>
                Sigiriya is located in the Central Province of Sri Lanka, about
                175 km northeast of Colombo. The best time to visit is during
                the dry season (January to April) to enjoy clear skies and
                cooler weather
              </p>
              <Link
                href="destination-details"
                className="theme-btn mt-25 style-two"
              >
                <span data-hover="Explore Destinations">
                  Explore Destinations
                </span>
                <i className="fal fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-area rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{ backgroundImage: "url(assets/images/cta/cta1.jpg)" }}
              >
                <span className="category">Tent Camping</span>
                <h2>Explore the world best tourism</h2>
                <Link
                  href="tour-details"
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="Explore Tours">Explore Tours</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{ backgroundImage: "url(assets/images/cta/cta2.jpg)" }}
              >
                <span className="category">Sea Beach</span>
                <h2>World largest Sea Beach in Thailand</h2>
                <Link href="tour-details" className="theme-btn style-two">
                  <span data-hover="Explore Tours">Explore Tours</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{ backgroundImage: "url(assets/images/cta/cta3.jpg)" }}
              >
                <span className="category">Water Falls</span>
                <h2>Largest Water falls Bali, Indonesia</h2>
                <Link
                  href="tour-details"
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="Explore Tours">Explore Tours</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-tour-area bgc-black text-white pt-100 pb-50 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center pb-25">
            <div className="col-lg-6">
              <div
                className="section-title counter-text-wrap mb-20"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Discover Tours"} bg={"bgc-primary"} />
              </div>
            </div>
            {/* <div className="col-lg-6 text-lg-end">
              <ul className="destinations-nav style-two mb-20">
                <li data-filter="*" className="active">
                  Show All
                </li>
                <li data-filter=".beach">Beach</li>
                <li data-filter=".museum">Museum</li>
                <li data-filter=".park">Park</li>
                <li data-filter=".city">City</li>
              </ul>
            </div> */}
          </div>
          <div className="row destinations-active justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 item beach museum">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/destinations/tour4.jpg" alt="Tour" />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 item beach museum">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/destinations/tour4.jpg" alt="Tour" />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 item beach museum">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/destinations/tour4.jpg" alt="Tour" />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 item beach museum">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/destinations/tour4.jpg" alt="Tour" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Area end */}
      {/* Other Sections */}
      <section className="destinations-area bgc-lighter pt-85 pb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Explore Our Popular Destinations"} />
              </div>
            </div>
          </div>
          <Destination />
        </div>
      </section>
      {/* Remaining Sections */}
      <Subscribe />
    </ReveloLayout>
  );
};

export default page;
