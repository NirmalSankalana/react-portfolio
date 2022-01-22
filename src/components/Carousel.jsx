import React from "react";
import Card from "../components/Card";

import {Container, Row} from 'react-bootstrap';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Adithya Gusain",
                    subtitle: "React 7 days bootcamp project",
                    imgSrc: img1,
                    link: 'https://github.com/NirmalSankalana',
                    selected: false
                },
                {
                    id: 1,
                    title: "Dilusha Madhushan",
                    subtitle: "Docship e-channeling system",
                    imgSrc: img2,
                    link: 'https://github.com/NirmalSankalana',
                    selected: false
                },
                {
                    id: 2,
                    title: "Visaka Nanayakkara",
                    subtitle: "MOOC Website",
                    imgSrc: img3,
                    link: 'https://github.com/NirmalSankalana',
                    selected: false
                }

            ]
        }
    }

    handleCardClick = (id, card) =>{
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        });
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;