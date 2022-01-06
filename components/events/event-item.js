import Link from 'next/link';
import classes from './event-item.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import AddressIcon from '../icons/address-icon';

const EventItem = (props) => {

    const {title, image, date, location, id}= props

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

      const formattedAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`

  return (
    <li className={classes.item}>
      <img src={"/"+image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <span className={classes.icon}><DateIcon/></span> <time className={classes.date}>{humanReadableDate}</time>
          </div>
          <div>
            <span className={classes.icon}><AddressIcon/></span> 
            <address className={classes.address}>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
            <Button link={exploreLink}><span className={classes.icon}><ArrowRightIcon/></span>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
