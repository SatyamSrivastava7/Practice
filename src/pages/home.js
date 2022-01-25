import HomeData from "../components/pagedata/HomeData";

const DUMMY_DATA = [
    {
        id: 1,
        title: 'Buttermilk Pancakes',
        category: 'Breakfast',
        price: 15.99,
        image: 'https://image.shutterstock.com/image-photo/pancakes-fruits-maple-syrup-260nw-439471525.jpg',
        description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 2,
        title: 'Diner Double',
        category: 'Lunch',
        price: 13.99,
        image: 'https://image.shutterstock.com/image-photo/iconic-diner-double-cheeseburger-stacked-260nw-694423843.jpg',
        description: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: 'Godzilla Milkshake',
        category: 'Shakes',
        price: 6.99,
        image: 'https://d3hkrbfxf7jd3r.cloudfront.net/article/lead_image/6371095/0_DSC_5334-copy-1.jpg',
        description: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: 'Country Delight',
        category: 'Breakfast',
        price: 20.99,
        image: 'https://assets.countrydelight.in/assets/images/dahi.png',
        description: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: 'Egg Attack',
        category: 'Lunch',
        price: 22.99,
        image: 'https://assets3.thrillist.com/v1/image/2670109/828x610/flatten;crop;webp=auto;jpeg_quality=70',
        description: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: 'Oreo Dream',
        category: 'Shakes',
        price: 18.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqbK4xqxirfVAUuhcTnawLoXKmqi58ZZN2LtTsyYZR7s5LaKB0PRDXvx862LeHGE39_s&usqp=CAU',
        description: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: 'Bacon Overflow',
        category: 'Breakfast',
        price: 8.99,
        image: 'https://i.pinimg.com/736x/0b/4a/38/0b4a389b5d655d428287eec9912af9a1--bacon-avocado-bacon-egg.jpg',
        description: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: 'American Classic',
        category: 'Lunch',
        price: 12.99,
        image: 'https://m.media-amazon.com/images/I/715cepeJKAL._SL1500_.jpg',
        description: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: 'Quarantine Buddy',
        category: 'Shakes',
        price: 16.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhzzk4PZ4pFfux85n5r_bBxU3j-TzVLJtpw&usqp=CAU',
        description: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
  ];
  
  function Home() {
    return (
      <section>
        <HomeData menuItems = {DUMMY_DATA}/>
      </section>
    );
  }
  
  export default Home;