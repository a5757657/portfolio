import sake from "./../assets/images/sake.png";
import meimate from "./../assets/images/meimate.png";
import miaoLihan from "./../assets/images/miao-lihan.png";
import scrum from "./../assets/images/scrum.png";
import interactiveWeb from "./../assets/images/interactive-web.png";
import stylist from "./../assets/images/stylist.png";
import member from "./../assets/images/member.png";

const sideProject = [
  {
    title: "禾酒林-電商網站製作",
    info: "此為清酒為主題發想的電商網站，使用者可以在此網站線上購買清酒，除了單純購買的形式，也提供訂閱清酒的服務，此外也提供相關清酒隻是供使用者學習，另外也有清酒相關的活動，如品酒會、酒展等等。",
    img: sake,
    techs: [
      {
        name: "React",
        link: "https://react.dev/",
      },
      {
        name: "AOS",
        link: "https://michalsnik.github.io/aos/",
      },
      {
        name: "framer-motion",
        link: "https://motion.dev",
      },
      {
        name: "gsap",
        link: "https://gsap.com",
      },
      {
        name: "node-sass",
        link: "https://github.com/sass/node-sass",
      },
    ],
    links: {
      github: "https://github.com/ashleyc2219/Hejoulin",
    },
  },
  {
    title: "The F2E 立委競選官網",
    info: "以立委選舉為發想的形象網站，簡單明亮的配色及排版，讓使用可能夠快速了解到候選人的政見，開頭可愛的動畫是使用Lottie動畫。",
    img: miaoLihan,
    techs: [
      {
        name: "React",
        link: "https://react.dev/",
      },
      {
        name: "styled-components",
        link: "https://styled-components.com/",
      },
      {
        name: "gh-pages",
        link: "https://github.com/tschaub/gh-pages",
      },
      {
        name: "lottie-react",
        link: "https://lottiereact.com",
      },
      {
        name: "MUI",
        link: "https://mui.com",
      },
      {
        name: "react-countup",
        link: "https://github.com/glennreyes/react-countup",
      },
      {
        name: "node-sass",
        link: "https://github.com/sass/node-sass",
      },
    ],
    links: {
      demo: "https://a5757657.github.io/Miao-Li-Han-campaign-website/",
      github: "https://github.com/a5757657/Miao-Li-Han-campaign-website",
    },
  },
  {
    title: "The F2E Scrum 新手村",
    info: "本專案使用互動拖拉選項的方式，讓使用者可以在遊戲中學習scrum開發。",
    img: scrum,
    techs: [
      {
        name: "React",
        link: "https://react.dev/",
      },
      {
        name: "AOS",
        link: "https://michalsnik.github.io/aos/",
      },
      {
        name: "styled-components",
        link: "https://styled-components.com/",
      },
      {
        name: "nanoid",
        link: "https://zelark.github.io/nano-id-cc/",
      },
      {
        name: "react-beautiful-dnd",
        link: "https://react-beautiful-dnd.netlify.app/?path=/story/single-vertical-list--basic",
      },
      {
        name: "gh-pages",
        link: "https://github.com/tschaub/gh-pages",
      },
      {
        name: "node-sass",
        link: "https://github.com/sass/node-sass",
      },
    ],
    links: {
      demo: "https://a5757657.github.io/f2e-scrum/",
      github: "https://github.com/a5757657/f2e-scrum",
    },
  },
  {
    title: "The F2E 活動網站設計",
    info: "本專案使用大量的視差滾動特效，及動畫效果讓使用者感受到互動性的體驗。",
    img: interactiveWeb,
    techs: [
      {
        name: "React",
        link: "https://react.dev/",
      },
      {
        name: "AOS",
        link: "https://michalsnik.github.io/aos/",
      },
      {
        name: "gsap",
        link: "https://gsap.com",
      },
      {
        name: "styled-components",
        link: "https://styled-components.com/",
      },
      {
        name: "fontawesome",
        link: "https://fontawesome.com/",
      },
      {
        name: "node-sass",
        link: "https://fontawesome.com/",
      },
    ],
    links: {
      demo: "https://a5757657.github.io/f2e-responsive-web-design/",
      github: "https://github.com/a5757657/f2e-responsive-web-design",
    },
  },
];
/* 帳務 員工資料管理 顧客資料管理 各式報表 出缺勤 薪資計算 預約管理 商品管理等等 */
const work = [
  {
    title: "Meimate 美業POS系統 電腦端",
    info: "非常強大的美業POS系統，高度整合 POS CRM 與 HR 系統，以幫助提升您的業務。",
    img: meimate,
    techs: [
      {
        name: "React",
        link: "https://react.dev/",
      },
      {
        name: "MUI",
        link: "https://mui.com",
      },
      {
        name: "graphql",
        link: "https://graphql.org",
      },
      {
        name: "date-fns",
        link: "https://date-fns.org",
      },
      {
        name: "emotion",
        link: "https://emotion.sh/docs/introduction",
      },
      {
        name: "redux",
        link: "https://redux.js.org",
      },
      {
        name: "recharts",
        link: "https://recharts.org",
      },
    ],
    links: {
      demo: "https://meimate.com/zh-Hant/",
    },
  },
  {
    title: "Meimate 美業POS系統 設計師端",
    info: "設計師可在此平台管理自己的預約，查詢顧客資料，也有各式報表可查閱自己的業績，也有打卡功能並且與電腦端考勤系統高度整合。",
    img: stylist,
    techs: [
      {
        name: "Vue",
        link: "https://react.dev/",
      },
      {
        name: "tailwindcss",
        link: "https://tailwindcss.com",
      },
      {
        name: "axios",
        link: "https://axios-http.com",
      },
      {
        name: "vee-validate",
        link: "https://vee-validate.logaretm.com/",
      },
      {
        name: "vue-sweetalert2",
        link: "https://avil13.github.io/vue-sweetalert2/",
      },
      {
        name: "graphql",
        link: "https://graphql.org",
      },
    ],
    links: {
      demo: "https://meimate.com/zh-Hant/",
    },
  },
  {
    title: "Meimate 美業POS系統 顧客端",
    info: "顧客可在此系統預約自己喜愛的設計師，可查詢自己的消費紀錄，或累積的紅利點數等等。",
    img: member,
    techs: [
      {
        name: "Nuxt",
        link: "https://nuxt.com/",
      },
      {
        name: "tailwindcss",
        link: "https://tailwindcss.com",
      },
      {
        name: "axios",
        link: "https://axios-http.com",
      },
      {
        name: "vee-validate",
        link: "https://vee-validate.logaretm.com/",
      },
      {
        name: "vue-sweetalert2",
        link: "https://avil13.github.io/vue-sweetalert2/",
      },
      {
        name: "graphql",
        link: "https://graphql.org",
      },
    ],
    links: {
      demo: "https://meimate.com/zh-Hant/",
    },
  },
];

export { sideProject, work };
