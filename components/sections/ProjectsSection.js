import Section from '../ui/Section'
import Project from '../ui/Project'
import { icons } from '../icons'
import { track } from '../../lib/analytics'

export default function ProjectsSection() {
  return (
    <Section icon={icons.briefcase} title={<>Personal &nbsp;Projects</>}>
      <Project
        id="xingzhefangche"
        href="https://xingzhefangche.com"
        icon={icons.truck}
        title="Nanjing XingzheRV Official Website - 南京行者房车营地官方网站"
        onClick={() => track('XINGZHEFANGCHE_VIEW')}
      >
        <li>
          Designed and developed a <b>NextJS</b> based web application for
          XingzheRV, a family-owned RV campground in Nanjing, China
        </li>
        <li>
          Built responsive user interface supporting content management and
          email subscriptions
        </li>
        <li>
          Integrated <b>Google Analytics</b> allowing real-time user activity and behavior tracking across the site
        </li>
        <li>More coming soon...</li>
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
