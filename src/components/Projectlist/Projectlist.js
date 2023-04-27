import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import Snapshot from "../../Assets/Snapshot.png"
import Twitter from '../../Assets/Twitter.png'
import Gymsite from '../../Assets/Gymsite.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Snapshot}
                isBlog={false}
                title="SnapShot_Project"
                description="User Admin Dashboard created with React js,Context api, axios library, javascript, html and css to build this entire application. this project is envolves the search bar and four different buttons which will route to the respective link and there is fetching the image to the related search by using axios and managing the data using context api"
                ghLink="https://github.com/Luvkumar03/SnapShot_Project_4"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Twitter}
                isBlog={false}
                title="Twitter Clone"
                description="This is clone of twitter using
                Reactjs, module CSS, gives the real twitter user
                interaction, used recoil to manage the state,
                twits and post of user, there is login and
                register page for which localstorage is used to
                set and get the details of user."
                ghLink="https://github.com/Luvkumar03/twitter_clone_project-3/tree/master"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Gymsite}
                isBlog={false}
                title="GYM Site Project"
                description="Created a static website for
                GYM , by using React-js, css, java script . from
                which user can get details. routes is responsible
                to navigate the respective path and i-frame and
                embed for you-tube to watch the video."
                ghLink="https://github.com/Luvkumar03/Project-2-gym-site"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist