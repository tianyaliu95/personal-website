import Section from '../ui/Section'
import Project from '../ui/Project'
import { icons } from '../icons'
import { track } from '../../lib/analytics'

export default function ProjectsSection() {
  return (
    <Section icon={icons.briefcase} title={<>Personal &nbsp;Projects</>}>
      <Project
        id="fitness-pilot"
        href="https://fitness-pilot.vercel.app"
        icon={icons.activity}
        title="Fitness Pilot – Carb Cycling Training Assistant 碳循环训练助手"
        onClick={() => track('FITNESS_PILOT_VIEW')}
      >
        <li>
          Built an end-to-end <b>Next.js</b> + <b>TypeScript</b> fitness platform for carb-cycling planning,
          nutrition tracking, and training analytics
        </li>
        <li>
          Integrated <b>Google Gemini API</b> into a context-aware AI coach for plan iteration, diet logging,
          and personalized training / nutrition guidance
        </li>
        <li>
          Designed multi-device state sync with <b>Firebase Auth</b> / <b>Firestore</b>, guest mode, and a
          guided onboarding flow to reduce first-run friction
        </li>
        <li>
          Delivered bilingual <b>i18n</b> (EN / ZH) and an installable mobile-first <b>PWA</b>, plus <b>SEO</b> and analytics
          to boost reach and retention
        </li>
      </Project>

      <Project
        id="teapresso"
        href="https://tea-presso.com"
        icon={icons.coffee}
        title="Teapresso Official Website – 野萃品牌官方网站"
        onClick={() => track('TEAPRESSO_VIEW')}
      >
        <li>
          Led end-to-end design and development of Teapresso’s official digital platform with <b>Next.js</b>, <b>React</b>,{' '}
          <b>TypeScript</b>, and <b>Tailwind CSS</b>, scaling brand presence across UK / NA markets
        </li>
        <li>
          Built conversion-critical commerce flows spanning multi-location discovery, <b>Shopify</b>-powered online
          ordering / cart checkout, click &amp; collect pickup, and franchise lead capture powered by <b>Resend</b>
          {' '}email automation
        </li>
        <li>
          Drove <b>SEO</b> / structured-data optimization and growth instrumentation with <b>Google Analytics</b> and{' '}
          <b>Vercel Analytics</b> to maximize acquisition and conversion performance
        </li>
      </Project>

      <Project
        id="xingzhefangche"
        href="https://xingzhefangche.com"
        icon={icons.truck}
        title="Nanjing XingzheRV Official Website - 南京行者房车营地官方网站"
        onClick={() => track('XINGZHEFANGCHE_VIEW')}
      >
        <li>
          Designed and launched a <b>Next.js</b> marketing site for XingzheRV, a family-owned RV campground
          in Nanjing, modernizing its online booking inquiry and brand storytelling experience
        </li>
        <li>
          Crafted a responsive UI with lightweight content management support and email subscription
          capture to nurture returning campers and seasonal campaigns
        </li>
        <li>
          Wired <b>Google Analytics</b> for live traffic / behavior insights to guide content prioritization
          and on-site UX improvements
        </li>
      </Project>

      <Project
        href="https://github.com/tianyaliu95/OnlineBookstore"
        icon={icons.bookOpen}
        title="E-Commerce Online Bookstore"
      >
        <li>
          Designed and built a <b>MERN (MongoDB, Express, React, Node.js)</b> stack based web application supporting item search, filtering,
          product recommendations, and order tracking
        </li>
        <li>
          Developed an interactive front-end user interface using <b>React</b> and Bootstrap
        </li>
        <li>
          Built <b>RESTful</b> back-end APIs with Express and Node.js and
          utilized MongoDB database to store inventory information, user
          profiles and purchase history
        </li>
        <li>
          Implemented role-based access control (admin/user) allowing admin
          to perform CRUD operations
        </li>
        <li>
          Integrated <b>Braintree</b> API for payment processing and deployed
          server side to <b>DigitalOcean</b> cloud server
        </li>
      </Project>

      <Project
        href="https://github.com/tianyaliu95/VisualRecognitionApp"
        icon={icons.phone}
        title="VizAssistant – Android Optical Character Recognition (OCR) App"
      >
        <li>
          Developed an accessible <b>Android</b> app to assist the blind with
          daily reading tasks by converting images to voice messages through
          Google OCR engine and Android TalkBack
        </li>
        <li>
          Built Google Cloud Vision OCR service and deployed to Google
          Compute Engine Virtual Machine with <b>Docker</b>
        </li>
        <li>
          Implemented image uploading and JSON response parsing with
          multithreading on Android
        </li>
        <li>
          Conducted unit testing using <b>Robolectric</b> and integration
          testing using <b>Espresso</b>
        </li>
      </Project>

      <Project
        href="https://github.com/tianyaliu95/StatsNBA"
        icon={icons.ball}
        title="StatsNBA - NBA Player Statistics Visualization"
      >
        <li>
          Developed a web app using <b>React</b>, <b>D3</b>, and <b>Ant
          Design</b> to visualize over 400 NBA players’ shot data,
          including both player profile view and shot charts
        </li>
        <li>Fetched all players&apos; data from NBA API by stats.nba.com</li>
        <li>
          Integrated shot frequency filters and 2 shot themes (hexbin and
          scatter) to provide more customized options of data visualization
        </li>
        <li>
          Created an autocomplete player search bar providing a suggestion
          list of players with both names and profile pictures
        </li>
      </Project>

      <Project
        href="https://github.com/tianyaliu95"
        icon={icons.chat}
        title="RVers - Online RV Parks Review Platform"
      >
        <li>
          Designed and implemented an RV parks review website with CRUD
          features including browsing all user submitted reviews, rating
          parks, leaving comments, and share users&apos; own RV park experience
          (HTML/CSS/Javascript)
        </li>
        <li>
          Created Java servlets with <b>RESTful</b> APIs to handle HTTP
          requests and responses
        </li>
        <li>
          Implemented relational database schema using <b>MySQL</b> to store
          all users&apos; data
        </li>
        <li>
          Improved user interface by integrating <b>Google Map</b> API to
          display location of each reviewed park
        </li>
      </Project>

      <Project
        href="https://github.com/tianyaliu95"
        icon={icons.game}
        title="Unity Platformer Game"
      >
        <li>
          Designed a 2D platformer game with interactive game interface for
          fighting and item collection
        </li>
        <li>
          Utilized object pooling to minimize resource overhead by
          pre-instantiating all game entities
        </li>
      </Project>
    </Section>
  )
}
