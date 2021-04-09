import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Kobe',
            email: 'kobe24@gmail.com',
            password: bcrypt.hashSync('12345', 8),
            isdmin: true
        },
        {
            name: 'LeBron',
            email: 'lebron23@gmail.com',
            password: bcrypt.hashSync('12345', 8),
            isAdmin: false
        }
    ],
    products: [
        { 
            name: 'Kobe Bryant Jersey',
            category: 'NBA Jerseys',
            image: '../images/Jerseys/Basketball/Kobe-Jersey.jpg',
            price: 400,
            countInStock: 5,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'Kobe Bryant #24, Los Angeles Lakers Jersey'
        },
        {
            name: 'Jimmy Butler Jersey',
            category: 'NBA Jerseys',
            image: '../images/Jerseys/Basketball/Butler-Jersey.jpg',
            price: 350,
            countInStock: 16,
            brand: 'Adidas',
            rating: 3.9,
            numReviews: 3,
            description: 'Jimmy Butler #22, Miami Heat Jersey'
        },
        {
            name: 'Stephen Curry Jersey',
            category: 'NBA Jerseys',
            image: '../images/Jerseys/Basketball/Curry-Jersey.jpg',
            price: 500,
            countInStock: 14,
            brand: 'Nike',
            rating: 4.7,
            numReviews: 15,
            description: 'Stephen Curry #30, Golden State Warriors Jersey'
        },
        {
            name: 'Joel Embiid Jersey',
            category: 'NBA Jerseys',
            image: '../images/Jerseys/Basketball/Embiid-Jersey.jpg',
            price: 300,
            countInStock: 30,
            brand: 'Nike',
            rating: 4.1,
            numReviews: 7,
            description: 'Joel Embiid #21, Philadelphia 76ers Jersey'
        },
        {
            name: 'Giannis Antetokounmpo Jersey',
            category: 'NBA Jerseys',
            image: '../images/Jerseys/Basketball/Giannis-Jersey.jpg',
            price: 600,
            countInStock: 21,
            brand: 'Nike',
            rating: 4.1,
            numReviews: 12,
            description: 'Giannis Antetokounmpo #34, Milwaukee Bucks Jersey'
        },
        {
            name: 'Kyrie Irving Jersey',
            category: 'NBA Jerseys',
            image: '../images/Jerseys/Basketball/Irving-Jersey.jpg',
            price: 320,
            countInStock: 11,
            brand: 'Nike',
            rating: 3.2,
            numReviews: 6,
            description: 'Kyrie Irving #11, Brooklyn Nets Jersey'
        },
        {
            name: 'MIchael Jordan Jersey',
            category: 'NBA Jerseys',
            image: '../images/Jerseys/Basketball/Jordan-Jersey.jpg',
            price: 700,
            countInStock: 8,
            brand: 'Jordan',
            rating: 5,
            numReviews: 11,
            description: 'Micahel Jordan #23, Chicago Bulls Jersey'
        },
        {
            name: 'Kawhi Leonard Jersey',
            category: 'NBA Jerseys',
            image: '../images/Jerseys/Basketball/Kawhi-Jersey.jpg',
            price: 390,
            countInStock: 9,
            brand: 'Nike',
            rating: 4.3,
            numReviews: 9,
            description: 'Kawhi Leonard #2, Los Angeles Clippers Jersey'
        },
        {
            name: 'LeBron James Jersey',
            category: 'NBA Jerseys',
            image: '../images/Jerseys/Basketball/LeBron-Jersey.jpg',
            price: 500,
            countInStock: 3,
            brand: 'Nike',
            rating: 5,
            numReviews: 16,
            description: 'LeBron James #23, Los Angeles Lakers Jersey'
        },
        {
            name: 'Damian Lillard Jersey',
            category: 'NBA Jerseys',
            image: '../images/Jerseys/Basketball/Lillard-Jersey.jpg',
            price: 290,
            countInStock: 16,
            brand: 'Nike',
            rating: 3.7,
            numReviews: 4,
            description: 'Damian Lillard #0, Portland Trailblazers Jersey'
        },
        {
            name: 'Karl-Anthony Towns Jersey',
            category: 'NBA Jerseys',
            image: '../images/Jerseys/Basketball/Towns-Jersey.jpg',
            price: 340,
            countInStock: 18,
            brand: 'Nike',
            rating: 3.2,
            numReviews: 6,
            description: 'Karl-Anthony Towns #32, Minnesota Timberwolves Jersey'
        },
        {
            name: 'Russell Westbrook Jersey',
            category: 'NBA Jerseys',
            image: '../images/Jerseys/Basketball/Westbrook-Jersey.jpg',
            price: 310,
            countInStock: 9,
            brand: 'Nike',
            rating: 4,
            numReviews: 10,
            description: 'Russell Westbrook #4, Washington Wizards Jersey'
        },
        {
            name: 'Adama Traore Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Adama-Jersey.jpg',
            price: 300,
            countInStock: 14,
            brand: 'Nike',
            rating: 3.1,
            numReviews: 4,
            description: 'Adama Traore #37, Wolverhampton Wanderers Jersey'
        },
        {
            name: 'Pierre-Emerick Aubameyang Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Aubameyang-Jersey.jpg',
            price: 360,
            countInStock: 8,
            brand: 'Nike',
            rating: 3.7,
            numReviews: 6,
            description: 'Pierre-Emerick Aubameyang #14, Arsenal Jersey'
        },
        {
            name: 'Bruno Fernandes Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Bruno-Jersey.jpg',
            price: 480,
            countInStock: 2,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 11,
            description: 'Bruno Fernandes #18, Manchester United Jersey'
        },
        {
            name: 'Kevin De Bruyne Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/DeBruyne-Jersey.jpg',
            price: 360,
            countInStock: 3,
            brand: 'Nike',
            rating: 3.7,
            numReviews: 6,
            description: 'Kevin De Bruyne #17, Manchester City Jersey'
        },
        {
            name: 'Erling Haaland Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Haaland-Jersey.jpg',
            price: 600,
            countInStock: 0,
            brand: 'Nike',
            rating: 5,
            numReviews: 15,
            description: 'Erling Haaland #9, Borussia Dortmund Jersey'
        },
        {
            name: 'Danny Ings Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Ings-Jersey.jpg',
            price: 300,
            countInStock: 6,
            brand: 'Nike',
            rating: 3.2,
            numReviews: 8,
            description: 'Danny Ings #9, Southampton Jersey'
        },
        {
            name: 'Robert Lewandowski Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Lewandowski-Jersey.jpg',
            price: 550,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.7,
            numReviews: 13,
            description: 'Robert Lewandowski #9, Bayern Munich Jersey'
        },
        {
            name: 'Lionel Messi Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Messi-Jersey.jpg',
            price: 650,
            countInStock: 1,
            brand: 'Nike',
            rating: 5,
            numReviews: 16,
            description: 'Lionel Messi #10, FC Barcelona Jersey'
        },
        {
            name: 'Neymar Jr Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Neymar-Jersey.jpg',
            price: 400,
            countInStock: 7,
            brand: 'Nike',
            rating: 4.1,
            numReviews: 9,
            description: 'Neymar Jr #10, Paris Saint-Germain Jersey'
        },
        {
            name: 'Sergio Ramos Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Ramos-Jersey.jpg',
            price: 390,
            countInStock: 56,
            brand: 'Nike',
            rating: 3.8,
            numReviews: 7,
            description: 'Sergio Ramos #4, Real Madrid Jersey'
        },
        {
            name: 'Richarlison Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Richarlison-Jersey.jpg',
            price: 320,
            countInStock: 4,
            brand: 'Nike',
            rating: 3.1,
            numReviews: 6,
            description: 'Richarlison #7, Everton Jersey'
        },
        {
            name: 'Cristiano Ronaldo Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Ronaldo-Jersey.jpg',
            price: 700,
            countInStock: 0,
            brand: 'Nike',
            rating: 5,
            numReviews: 15,
            description: 'Cristiano Ronaldo #7, Juventus Jersey'
        },
        {
            name: 'Mohamed Salah Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Salah-Jersey.jpg',
            price: 400,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.1,
            numReviews: 10,
            description: 'Mohamed Salah #11, Liverpool FC Jersey'
        },
        {
            name: 'Son Heung-min Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Son-Jersey.jpg',
            price: 500,
            countInStock: 7,
            brand: 'Nike',
            rating: 5,
            numReviews: 12,
            description: 'Son Heung-min #7, Tottenham Hotspur Jersey'
        },
        {
            name: 'Jamie Vardy Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Vardy-Jersey.jpg',
            price: 320,
            countInStock: 5,
            brand: 'Nike',
            rating: 3.2,
            numReviews: 7,
            description: 'Jamie Vardy #11, Leicester City Jersey'
        },
        {
            name: 'Timo Werner Jersey',
            category: 'Soccer Jerseys',
            image: '../images/Jerseys/Soccer/Werner-Jersey.jpg',
            price: 300,
            countInStock: 34,
            brand: 'Nike',
            rating: 2.9,
            numReviews: 3,
            description: 'Timo Werner #11, Chelsea FC Jersey'
        },
        {
            name: 'Tsikolia Seven Watch',
            category: 'Watches',
            image: '../images/Watches/Tsikolia-Seven.jpg',
            price: 800,
            countInStock: 3,
            rating: 5,
            numReviews: 2,
            description: 'Tsikolia Seven Watch'
        },
        {
            name: 'Candino Swiss Watch',
            category: 'Watches',
            image: '../images/Watches/Candino-Swiss.jpg',
            price: 400,
            countInStock: 1,
            rating: 3.2,
            numReviews: 1,
            description: 'Candino Swiss Watch'
        },
        {
            name: 'Festina Prestige Watch',
            category: 'Watches',
            image: '../images/Watches/Festina-Prestige.jpg',
            price: 310,
            countInStock: 0,
            rating: 3.5,
            numReviews: 3,
            description: 'Festina Prestige Watch'
        },
        {
            name: 'Quartz Classic Watch',
            category: 'Watches',
            image: '../images/Watches/Quartz-Classic.jpg',
            price: 200,
            countInStock: 8,
            rating: 2.0,
            numReviews: 0,
            description: 'Quartz Classic Watch'
        },
        {
            name: 'Silver Watch',
            category: 'Watches',
            image: '../images/Watches/Silver-Watch.jpg',
            price: 300,
            countInStock: 23,
            rating: 3,
            numReviews: 1,
            description: 'Silver Watch'
        },
        {
            name: 'Smart Watch',
            category: 'Watches',
            image: '../images/Watches/Smart-Watch.jpg',
            price: 380,
            countInStock: 10,
            rating: 3.4,
            numReviews: 5,
            description: 'Smart Watch'
        },
        {
            name: 'Beats By Dre Headphones',
            category: 'Headphones',
            image: '../images/Headphones/Beats-Headphones.jpg',
            price: 500,
            countInStock: 17,
            rating: 4.7,
            numReviews: 8,
            description: 'Beats By Dre Headphones: Black'
        },
        {
            name: 'Boat Boom Headphones',
            category: 'Headphones',
            image: '../images/Headphones/Boat-Boom-Headphones.jpg',
            price: 650,
            countInStock: 0,
            rating: 5,
            numReviews: 7,
            description: 'Boat Boom Headphones: Black & Blue'
        },
        {
            name: 'Bose SoundLink Headphones',
            category: 'Headphones',
            image: '../images/Headphones/Bose-SoundLink-Headphones..jpeg',
            price: 400,
            countInStock: 11,
            rating: 4.2,
            numReviews: 3,
            description: 'Bose SoundLink Headphones: Black'
        },
        {
            name: 'HiFi Headphones',
            category: 'Headphones',
            image: '../images/Headphones/HiFi-Headphones.jpg',
            price: 300,
            countInStock: 17,
            rating: 3.1,
            numReviews: 3,
            description: 'HiFi Headphones: Black & Grey'
        },
        {
            name: 'Koss KPH30 Headphones',
            category: 'Headphones',
            image: '../images/Headphones/Koss-KPH30-Headphones.jpg',
            price: 370,
            countInStock: 100,
            rating: 2.9,
            numReviews: 2,
            description: 'Koss KPH30 Headphones: Grey'
        },
        {
            name: 'Microsoft Surface Headphones',
            category: 'Headphones',
            image: '../images/Headphones/Microsoft-Surface-Headphones.jpg',
            price: 420,
            countInStock: 12,
            rating: 4.1,
            numReviews: 6,
            description: 'Microsoft Surface Headphones: White'
        },
        {
            name: 'Volkano Pulse Headphones',
            category: 'Headphones',
            image: '../images/Headphones/Volkano-Impulse.jpg',
            price: 300,
            countInStock: 2,
            rating: 2.7,
            numReviews: 3,
            description: 'Volkano Pulse Headphones: Black'
        },
        {
            name: 'XCD Headphones',
            category: 'Headphones',
            image: '../images/Headphones/XCD-Headphones.jpg',
            price: 120,
            countInStock: 7,
            rating: 2.1,
            numReviews: 1,
            description: 'XCD Headphones: Black'
        },
        {
            name: 'Baseball Hat',
            category: 'Hats',
            image: '../images/Hats/Baseball-Hat.jpg',
            price: 70,
            countInStock: 3,
            rating: 2.5,
            numReviews: 0,
            description: 'Baseball Hat: Black'
        },
        {
            name: 'Beanie',
            category: 'Hats',
            image: '../images/Hats/Beanie-Hat.jpg',
            price: 90,
            countInStock: 12,
            rating: 3,
            numReviews: 0,
            description: 'Beanie: Teal'
        },
        {
            name: 'Bucket Hat',
            category: 'Hats',
            image: '../images/Hats/Bucket-Hat.jpg',
            price: 50,
            countInStock: 0,
            rating: 3,
            numReviews: 0,
            description: 'Bucket Hat: Black'
        },
        {
            name: 'Cricket Hat',
            category: 'Hats',
            image: '../images/Hats/Cricket-Hat.jpg',
            price: 70,
            countInStock: 1,
            rating: 3.5,
            numReviews: 0,
            description: 'Cricket Hat: Blue'
        },
        {
            name: 'Daiwa Cap',
            category: 'Hats',
            image: '../images/Hats/Daiwa-Cap.jpg',
            price: 150,
            countInStock: 22,
            rating: 4,
            numReviews: 0,
            description: 'Daiwa Cap: Black'
        },
        {
            name: 'Fisherman Hat',
            category: 'Hats',
            image: '../images/Hats/Fisherman-Hat.jpeg',
            price: 100,
            countInStock: 3,
            rating: 3,
            numReviews: 0,
            description: 'Fisherman Hat: Black'
        },
        {
            name: 'Summer Hat',
            category: 'Hats',
            image: '../images/Hats/Summer-Hats.jpg',
            price: 80,
            countInStock: 8,
            rating: 4.2,
            numReviews: 0,
            description: 'Summer Hat: Brown'
        },
        {
            name: 'Sun Hat',
            category: 'Hats',
            image: '../images/Hats/Sun-Hats.jpg',
            price: 40,
            countInStock: 7,
            rating: 2,
            numReviews: 0,
            description: 'Sun Hat: Red'
        },
        {
            name: 'Trilby Hat',
            category: 'Hats',
            image: '../images/Hats/Trilby-Hat.jpg',
            price: 150,
            countInStock: 11,
            rating: 4,
            numReviews: 0,
            description: 'Trilby Hat: Brown'
        },
        {
            name: 'Trucker Hat',
            category: 'Hats',
            image: '../images/Hats/Trucker-Hat.jpg',
            price: 90, 
            countInStock: 1,
            rating: 3,
            numReviews: 0,
            description: 'Trucker Hat: Gold'
        },
        {
            name: 'Asteri Glasses',
            category: 'Glasses',
            image: '../images/Glasses/Asteri-Glasses.jpg',
            price: 290,
            countInStock: 17,
            rating: 3,
            numReviews: 0,
            description: 'Asteri Glasses: Black'
        },
        {
            name: 'Camo Glasses',
            category: 'Glasses',
            image: '../images/Glasses/Camo-Glasses.jpg',
            price: 150,
            countInStock: 15,
            rating: 4,
            numReviews: 0,
            description: 'Camo Glasses'
        },
        {
            name: 'Dior Glasses',
            category: 'Glasses',
            image: '../images/Glasses/Dior-Glasses.jpg',
            price: 400,
            countInStock: 13,
            rating: 5,
            numReviews: 0,
            description: 'Dior Glasses: Black & Gold'
        },
        {
            name: 'Paige Glasses',
            category: 'Glasses',
            image: '../images/Glasses/Paige-Glasses.jpg',
            price: 300,
            countInStock: 17,
            rating: 4,
            numReviews: 0,
            description: 'Paige Glasses: Blue'
        },
        {
            name: 'Safety Glasses',
            category: 'Glasses',
            image: '../images/Glasses/Safety-Glasses.jpg',
            price: 100,
            countInStock: 16,
            rating: 2,
            numReviews: 0,
            description: 'Safety Glasses: Black & Gold'
        },
        {
            name: 'Salvatore Glasses',
            category: 'Glasses',
            image: '../images/Glasses/Salvatore-Glasses.jpg',
            price: 400,
            countInStock: 19,
            rating: 4,
            numReviews: 0,
            description: 'Salvatore Glasses: Black'
        },
        {
            name: 'Blue Hoodie',
            category: 'Hoodies',
            image: '../images/Hoodies/Normal/Blue-Hoodie.jpg',
            price: 500,
            countInStock: 21,
            rating: 5,
            numReviews: 2,
            description: 'Hoodie: Blue'
        },
        {
            name: 'Grey Hoodie',
            category: 'Hoodies',
            image: '../images/Hoodies/Normal/Grey-Hoodie.jpg',
            price: 300,
            countInStock: 100,
            rating: 3,
            numReviews: 1,
            description: 'Hoodie: Grey'
        },
        {
            name: 'Orange Hoodie',
            category: 'Hoodies',
            image: '../images/Hoodies/Normal/Orange-Hoodie.jpg',
            price: 450,
            countInStock: 76,
            rating: 4,
            numReviews: 2,
            description: 'Hoodie: Orange'
        },
        {
            name: 'Pink Hoodie',
            category: 'Hoodies',
            image: '../images/Hoodies/Normal/Pink-Hoodie.jpg',
            price: 400,
            countInStock: 55,
            rating: 4,
            numReviews: 2,
            description: 'Hoodie: Pink'
        },
        {
            name: 'Red Hoodie',
            category: 'Hoodies',
            image: '../images/Hoodies/Normal/Red-Hoodie.jpg',
            price: 250,
            countInStock: 65,
            rating: 3,
            numReviews: 0,
            description: 'Hoodie: Red'
        },
        {
            name: 'Colorful Hoodie',
            category: 'Hoodies',
            image: '../images/Hoodies/Normal/Paint-Hoodies.jpg',
            price: 600,
            countInStock: 5,
            rating: 5,
            numReviews: 4,
            description: 'Hoodie: Colorful'
        },
        {
            name: 'Champion Hoodie',
            category: 'Hoodies',
            image: '../images/Hoodies/Normal/Champion-Hoodie.jpg',
            price: 800,
            countInStock: 3,
            rating: 5,
            numReviews: 1,
            description: 'Hoodie: Champion'
        },
        {
            name: 'Puma Arnold',
            category: 'Shoes',
            image: '../images/Puma/Puma-Arnold.jpg',
            price: 400,
            countInStock: 2,
            rating: 3,
            numReviews: 0,
            description: 'Puma Arnold'
        },
        {
            name: 'Puma Ferrari',
            category: 'Shoes',
            image: '../images/Puma/Puma-Ferrari.jpg',
            price: 900,
            countInStock: 0,
            rating: 5,
            numReviews: 2,
            description: 'Puma Ferrari'
        },
        {
            name: 'Puma Motorsport',
            category: 'Shoes',
            image: '../images/Puma/Puma-Motorsport.jpg',
            price: 500,
            countInStock: 13,
            rating: 4,
            numReviews: 2,
            description: 'Puma Motorsport'
        },
        {
            name: 'Puma Optic',
            category: 'Shoes',
            image: '../images/Puma/Puma-Optic.jpg',
            price: 350,
            countInStock: 6,
            rating: 4,
            numReviews: 2,
            description: 'Puma Optic'
        },
        {
            name: 'Puma RSX',
            category: 'Shoes',
            image: '../images/Puma/Puma-RSX.jpg',
            price: 550,
            countInStock: 8,
            rating: 4,
            numReviews: 2,
            description: 'Puma RSX'
        },
        {
            name: 'Puma Viz',
            category: 'Shoes',
            image: '../images/Puma/Puma-Viz.jpg',
            price: 600,
            countInStock: 0,
            rating: 5,
            numReviews: 0,
            description: 'Puma Viz'
        },
        {
            name: 'Puma Shuffle',
            category: 'Shoes',
            image: '../images/Puma/Puma-Shuffle.jpg',
            price: 500,
            countInStock: 6,
            rating: 4.5,
            numReviews: 2,
            description: 'Puma Shuffle'
        }
    ]
}

export default data;
