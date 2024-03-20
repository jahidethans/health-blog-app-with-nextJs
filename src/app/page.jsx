import Link from "next/link"
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Category from "@/components/category/Category";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/menu";

export default function Home() {
  return <div className={styles.container}>
   <Featured></Featured>
   <Category></Category>
   <div className={styles.content}>
    <CardList></CardList>
    <Menu></Menu>
   </div>
  </div>;
}
