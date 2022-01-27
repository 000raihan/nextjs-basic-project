import { getFeaturedEvents,getAllEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

// console.log("items is :", getFeaturedEvents);

// const featuredEvents = getFeaturedEvents()

const HomePage = (props)=>{
  
    return(
        <div><EventList items={props.events} /></div>
    )
}

export async function getStaticProps(){
    const featuredEvents = await getFeaturedEvents();
    // console.log("featured events : ",featuredEvents)
    return{
        props: {
            events : featuredEvents
        }
    }
}

export default HomePage