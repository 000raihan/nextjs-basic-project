import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

// console.log("items is :", getFeaturedEvents);

const featuredEvents = getFeaturedEvents()

const HomePage = ()=>{
    return(
        <div><EventList items={featuredEvents} /></div>
    )
}

export default HomePage