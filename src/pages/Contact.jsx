import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Title from "../components/Title";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const schema = yup
  .object({
    email: yup.string().email("信箱格式有誤").required("此欄位必填"),
    name: yup.string().required("此欄位必填"),
    title: yup.string().required("此欄位必填"),
    message: yup.string().required("此欄位必填"),
  })
  .required();

const Contact = () => {
  const s5Ref = useRef(null);
  const form = useRef(null);
  const s2H1Title = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: s2H1Title.current,
          // markers: true,
          start: "top 70%",
          end: "top 10%",
          toggleActions: "play none none reverse",
        },
      });
      tl.from(".span", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        y: 100,
      });
    },
    { scope: s2H1Title }
  );

  const onSubmit = async () => {
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      console.log("SUCCESS!");
    } catch (error) {
      console.log("FAILED...", error.text);
    }
  };
  return (
    <div ref={s5Ref} className="container p-10 flex justify-center flex-col mx-auto my-[200px]">
      <Title titleRef={s2H1Title} title="CONTACT" />
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[500px] mx-auto mt-4 md:mt-12 flex flex-col gap-8"
      >
        <div className="relative">
          <input
            type="text"
            name="email"
            className={`
              bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              ${errors.email ? " !border-1 !border-[#f00]" : ""}
            `}
            placeholder="Email*"
            {...register("email")}
          />
          {errors.email && <p className=" text-[#f00] text-sm absolute -bottom-6">{errors.email.message}</p>}
        </div>
        <div className="relative">
          <input
            type="text"
            name="name"
            className={`
              bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              ${errors.name ? " !border-1 !border-[#f00]" : ""}
            `}
            placeholder="名字*"
            {...register("name")}
          />
          {errors.name && <p className=" text-[#f00] text-sm absolute -bottom-6">{errors.name.message}</p>}
        </div>
        <div className="relative">
          <input
            type="text"
            name="title"
            className={`
              bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              ${errors.title ? " !border-1 !border-[#f00]" : ""}
            `}
            placeholder="標題*"
            {...register("title")}
          />
          {errors.title && <p className=" text-[#f00] text-sm absolute -bottom-6">{errors.title.message}</p>}
        </div>
        <div className="relative">
          <textarea
            type="text"
            name="message"
            // className="h-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            className={`
              min-h-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              ${errors.message ? " !border-1 !border-[#f00]" : ""}
            `}
            placeholder="訊息*"
            {...register("message")}
          />
          {errors.message && <p className=" text-[#f00] text-sm absolute -bottom-6">{errors.message.message}</p>}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 transition-[1s] hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
