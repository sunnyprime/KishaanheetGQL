import React from 'react';
import {Card, Typography, Button} from 'antd';
// import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import {addTocart} from '../../redux/cart/cart.action';
const {Text} = Typography;

const {Meta} = Card;

function ProductCard(props) {
  // console.log(props);
  const {add, name, image, price, discount} = props;
  const oldprice = (price*100/(100-discount)).toFixed(0);
  // console.log(offer);
  const item = {name, image, price};


  return (
    <div>
      <Card
        hoverable
        style={{width: 240}}
        cover={<img alt="example" src={image} />}
      >

        <Meta title={name} />
        <p><Text type="danger" delete>Rs: {oldprice}</Text> <Text style={{color: 'blue'}} strong type="secondary">Rs: {price}</Text>
        </p>
        <div>
          <Button className="cartbutton" type="primary" shape="round" onClick={()=>add(item)}>
            <Link to="/cart">
          Add To cart
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTocart: (creds) => dispatch(addTocart(creds)),
//   };
// };


// export default connect(null, mapDispatchToProps)(ProductCard);
export default ProductCard;
