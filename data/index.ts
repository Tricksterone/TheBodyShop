export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

/* Lägg till era produkter här */
export const products: Product[] = [
  {
    id: "1",
    image: "/images/heart-1791153.png",
    title: "heart",
    description:
      "Embark on a heart-pounding adventure with our top-notch artificial heart! Crafted for precision and performance, this remarkable organ will keep you moving to the rhythm of life.",
    price: 69292,
  },
  {
    id: "2",
    image: "/images/kidney.png",
    title: "kidney",
    description:
      "Seeking a kidney-shaped marvel for transplantation enthusiasts? Look no further! This playful kidney replica is bound to be a conversation starter in your medical curiosities collection.",
    price: 137644,
  },
  {
    id: "3",
    image: "/images/liver.png",
    title: "liver",
    description:
      "Introducing our stunning liver replica, a tribute to the body's extraordinary resilience. Showcase the inner workings of this vital organ with pride, and toast to medical marvels!",
    price: 91773,
  },
  {
    id: "4",
    image: "/images/hand.png",
    title: "hand",
    description:
      "Extend a hand of support, literally! Our meticulously crafted hand replica is an exceptional training tool for surgical workshops and a unique reminder of the artistry of medicine.",
    price: 226,
  },
  {
    id: "5",
    image: "/images/foot.png",
    title: "foot",
    description:
      "Take a step into the extraordinary with our foot replica, an essential addition for surgical education and exploration. Display the intricacies of this remarkable organ with flair.",
    price: 184,
  },
  {
    id: "6",
    image: "/images/eye.png",
    title: "eyes",
    description:
      "Behold the gateway to perception – our captivating eye replica. A magnificent model for ocular studies that will keep you captivated and inspire deep contemplation.",
    price: 888,
  },
  {
    id: "7",
    image: "/images/blood-bag.png",
    title: "blood bag",
    description:
      "Step right up to our captivating collection of whimsical blood bags! While they won't grant immortality or vampiric allure, these enchanting replicas add a touch of mystique to your curious cabinet. Embrace the magic of life's vital fluid without any actual transfusion worries.",
    price: 45,
  },
  {
    id: "8",
    image: "/images/organ.png",
    title: "organ",
    description:
      "Dive into a symphony of delightful confusion with our Pipe Organ masterpiece. While it won't fulfill your organ replacement needs, it's an ode to the grandeur of musical marvels. Revel in the intricate craftsmanship that produces melodies from metal and wood, and let this enchanting instrument be the centerpiece of your melodic daydreams.",
    price: 275308,
  },
];
