import {Card, Row, Col, Image, Container} from 'react-bootstrap'
import "./Home.css"


export const Home = () => (
<>
<article className="musicHome">
    <header className="homeHeader">
        <h2 className="home">The A.M.A. Student Portal</h2>
        <div className="piano_pic_header">
            <img class="piano_pic" src="https://www.parentingscience.com/images/Music-intelligence-piano-girl-teacher-by-greenleaf-123-500x-min.jpg" alt=""/>
        </div>
    </header>
 <br></br>

    <section>
        <div className ="homeCards">
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Practice</Card.Title>
    <Card.Text>
        No more printing lesson notes. Head over to the "Lesson Note" tab to now view your weekly assignments
    </Card.Text>
    {/* <Button variant="primary">Notes</Button> */}
  </Card.Body>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80/171x180" />
</Card>
<br></br>
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Awards</Card.Title>
    <Card.Text>
        Keep track of all the awards and honors you've earned in piano
    </Card.Text>
    {/* <Button variant="primary">Notes</Button> */}
  </Card.Body>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1514820720301-4c4790309f46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
</Card>
<br></br>
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Competitions</Card.Title>
    <Card.Text>
        Now you can keep track of all your competitions and scores throughout your musical journey.
    </Card.Text>
    {/* <Button variant="primary">Notes</Button> */}
  </Card.Body>
  <Card.Img variant="top" src="https://superkidz.com/wp-content/uploads/2015/11/busy4.jpg" />
</Card>
<br></br>

</div>



     
     

    </section>
</article>
</>
)
