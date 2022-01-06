import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

const FilteredEvents = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (filterData) {
    const queryYear = filterData[0];
    const queryMonth = filterData[1];

    const yearNum = +queryYear;
    const monthNum = +queryMonth;

    // console.log(typeof(queryYear))

    if (
      isNaN(yearNum) ||
      isNaN(monthNum) ||
      yearNum < 2021 ||
      yearNum > 2030 ||
      monthNum > 12 ||
      monthNum < 1
    ) {
      return <p>You've entered invalid date</p>;
    }

    const filteredEvents = getFilteredEvents({
      year: yearNum,
      month: monthNum,
    });

    if(!filteredEvents || filteredEvents.length == 0){
        return <p>No Event found</p>
    }

    console.log(filteredEvents)

    return (
      <div>
        <EventList items={filteredEvents} />
      </div>
    );
  } else {
    return <p>...No filtered Data found</p>;
  }
};

export default FilteredEvents;
