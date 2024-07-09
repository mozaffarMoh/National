import React from "react";
import { Footer, Header } from "../../components";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  React.useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="privacy-policy flexCenterColumn">
        <div className="main-data">
          <div className="container">
            <main>
              <header className="page-header">
                <h1 className="entry-title">سياسة الخصوصية</h1>
              </header>
              <div className="page-content">
                <ul>
                  <li>
                    <b>تعريف البيانات الشخصية</b>
                  </li>
                </ul>
                <p>
                  <b>جمع البيانات&nbsp;</b>
                </p>
                <p>
                  <span>
                    تقوم شركة دربني بجمع البيانات الشخصية عندما يُسجل المستخدم
                    حساب جديد على المنصة، أو عندما يستخدم خدماتنا.&nbsp;
                  </span>
                </p>
                <p>
                  <span>أنواع البيانات التي نجمعها:</span>
                </p>
                <ul>
                  <li>
                    <span>معلومات الحساب والملف الشخصي.</span>
                  </li>
                  <li>
                    <span>بيانات الدفع.</span>
                  </li>
                  <li>
                    <span>معلومات الجلسات وتسجيل الدخول.</span>
                  </li>
                  <li>
                    <span>معلومات التفاعل مع المحتوى التعليمي.</span>
                  </li>
                </ul>
                <p>
                  <span>
                    حيث نقوم بجمع ومعالجة هذه البيانات الشخصية للأغراض التالية:
                  </span>
                </p>
                <ul>
                  <li>
                    <span>توفير خدمات التدريب والتعليم عبر منصتنا.</span>
                  </li>
                  <li>
                    <span>تحسين تجربة المستخدم وفهم احتياجاته.</span>
                  </li>
                  <li>
                    <span>
                      تخصيص المحتوى والتواصل مع المستخدمين بشكل فعّال.
                    </span>
                  </li>
                  <li>
                    <span>تقديم دعم فني وحل المشكلات.</span>
                  </li>
                </ul>
                <p>
                  <span>
                    كما أننا نلتزم بحفظ البيانات الشخصية بشكل آمن وعدم مشاركتها
                    مع أي طرف ثالث.
                  </span>
                </p>
                <p>
                  <span>ومن حقوق المستخدمين المتدربين لدينا ما يلي:</span>
                </p>
                <ul>
                  <li>
                    <span>
                      الوصول إلى بياناتهم الشخصية وتحديثها أو حذفها.&nbsp;
                    </span>
                  </li>
                  <li>
                    <span>
                      التحكم في إعدادات الخصوصية والموافقة على استخدام بياناتهم.
                    </span>
                  </li>
                </ul>
                <p>
                  <b>التغييرات في بيان الخصوصية:</b>
                </p>
                <ul>
                  <li>
                    <span>نحتفظ بحق تحديث بيان الخصوصية هذا بشكل دوري.</span>
                  </li>
                  <li>
                    <span>
                      سيتم إشعار المستخدمين بأي تغييرات جذرية عبر الإعلانات أو
                      البريد الإلكتروني.
                    </span>
                  </li>
                </ul>
                <p>
                  <b>الاتصال بنا</b>
                </p>
                <p>
                  <span>
                    لأي استفسارات حول بيان الخصوصية يُرجى الاتصال بنا عبر البريد
                    الإلكتروني:
                  </span>
                </p>
                <p>
                  <a href="mailto:info@darrebni.net">
                    <span>info@darrebni.net</span>
                  </a>
                </p>
                <ul>
                  <li>
                    <b>أسباب جمع البيانات وكيفية استخدامها</b>
                  </li>
                </ul>
                <p>
                  <span>
                    تقوم شركة دربني بجمع ومعالجة البيانات الشخصية للمتدربين بهدف
                    تحسين تجربة المستخدم وتقديم خدمات تدريبية تعليمية
                    أفضل.&nbsp;
                  </span>
                </p>
                <p>
                  <span>
                    ونتعهد بأننا نحترم خصوصيتك ونقوم بحماية بياناتك باستخدام
                    أقصى درجات الأمان والموثوقية.
                  </span>
                </p>
                <p>
                  <span>
                    &nbsp;ولأن ثقتك بنا مهمة بإمكانك الاطلاع على أسباب جمعنا
                    للبيانات وكيفية استخدامها:
                  </span>
                </p>
                <ol>
                  <li>
                    <span>تقديم خدمات التدريب والتعليم:&nbsp;</span>
                  </li>
                </ol>
                <ul>
                  <li>
                    <span>
                      هذا يتضمن إنشاء حساب شخصي لك، وتخصيص المحتوى التعليمي
                      وفقًا لاحتياجاتك، و لمتابعة تقدمك في المسارات.
                    </span>
                  </li>
                </ul>
                <ol start={2}>
                  <li>
                    <span> تحسين تجربة المستخدم:</span>
                  </li>
                </ol>
                <ul>
                  <li>
                    <span>
                      هذه البيانات تشمل اتجاهات الاستخدام والتفاعل مع المحتوى
                      والخدمات لدينا.
                    </span>
                  </li>
                </ul>
                <ol start={3}>
                  <li>
                    <span> تخصيص المحتوى والتواصل:</span>
                  </li>
                </ol>
                <ul>
                  <li>
                    <span>
                      يساعد ذلك في تحسين جودة التدريب والتعليم وفعالية التواصل
                      بين المدربين والمتدربين.
                    </span>
                  </li>
                </ul>
                <ol start={4}>
                  <li>
                    <span> تقديم دعم فني وحل المشكلات:</span>
                  </li>
                </ol>
                <ul>
                  <li>
                    <span>
                      تساعد البيانات الشخصية في تقديم دعم فني فعّال وحل المشكلات
                      التي قد تواجهها أثناء استخدام المنصة.
                    </span>
                  </li>
                </ul>
                <ol start={5}>
                  <li>
                    <span> تحليل الأداء والإحصائيات:</span>
                  </li>
                </ol>
                <ul>
                  <li>
                    <span>
                      يساعد ذلك في فهم احتياجات المستخدمين وتحسين جودة الخدمات
                      المقدمة.
                    </span>
                  </li>
                  <li>
                    <span>
                      ونؤكد لك أننا لن نستخدم بياناتك بطرق تتجاوز الأغراض
                      المحددة أعلاه دون الحصول على موافقتك الصريحة.
                    </span>
                  </li>
                  <li>
                    <span>
                      كما نلتزم بتوفير خيارات التحكم في إعدادات الخصوصية
                      والموافقة على استخدام بياناتك.
                    </span>
                  </li>
                </ul>
                <ol start={6}>
                  <li>
                    <span> حماية الخصوصية والأمان:</span>
                  </li>
                </ol>
                <ul>
                  <li>
                    <span>
                      تتخذ دربني إجراءات أمان قوية لحماية بياناتك الشخصية من
                      الوصول غير المصرح به أو الاستخدام غير القانوني.
                    </span>
                  </li>
                  <li>
                    <span>
                      يرجى العلم بأننا لا نشارك بياناتك مع أطراف ثالثة بدون
                      موافقتك الصريحة، إلا في الحالات التي يشترط فيها ذلك بموجب
                      القوانين والمواثيق الدولية.
                    </span>
                  </li>
                </ul>
                <ol start={7}>
                  <li>
                    <span> الاتصال بنا:</span>
                  </li>
                </ol>
                <ul>
                  <li>
                    <span>
                      لأية استفسارات حول جمع البيانات أو سياسة الخصوصية، يُرجى
                      الاتصال بنا عبر البريد الإلكتروني:{" "}
                      <a href="mailto:info@darrebni.net">
                        <span>info@darrebni.net</span>
                      </a>
                    </span>
                  </li>
                </ul>
                <ol start={3} className="main-item">
                  <li>
                    <b> مشاركة البيانات</b>
                  </li>
                </ol>
                <p>
                  <span>
                    تلتزم شركة دربني بعدم مشاركة بيانات المستخدمين مع أطراف
                    ثالثة إلا في الحالات التي يُشترط فيها ذلك بموجب القوانين
                    والمواثيق الدولية؛ أو بموافقة صريحة من شركة دربني ونتخذ
                    أثناء عملية المشاركة إجراءات تأكيد دقيقة للتحقق من هوية
                    الجهة الثالثة وتأمين البيانات والمحافظة عليها.
                  </span>
                </p>
                <ol start={4} className="main-item">
                  <li>
                    <b> أمان البيانات</b>
                  </li>
                </ol>
                <p>
                  <span>
                    تتخذ دربني إجراءات أمان قوية لحماية بيانات المستخدمين؛ هذه
                    الإجراءات تشمل:
                  </span>
                </p>
                <ul>
                  <li>
                    <span>التشفير:</span>
                  </li>
                </ul>
                <p>
                  <span>
                    تستخدم دربني التشفير لحماية بيانات المستخدم&nbsp; أثناء
                    نقلها عبر الإنترنت، مما يقلل من خطر الوصول غير المصرح به.
                  </span>
                </p>
                <ul>
                  <li>
                    <span>الوصول المحدد:</span>
                  </li>
                </ul>
                <p>
                  <span>
                    تحدد دربني&nbsp; الوصول إلى البيانات بشكل دقيق وتمنح
                    الصلاحيات اللازمة للأفراد والجهات المعنية فقط.
                  </span>
                </p>
                <ul>
                  <li>
                    <span>تدريب الموظفين:</span>
                  </li>
                </ul>
                <p>
                  <span>
                    تقوم دربني بتدريب الموظفين على معايير الأمان وضرورة حماية
                    البيانات الشخصية للمستخدمين.
                  </span>
                </p>
                <ul>
                  <li>
                    <span>اختبار الأمان:</span>
                  </li>
                </ul>
                <p>
                  <span>
                    تجري دربني اختبارات أمان دورية للتحقق من صلابة الأمان وتحديث
                    الإجراءات بناءً على النتائج.
                  </span>
                </p>
                <ol start={5} className="main-item">
                  <li>
                    <b> حقوق الأفراد (المتدربين)</b>
                  </li>
                </ol>
                <ul>
                  <li>
                    <span>
                      الوصول إلى البيانات: الحصول على نسخة من البيانات الشخصية
                      التي نحتفظ بها حولهم.
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>
                      تصحيح البيانات: تصحيح أو تحديث البيانات الشخصية التي تكون
                      غير صحيحة أو غير كاملة.
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>
                      حذف البيانات: طلب حذف البيانات الشخصية في بعض الحالات،
                      وفقًا للقوانين المحلية.
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>
                      الاعتراض للمعالجة: رفع اعتراض على معالجة بياناتهم الشخصية
                      في بعض الظروف.
                    </span>
                  </li>
                </ul>
                <ol start={6} className="main-item">
                  <li>
                    <b> ملفات تعريف الارتباط (الكوكيز)</b>
                  </li>
                </ol>
                <p>
                  <span>
                    نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وفهم كيفية
                    استخدامه للمنصة.&nbsp;
                  </span>
                </p>
                <p>
                  <span>
                    يمكن للمستخدم تعديل إعدادات ملفات تعريف الارتباط أو رفضها
                    عبر إعدادات المتصفح الخاص به.&nbsp;
                  </span>
                </p>
                <ol start={7} className="main-item">
                  <li>
                    <b> تغييرات في سياسة الخصوصية</b>
                  </li>
                </ol>
                <p>
                  <span>
                    تلتزم شركة دربني بالإعلان عن أي تغييرات جذرية في سياسة
                    الخصوصية عند إجرائها.
                  </span>
                </p>
                <p>
                  <span>
                    قد لا يتم الإعلان عن بعض التغييرات التي لا تأثير لها على
                    بنود الخصوصية، وسياسات أمان البيانات والمشاركة مع أطراف
                    أخرى.
                  </span>
                </p>
              </div>
            </main>
          </div>
        </div>{" "}
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
