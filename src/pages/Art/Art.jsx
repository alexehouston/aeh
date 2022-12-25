import Flickity from 'react-flickity-component'
import './Art.css';

const flickityOptions = {
    initialIndex: 2,
    autoPlay: true,
    contain: true
}

export default function Art() {

    return (
        <Flickity
            className={'carousel'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
        >
                <img src="/assets/art/hatterene.jpeg" alt="" />
                <img src="/assets/art/danny-beard.jpeg" alt="" />
                <img src="/assets/art/rita-repulsa.jpeg" alt="" />
                <img src="/assets/art/white-ranger.jpeg" alt="" />
                <img src="/assets/art/power-rangers.jpeg" alt="" />
                <img src="/assets/art/maleficent.jpeg" alt="" />
                <img src="/assets/art/rosalina.jpeg" alt="" />
                <img src="/assets/art/sminty-drop.jpeg" alt="" />
        </Flickity>
    );
}