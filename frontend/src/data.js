const data = {
    products: [
        { 
            _id: '1',
            name: 'Kobe Bryant Jersey',
            category: 'NBA Jerseys',
            image: './images/Jerseys/Basketball/Kobe-Jersey.jpg',
            price: 400,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'Kobe Bryant #24, Los Angeles Lakers Jersey'
        },
        {
            _id: '2',
            name: 'Jimmy Butler Jersey',
            category: 'NBA Jerseys',
            image: './images/Jerseys/Basketball/Butler-Jersey.jpg',
            price: 350,
            brand: 'Adidas',
            rating: 3.9,
            numReviews: 3,
            description: 'Jimmy Butler #22, Miami Heat Jersey'
        },
        {
          _id: '3',
            name: 'Stephen Curry Jersey',
            category: 'NBA Jerseys',
            image: './images/Jerseys/Basketball/Curry-Jersey.jpg',
            price: 500,
            brand: 'Nike',
            rating: 4.7,
            numReviews: 15,
            description: 'Stephen Curry #30, Golden State Warriors Jersey'
        },
        {
            _id: '3',
            name: 'Joel Embiid Jersey',
            category: 'NBA Jerseys',
            image: './images/Jerseys/Basketball/Embiid-Jersey.jpg',
            price: 300,
            brand: 'Nike',
            rating: 4.1,
            numReviews: 7,
            description: 'Joel Embiid #21, Philadelphia 76ers Jersey'
        },
        {
            _id: '4',
            name: 'Giannis Antetokounmpo Jersey',
            category: 'NBA Jerseys',
            image: './images/Jerseys/Basketball/Giannis-Jersey.jpg',
            price: 600,
            brand: 'Nike',
            rating: 4.1,
            numReviews: 12,
            description: 'Giannis Antetokounmpo #34, Milwaukee Bucks Jersey'
        },
        {
            _id: '5',
            name: 'Kyrie Irving Jersey',
            category: 'NBA Jerseys',
            image: './images/Jerseys/Basketball/Irving-Jersey.jpg',
            price: 320,
            brand: 'Nike',
            rating: 3.2,
            numReviews: 6,
            description: 'Kyrie Irving #11, Brooklyn Nets Jersey'
        },
        {
            _id: '6',
            name: 'MIchael Jordan Jersey',
            category: 'NBA Jerseys',
            image: './images/Jerseys/Basketball/Jordan-Jersey.jpg',
            price: 700,
            brand: 'Jordan',
            rating: 5,
            numReviews: 11,
            description: 'Micahel Jordan #23, Chicago Bulls Jersey'
        },
        {
            _id: '7',
            name: 'Kawhi Leonard Jersey',
            category: 'NBA Jerseys',
            image: './images/Jerseys/Basketball/Kawhi-Jersey.jpg',
            price: 390,
            brand: 'Nike',
            rating: 4.3,
            numReviews: 9,
            description: 'Kawhi Leonard #2, Los Angeles Clippers Jersey'
        },
        {
            _id: '8',
            name: 'LeBron James Jersey',
            category: 'NBA Jerseys',
            image: './images/Jerseys/Basketball/LeBron-Jersey.jpg',
            price: 500,
            brand: 'Nike',
            rating: 5,
            numReviews: 16,
            description: 'LeBron James #23, Los Angeles Lakers Jersey'
        },
        {
            _id: '9',
            name: 'Damian Lillard Jersey',
            category: 'NBA Jerseys',
            image: './images/Jerseys/Basketball/Lillard-Jersey.jpg',
            price: 290,
            brand: 'Nike',
            rating: 3.7,
            numReviews: 4,
            description: 'Damian Lillard #0, Portland Trailblazers Jersey'
        },
        {
            _id: '10',
            name: 'Karl-Anthony Towns Jersey',
            category: 'NBA Jerseys',
            image: './images/Jerseys/Basketball/Towns-Jersey.jpg',
            price: 340,
            brand: 'Nike',
            rating: 3.2,
            numReviews: 6,
            description: 'Karl-Anthony Towns #32, Minnesota Timberwolves Jersey'
        },
        {
            _id: '11',
            name: 'Russell Westbrook Jersey',
            category: 'NBA Jerseys',
            image: './images/Jerseys/Basketball/Westbrook-Jersey.jpg',
            price: 310,
            brand: 'Nike',
            rating: 4,
            numReviews: 10,
            description: 'Russell Westbrook #4, Washington Wizards Jersey'
        },
        {
            _id: '12',
            name: 'Adama Traore Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Adama-Jersey.jpg',
            price: 300,
            brand: 'Nike',
            rating: 3.1,
            numReviews: 4,
            description: 'Adama Traore #37, Wolverhampton Wanderers Jersey'
        },
        {
            _id: '13',
            name: 'Pierre-Emerick Aubameyang Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Aubameyang-Jersey.jpg',
            price: 360,
            brand: 'Nike',
            rating: 3.7,
            numReviews: 6,
            description: 'Pierre-Emerick Aubameyang #14, Arsenal Jersey'
        },
        {
            _id: '14',
            name: 'Bruno Fernandes Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Bruno-Jersey.jpg',
            price: 480,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 11,
            description: 'Bruno Fernandes #18, Manchester United Jersey'
        },
        {
            _id: '15',
            name: 'Kevin De Bruyne Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/DeBruyne-Jersey.jpg',
            price: 360,
            brand: 'Nike',
            rating: 3.7,
            numReviews: 6,
            description: 'Kevin De Bruyne #17, Manchester City Jersey'
        },
        {
             _id: '16',
            name: 'Erling Haaland Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Haaland-Jersey.jpg',
            price: 600,
            brand: 'Nike',
            rating: 5,
            numReviews: 15,
            description: 'Erling Haaland #9, Borussia Dortmund Jersey'
        },
        {
             _id: '17',
            name: 'Danny Ings Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Ings-Jersey.jpg',
            price: 300,
            brand: 'Nike',
            rating: 3.2,
            numReviews: 8,
            description: 'Danny Ings #9, Southampton Jersey'
        },
        {
             _id: '18',
            name: 'Robert Lewandowski Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Lewandowski-Jersey.jpg',
            price: 550,
            brand: 'Nike',
            rating: 4.7,
            numReviews: 13,
            description: 'Robert Lewandowski #9, Bayern Munich Jersey'
        },
        {
             _id: '19',
            name: 'Lionel Messi Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Messi-Jersey.jpg',
            price: 650,
            brand: 'Nike',
            rating: 5,
            numReviews: 16,
            description: 'Lionel Messi #10, FC Barcelona Jersey'
        },
        {
             _id: '19',
            name: 'Neymar Jr Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Neymar-Jersey.jpg',
            price: 400,
            brand: 'Nike',
            rating: 4.1,
            numReviews: 9,
            description: 'Neymar Jr #10, Paris Saint-Germain Jersey'
        },
        {
             _id: '20',
            name: 'Sergio Ramos Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Ramos-Jersey.jpg',
            price: 390,
            brand: 'Nike',
            rating: 3.8,
            numReviews: 7,
            description: 'Sergio Ramos #4, Real Madrid Jersey'
        },
        {
             _id: '21',
            name: 'Richarlison Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Richarlison-Jersey.jpg',
            price: 320,
            brand: 'Nike',
            rating: 3.1,
            numReviews: 6,
            description: 'Richarlison #7, Everton Jersey'
        },
        {
             _id: '22',
            name: 'Cristiano Ronaldo Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Ronaldo-Jersey.jpg',
            price: 700,
            brand: 'Nike',
            rating: 5,
            numReviews: 15,
            description: 'Cristiano Ronaldo #7, Juventus Jersey'
        },
        {
            _id: '23',
            name: 'Mohamed Salah Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Salah-Jersey.jpg',
            price: 400,
            brand: 'Nike',
            rating: 4.1,
            numReviews: 10,
            description: 'Mohamed Salah #11, Liverpool FC Jersey'
        },
        {
            _id: '23',
            name: 'Son Heung-min Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Son-Jersey.jpg',
            price: 500,
            brand: 'Nike',
            rating: 5,
            numReviews: 12,
            description: 'Son Heung-min #7, Tottenham Hotspur Jersey'
        },
        {
            _id: '24',
            name: 'Jamie Vardy Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Vardy-Jersey.jpg',
            price: 320,
            brand: 'Nike',
            rating: 3.2,
            numReviews: 7,
            description: 'Jamie Vardy #11, Leicester City Jersey'
        },
        {
            _id: '25',
            name: 'Timo Werner Jersey',
            category: 'Soccer Jerseys',
            image: './images/Jerseys/Soccer/Werner-Jersey.jpg',
            price: 300,
            brand: 'Nike',
            rating: 2.9,
            numReviews: 3,
            description: 'Timo Werner #11, Chelsea FC Jersey'
        },
        {
            _id: '26',
            name: 'Tsikolia Seven Watch',
            category: 'Watches',
            image: './images/Watches/Tsikolia-Seven.jpg',
            price: 800,
            rating: 5,
            numReviews: 2,
            description: 'Tsikolia Seven Watch'
        },
        {
            _id: '27',
            name: 'Candino Swiss Watch',
            category: 'Watches',
            image: './images/Watches/Candino-Swiss.jpg',
            price: 400,
            rating: 3.2,
            numReviews: 1,
            description: 'Candino Swiss Watch'
        },
        {
            _id: '28',
            name: 'Candino Swiss Watch',
            category: 'Watches',
            image: './images/Watches/Festina-Prestige.jpg',
            price: 310,
            rating: 3.5,
            numReviews: 3,
            description: 'Festina Prestige Watch'
        },
        {
            _id: '29',
            name: 'Fitness Tracker Watch',
            category: 'Watches',
            image: './images/Watches/Fitness-Tracker-Watch.jpg',
            price: 370,
            rating: 3.1,
            numReviews: 2,
            description: 'Fitness Tracker Watch'
        },
        {
             _id: '30',
            name: 'Quartz Classic Watch',
            category: 'Watches',
            image: './images/Watches/Quartz-Classic.jpg',
            price: 200,
            rating: 2.0,
            numReviews: 0,
            description: 'Quartz Classic Watch'
        },
        {
             _id: '31',
            name: 'Silver Watch',
            category: 'Watches',
            image: './images/Watches/Silver-Watch.jpg',
            price: 300,
            rating: 3,
            numReviews: 1,
            description: 'Silver Watch'
        },
        {
             _id: '32',
            name: 'Smart Watch',
            category: 'Watches',
            image: './images/Watches/Smart-Watch.jpg',
            price: 380,
            rating: 3.4,
            numReviews: 5,
            description: 'Smart Watch'
        },
        {
             _id: '31',
            name: 'Beats By Dre Headphones',
            category: 'Headphones',
            image: './images/Watches/Beats-Headphones.jpg',
            price: 500,
            rating: 4.7,
            numReviews: 8,
            description: 'Beats By Dre Headphones: Black'
        },
        {
             _id: '32',
            name: 'Boat Boom Headphones',
            category: 'Headphones',
            image: './images/Watches/Boat-Boom-Headphones.jpg',
            price: 650,
            rating: 5,
            numReviews: 7,
            description: 'Boat Boom Headphones: Black & Blue'
        },
        {
             _id: '33',
            name: 'Bose SoundLink Headphones',
            category: 'Headphones',
            image: './images/Watches/Bose-SoundLink-Headphones.jpeg',
            price: 400,
            rating: 4.2,
            numReviews: 3,
            description: 'Bose SoundLink Headphones: Black'
        },
        {
             _id: '34',
            name: 'HiFi Headphones',
            category: 'Headphones',
            image: './images/Watches/HiFi-Headphones.jpg',
            price: 300,
            rating: 3.1,
            numReviews: 3,
            description: 'HiFi Headphones: Black & Grey'
        },
        {
             _id: '35',
            name: 'Adidas Headphones',
            category: 'Headphones',
            image: './images/Watches/Adidas-RPTO1-Headphones.jpg',
            price: 310,
            rating: 3,
            numReviews: 2,
            description: 'Adidas Headphones: Black'
        },
        {
             _id: '36',
            name: 'Koss KPH30 Headphones',
            category: 'Headphones',
            image: './images/Watches/Koss-KPH30-Headphones.jpg',
            price: 370,
            rating: 2.9,
            numReviews: 2,
            description: 'Koss KPH30 Headphones: Grey'
        },
        {
             _id: '37',
            name: 'Microsoft Surface Headphones',
            category: 'Headphones',
            image: './images/Watches/Microsoft-Surface-Headphones.jpg',
            price: 420,
            rating: 4.1,
            numReviews: 6,
            description: 'Microsoft Surface Headphones: White'
        },
        {
             _id: '38',
            name: 'Volkano Pulse Headphones',
            category: 'Headphones',
            image: './images/Watches/Volkano-Impulse.jpg',
            price: 300,
            rating: 2.7,
            numReviews: 3,
            description: 'Volkano Pulse Headphones: Black'
        },
        {
             _id: '39',
            name: 'XCD Headphones',
            category: 'Headphones',
            image: './images/Watches/XCD-Headphones.jpg',
            price: 120,
            rating: 2.1,
            numReviews: 1,
            description: 'XCD Headphones: Black'
        },
        {
             _id: '40',
            name: 'Montblanc MB01 Headphones',
            category: 'Headphones',
            image: './images/Watches/Montblanc-MB01.jpg',
            price: 100,
            rating: 2,
            numReviews: 0,
            description: 'Beats By Dre Headphones: Maroon & Gold'
        },
        {
             _id: '41',
            name: 'Baseball Hat',
            category: 'Hats',
            image: './images/Hats/Baseball-Hat.jpg',
            price: 70,
            rating: 2.5,
            numReviews: 0,
            description: 'Baseball Hat: Black'
        },
        {
             _id: '42',
            name: 'Beanie',
            category: 'Hats',
            image: './images/Hats/Beanie-Hat.jpg',
            price: 90,
            rating: 3,
            numReviews: 0,
            description: 'Beanie: Teal'
        },
        {
             _id: '43',
            name: 'Bucket Hat',
            category: 'Hats',
            image: './images/Hats/Bucket-Hat.jpg',
            price: 50,
            rating: 3,
            numReviews: 0,
            description: 'Bucket Hat: Black'
        },
        {
           _id: '44',
            name: 'Cricket Hat',
            category: 'Hats',
            image: './images/Hats/Cricket-Hat.jpg',
            price: 70,
            rating: 3.5,
            numReviews: 0,
            description: 'Cricket Hat: Blue'
        },
        {
            _id: '45',
            name: 'Daiwa Cap',
            category: 'Hats',
            image: './images/Hats/Daiwa-Cap.jpg',
            price: 150,
            rating: 4,
            numReviews: 0,
            description: 'Daiwa Cap: Black'
        },
        {
            _id: '46',
            name: 'Fisherman Hat',
            category: 'Hats',
            image: './images/Hats/Fisherman-Hat.jpeg',
            price: 100,
            rating: 3,
            numReviews: 0,
            description: 'Fisherman Hat: Black'
        },
        {
            _id: '47',
            name: 'Summer Hat',
            category: 'Hats',
            image: './images/Hats/Summer-Hats.jpg',
            price: 80,
            rating: 4.2,
            numReviews: 0,
            description: 'Summer Hat: Brown'
        },
        {
            _id: '48',
            name: 'Sun Hat',
            category: 'Hats',
            image: './images/Hats/Sun-Hat.jpg',
            price: 40,
            rating: 2,
            numReviews: 0,
            description: 'Sun Hat: Red'
        },
        {
            _id: '49',
            name: 'Trilby Hat',
            category: 'Hats',
            image: './images/Hats/Trilby-Hat.jpg',
            price: 150,
            rating: 4,
            numReviews: 0,
            description: 'Trilby Hat: Brown'
        },
        {
            _id: '50',
            name: 'Trucker Hat',
            category: 'Hats',
            image: './images/Hats/Trucker-Hat.jpg',
            price: 90,
            rating: 3,
            numReviews: 0,
            description: 'Trucker Hat: Gold'
        }
    ]
}
