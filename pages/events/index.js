import React,{Fragment} from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/events-search';

const AllEvents = ({events}) => {
    // const events = getAllEvents();
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

export async function getStaticProps(){
    const allEv = await getAllEvents()
    return{
        props:{
            events:allEv
        },
        revalidate: 60
    }
}

export default AllEvents
