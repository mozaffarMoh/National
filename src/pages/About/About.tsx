import { Footer, Header } from "../../components";
import "./About.scss";

const About = () => {
  return (
    <>
      <Header />
      <div className="about flexCenterColumn">
        <h1 className="fw-bold">دربني للوطني </h1>

        <ul>
          <li className="fw-bold fs-5">
            ماهو مشروع دربني للوطني ؟ ومن سيستفيد منه ؟
          </li>
          <li>
            مشروع دربني للوطني موجّه لجميع طلاب سورية، حيث وفّرنا لكم أكبر مصدر
            رقمي لدراسة الامتحان الوطني الموحد والتقدم إليه دون قلق أو ضياع بين
            المصادر بعد اليوم.
          </li>
          <li>
            قمنا بحل الكثير من المشكلات المتعلقة بدراسة الامتحان الوطني مثل:
          </li>
          <ul>
            <li><span>&bull;</span> إيجاد مصدر موحّد للدراسة.</li>
            <li><span>&bull;</span> الحصول على بنوك الأسئلة السابقة.</li>
            <li><span>&bull;</span> التأكد من صحة الأجوبة وِفق المراجع.</li>
            <li><span>&bull;</span> الاختبار الذاتي للمعلومات.</li>
          </ul>
          <li>يمكن لكل من طلاب كليات:</li>
          <ul>
            <li><span>&bull;</span> الهندسة المعلوماتية</li>
            <li><span>&bull;</span> هندسة العمارة</li>
            <li><span>&bull;</span> طب بشري</li>
            <li><span>&bull;</span> طب أسنان</li>
            <li><span>&bull;</span> صيدلة</li>
          </ul>
          <li>
            الاستفادة من مشروع دربني للوطني لتسهيل دراسة الامتحان واختبار
            أنفُسهم فور الانتهاء، والتأكد أيضاً ضمن المراجع الموثقة داخل التطبيق
            من صحة الأجوبة والمعلومات.
          </li>
          <li>
            كل ذلك سيتم وفق تجربة مستخدم تم العمل عليها لتوفر أفضل دراسة متاحة
            لكم.
          </li>
        </ul>

        <div className="flexCenter">
          <a
            href="mailto:info@darrebni.net"
            target="_blank"
            className="button"
            rel="noopener noreferrer"
          >
            <div className="contact-item">
              <img
                src={
                  "https://platform.darrebni.net/static/media/email.5fb2e129fd4069784df899454bc4b473.svg"
                }
                alt="email"
                className="email-icon"
              />
              <div className="title">البريد الإلكتروني</div>
              <div className="info">info@darrebni.net</div>
            </div>
          </a>
          <a href="tel:00447859544893" className="button">
            <div className="contact-item">
              <img
                src={
                  "https://platform.darrebni.net/static/media/phone.851370c76778ada2a9075cecc73c852a.svg"
                }
                className="phone-icon"
                alt="phone"
              />
              <div className="title">اتصل بنا</div>
              <div className="info">00447859544893</div>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
