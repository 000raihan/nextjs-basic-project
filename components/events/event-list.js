import EventItem from './event-item';
import classes from './event-list.module.css'

const EventList = (props) => {
    const {items} = props

    if(Array.isArray(items)){
        return (
            <ul className={classes.list}>
                {items.map((event)=> <EventItem id={event.id} title={event.title} location={event.location} date={event.date} image={event.image} key={event.id}/>)}
            </ul>
        )
    }

    console.log(items)
    
    return <h3>Item data not found</h3>
  
}

export default EventList
