import {Card, Button} from 'react-bootstrap';
import './index.scss'


const CardComponent = ({
  title, 
  imgSrc,
  imgAlt,
  link}) =>{
  return (
 <Card style={{width: '46%'}} className='card-container'>
    <Card.Img variant='top' src={imgSrc} imgAlt={imgAlt} className='card-image'/>
    <Card.Body>
        <Card.Title className='card-title'>{title}</Card.Title>
        <Button variant='primary' href={link} className='card-btn'>Link</Button>
    </Card.Body>
    </Card>
  );
}

export default CardComponent



