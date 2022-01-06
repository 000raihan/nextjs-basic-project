import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetails = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (event) {
    console.log(event.title);
  }

  if (!event) {
    <p>No Event found</p>;
  }

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

export default EventDetails;
