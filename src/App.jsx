
import './App.css'
import React, {useState} from 'react';
import UserForm from './userForm/UserForm';

function App() {
  
            const productsData = [
            {
              id: 1,
              image: "/adidas original handball spezial women 2.avif",
              name: "Adidas Original Handball Spezial Women",
              price: 8999
            },
            {
              id: 2,
              image: "/adidas original samba 1.avif",
              name: "Adidas Original Samba",
              price: 7999
            },
            {
              id: 3,
              image: "/HOKA Clifton 10  14.avif",
              name: "HOKA Clifton 10",
              price: 12999
            },
            {
              id: 4,
              image: "/HOKA Rincon 4  13.avif",
              name: "HOKA Rincon 4",
              price: 11999
            },
            {
              id: 5,
              image: "/Jordan Air Jordan 1 Low SE 9.avif",
              name: "Jordan Air Jordan 1 Low SE",
              price: 15999
            },
            {
              id: 6,
              image: "/Jordan Air Jordan Retro 3  10.avif",
              name: "Jordan Air Jordan Retro 3",
              price: 14999
            },
            {
              id: 7,
              image: "/Nike Air Max 90 8.avif",
              name: "Nike Air Max 90",
              price: 13999
            },
            {
              id: 8,
              image: "/Nike Dunk Low Retro Premium 7.avif",
              name: "Nike Dunk Low Retro Premium",
              price: 16999
            },
            {
              id: 9,
              image: "/PUMA Speedcat Full Leather.avif",
              name: "PUMA Speedcat Full Leather",
              price: 10999
            },
            {
              id: 10,
              image: "/PUMA Speedcat men 4.avif",
              name: "PUMA Speedcat Men",
              price: 9999
            },
            {
              id: 11,
              image: "/PUMA Speedcat Go women 6.avif",
              name: "PUMA Speedcat Go Women",
              price: 8999
            },
            {
              id: 12,
              image: "/PUMA Speedcat OG women 3.avif",
              name: "PUMA Speedcat OG Women",
              price: 7999
            },
            {
              id: 13,
              image: "/Salomon XT-6  11.avif",
              name: "Salomon XT-6",
              price: 12999
            },
            {
              id: 14,
              image: "/Salomon XT-6  12.avif",
              name: "Salomon XT-6",
              price: 11999
            }

          ];

              const [cart, setCart]= useState([]);
              const addCart = (product) => {
                setCart((prevCart) => {
                  const existingProduct = prevCart.find((item) => item.id === product.id);
                  if (existingProduct){
                    return prevCart.map((item) =>
                      item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                    );
                  }
                  return [...prevCart, { ...product, quantity: 1 }];
                });
              };

  const substQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const addQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };
  const [isPlaying, setIsPlaying] = useState(false);        
  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0); 
  return (
    <>
      <header>
        <nav>
          <img src="/shoe_logo.avif" alt="Shoe Logo" className="logo" />
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero_section">
        <section className="left_hero">
          
            {isPlaying ? (
              <UserForm
                totalAmount={totalAmount}
                onAmountSuccess={() => setIsPlaying(false)}
              />
            ) : (
              <div className="products_data">
                {productsData.map((product) => (
                  <div className="item_card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <h4>₹{product.price}</h4>
                    <button className="add_to_cart" onClick={() => addCart(product)}>
                    Add Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
        </section>
          
        
        <section className="right_hero">
          <div className="right_hero_cart">
            <div className="cart">
              <h3>Shopping Cart</h3>
              <div className="cart_items">
                {cart.map((item)=> (
                  <div className="cart_item_row" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="cart_item_row_info">
                      <span>{item.name}</span>
                      <span>₹{item.price}</span>
                    </div>
                    <div className="cart_item_row_quantity">
                      <button onClick={() => substQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addQuantity(item.id)}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="t_price">
              <h4>Total Price: ₹{cart.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString()}</h4>
            </div>
          </div>
          <button className="pay_but" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? 'Back to Cart Items' : 'Proceed to Payment'}
          </button>
        </section>
      </section>
    </>
  )

}
export default App
