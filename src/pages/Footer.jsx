import leetcode from "./../assets/icon/leetcode.svg";
import github from "./../assets/icon/github.svg";
/* import instagram from "./../assets/icon/instagram.svg";
import threads from "./../assets/icon/threads.svg"; */

const Footer = () => {
  return (
    <div className="w-full p-6 bg-bgcolor flex gap-8 justify-center items-center outline outline-1 outline-white ">
      <a href="https://github.com/a5757657" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github" className=" size-[30px] sm:size-[40px]" />
      </a>
      <a href="https://leetcode.com/a5757657/" target="_blank" rel="noopener noreferrer">
        <img src={leetcode} alt="leetcode" className=" size-[30px] sm:size-[40px]" />
      </a>
      {/* <a href="https://www.instagram.com/chen.chunhan/" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="instagram" className=" size-[30px] sm:size-[40px]" />
      </a>
      <a href="https://www.threads.net/@chen.chunhan" target="_blank" rel="noopener noreferrer">
        <img src={threads} alt="threads" className=" size-[30px] sm:size-[40px]" />
      </a> */}
    </div>
  );
};

export default Footer;
