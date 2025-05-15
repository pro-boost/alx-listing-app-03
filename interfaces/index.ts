export interface CardProps {
  title: string;
  image: string;
  location: string;
  price: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}