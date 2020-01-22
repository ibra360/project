import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const items = [
  {
    src: 'https://cdn.guidingtech.com/imager/media/assets/191090/Best-HD-Wallpapers-From-the-Marvel-Universe-4_4d470f76dc99e18ad75087b1b8410ea9.jpg?1524142775',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'https://www.wallpaperup.com/uploads/wallpapers/2015/02/01/607492/c4ab047d7e7e5279b29c83980a590b9f-700.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'https://3.bp.blogspot.com/-8K3Lsbt0szU/XE1Cdm_Zm4I/AAAAAAAAIM4/BZ35nHSBEhkLlMSvz7UGKtrdNNZLSu2LwCHMYCw/s1600/titanic-3d-%25E2%259D%25A4-4k-hd-desktop-wallpaper-for-4k-ultra-hd-tv-%25E2%2580%25A2-wide.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel style={{ height: "100vh",
width: "100vw"}} items={items} />;

export default Example;