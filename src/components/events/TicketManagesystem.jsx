import Image from 'next/image';
// import ticketImage from '/path/to/your/image.jpg'; // আপনার ইমেজের পথ দিন

const TicketManagesystem = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1>Kickstart Your Event Success With Our Event Ticketing System</h1>
        <p>
          Our online ticketing solution is completely free for event organizers. 
          The intuitive box office dashboard makes it easy to launch any type of 
          event with a ticket-purchasing experience designed around marketing to 
          increase your sales and revenue.
        </p>
        <ul>
          <li>Assign and distribute event tickets with ease.</li>
          <li>Provide coupons, ticket expiry, discounts, and do more.</li>
          <li>Custom domain and branded white-labeled event ticketing.</li>
        </ul>
      </div>
      <div style={styles.imageContainer}>
        <Image 
          
          alt="Ticketing system image" 
          layout="responsive" 
          width={500} 
          height={600}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '50px',
  },
  textContainer: {
    width: '50%',
    paddingRight: '20px',
  },
  imageContainer: {
    width: '40%',
  },
};

export default TicketManagesystem;