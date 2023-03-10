import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';

const categories = [
    {
        "id": 1,
        "title": "Hats",
        "imageUrl": "https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg",
        "route": 'shop/hats'
    },
    {
        "id": 2,
        "title": "Jackets",
        "imageUrl": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/down-jackets-2021-lead-1632405194.jpg",
        "route": 'shop/jackets'
    },
    {
        "id": 3,
        "title": "Sneakers",
        "imageUrl": "https://www.freepnglogos.com/uploads/shoes-png/shoes-clipart-clipart-images-clipartwork-15.png",
        "route": 'shop/sneakers'
    },
    {
        "id": 4,
        "title": "Womens",
        "imageUrl": "https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8=",
        "route": 'shop/womens'
    },
    {
        "id": 5,
        "title": "Mens",
        "imageUrl": "https://media.istockphoto.com/id/504742864/photo/stylish-business-clothing-for-businessman.jpg?s=612x612&w=0&k=20&c=AsGrhEMNkmpwqaJPBSACPthMuBsmsDIecRkdFXKSnl0=",
        "route": 'shop/mens'
    }
]

const Directory = () => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    )
};

export default Directory;