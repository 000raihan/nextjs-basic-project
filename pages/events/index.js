import React,{Fragment} from 'react';
import { useRouter } from 'next/router';
import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/events-search';

const AllEvents = () => {
    const events = getAllEvents();
    const router = useRouter()

    const filterEventSubmit = (year, month)=>{

        const fullPath = `/events/${year}/${month}`
        
        router.push(fullPath)
    }

    return (
        <Fragment>
            <EventSearch onSearch={filterEventSubmit} />
            <EventList items={events} />
        </Fragment>
    )
}

export default AllEvents
