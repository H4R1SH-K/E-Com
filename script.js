const products = [
  {
    name: "Wireless Headphones",
    price: 79.99,
    image: "https://www.google.com/imgres?q=wireless%20headphones&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41tp0JPPlmL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FSony-Cancellation-Headphones-Multi-Point-Connection%2Fdp%2FB0BS74M665&docid=UGRWq9UVcwuh0M&tbnid=KZhaCg0ZvbzCNM&vet=12ahUKEwik2tm8j-mNAxXKimMGHVY5H48QM3oECF8QAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwik2tm8j-mNAxXKimMGHVY5H48QM3oECF8QAA"
  },
  {
    name: "Smart Watch",
    price: 129.99,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fin%2Fshop%2Fbuy-watch%2Fapple-watch%2F42mm-gps-jet-black-aluminium-black-sport-band-sm&psig=AOvVaw0n9m4PjaZUlpP__tkdoVA9&ust=1749722857701000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMC6p9SP6Y0DFQAAAAAdAAAAABAE"
  },
  {
    name: "Bluetooth Speaker",
    price: 45.5,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jiomart.com%2Fp%2Felectronics%2Fmarshall-kilburn-2-bluetooth-speaker-with-up-to-20-hours-black-and-brass%2F590798533&psig=AOvVaw23m43Jc8k4WEESRCjlIFjZ&ust=1749722918682000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjj_O-P6Y0DFQAAAAAdAAAAABAK"
  },
  {
    name: "Gaming Mouse",
    price: 25.0,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FAsus-Spatha-Wireless-Gaming-Mouse%2Fdp%2FB01EMP3XDY&psig=AOvVaw03gUIwGNTpxUUaEYAvBJjc&ust=1749722960135000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjq2YaQ6Y0DFQAAAAAdAAAAABAE"
  },
    {
    name: "Mechanical Keyboard",
    price: 69.0,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Fstory%2Fhow-to-shop-for-a-mechanical-keyboard%2F&psig=AOvVaw03g5hJdBXLXGm9uBoP_TPY&ust=1749722999003000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODLs5eQ6Y0DFQAAAAAdAAAAABAE"
  },
  {
    name: "USB-C Hub",
    price: 34.99,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dlink.com%2Fen%2Fproducts%2Fdub-m520-5-in-1-usb-c-hub-with-hdmi_ethernet-and-power-delivery&psig=AOvVaw0R_8ccFP0OuqnD7jhWYzJH&ust=1749723026889000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjR3aWQ6Y0DFQAAAAAdAAAAABAE"
}];

let cartCount = 0;

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const usdToInr = 83;

  products.forEach((product) => {
    const inrPrice = (product.price * usdToInr).toFixed(0);
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${inrPrice}</p>
      <button class="add-btn" onclick="addToCart()">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cartCount").textContent = cartCount;
  const note = document.getElementById("notification");
  note.classList.remove("hidden");
  note.classList.add("show");
  setTimeout(() => {
    note.classList.remove("show");
    note.classList.add("hidden");
  }, 2000);
}

window.onload = renderProducts;
