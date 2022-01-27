import { Fragment } from "react";
import { getEventById, getAllEvents } from "../../helpers/api-util";
import { useRouter } from "next/router";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetails = ({selectedEvent}) => {
  // const router = useRouter();

  // const eventId = router.query.eventId;
  const event = selectedEvent;

  // if (event) {
  //   console.log(event.title);
  // }

  // if (!event) {
  //   <p>No Event found</p>;
  // }

  if (event) {
    return (
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </Fragment>
    );
  }else{
     return <h3>No Event found</h3>
  }
};

export async function getStaticProps(context){
  const event = await getEventById(context.params.eventId)
  return{
    props:{
      selectedEvent : event
    }
  }
}

export async function getStaticPaths(){
  const allEvents = await getAllEvents();
  const path = allEvents.map(event=> ({params: {eventId : event.id}}))
  return{
    paths:path,
    fallback:false
  }
}

export default EventDetails;
