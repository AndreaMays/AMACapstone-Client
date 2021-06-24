import {Card, Row, Col, Image, Carousel} from 'react-bootstrap'
import "./Home.css"


export const Home = () => (
<>
<article className="musicHome">
    <section className="homeHeader">
        <div className="home">The A.M.A. Student Portal</div>
    </section>
 

    <section>
        <div class="homeOne" >
            <img class="piano_pic" src="https://www.un.org/sites/un2.un.org/files/unesco-piano.jpg" alt="" width="300" height="300" />
    
            <div className="homeOne_practice" >
                <Card style={{ width: '35rem', height: '2.5rem'}}>
                View all of your practice lesson notes on this site in "Lesson Notes"</Card>
                </div>
            </div>

        <div class="homeOne" >
           <img class="piano_pic2" src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" width="300" height="300" />
           
           <div className="homeOne_practice" >
                <Card className="homeCard" style={{ width: '35rem', height: '2.5rem'}}>
                View all of your comps & awards in "Competitions" and "Awards"</Card>
                </div>
        </div>


        {/* <img class="piano_pic2" src="https://images.unsplash.com/photo-1571974599782-87624638275e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="" width="300" height="300" /> */}
        {/* <img class="piano_pic2" src="https://static.wixstatic.com/media/fcce0b3b6f2f4240b2d9de05e9b66ddb.jpg/v1/fill/w_640,h_402,al_c,q_80,usm_0.66_1.00_0.01/fcce0b3b6f2f4240b2d9de05e9b66ddb.webp" alt="" width="300" height="300" /> */}

    </section>
</article>
</>
)
