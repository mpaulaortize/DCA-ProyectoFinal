import { data } from "./data";
import IndexStyle from "./mainfeed.css";
import { dataAudio } from "../../components/audio-Card/dataAudio";
import { dataMain } from "../../components/main-ImgCard/dataMain";
import { dataTweet } from "../../components/tweet-Card/dataTweet";
import MenuCard, {Attribute as MenuCardAttribute,
} from "../../components/menu-Card/menu-Card";
import TweetCard, {
  Attribute as TweetCardAttribute,
} from "../../components/tweet-Card/tweet-Card";
import AudioCard, {
  Attribute as AudioCardAttribute,
} from "../../components/audio-Card/audio-Card";
import PostCard, {
  Attribute as PostCardCardAttribute,
} from "../../components/post-Card/post-Card";
import ImgCard, {
  Attribute as ImgCardAttribute,
} from "../../components/main-ImgCard/main-ImgCard";
import indexstyles from "./index.css";

class MainFeed extends HTMLElement {
  tweets: TweetCard[] = [];
  card: AudioCard[] = [];
  post: ImgCard[] = [];
  dataIndex: number = 0;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    dataTweet.forEach((tweets) => {
      const tweetCard = this.ownerDocument.createElement(
        "tweet-card"
      ) as TweetCard;
      tweetCard.setAttribute(TweetCardAttribute.user, tweets.user);
      tweetCard.setAttribute(TweetCardAttribute.message, tweets.message);
      tweetCard.setAttribute(TweetCardAttribute.img, tweets.img);
      this.tweets.push(tweetCard);
    });

    dataAudio.forEach((card) => {
      const audioCard = this.ownerDocument.createElement(
        "audio-card"
      ) as AudioCard;
      audioCard.setAttribute(AudioCardAttribute.img, card.img);
      this.card.push(audioCard);
    });

    dataMain.forEach((post) => {
      const imgCard = this.ownerDocument.createElement(
        "main-imgcard"
      ) as ImgCard;
      imgCard.setAttribute(ImgCardAttribute.publication, post.publication);
      imgCard.setAttribute(ImgCardAttribute.likes, post.likes);
      imgCard.setAttribute(ImgCardAttribute.user, post.user);
      imgCard.setAttribute(ImgCardAttribute.caption, post.caption);
      this.post.push(imgCard);
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const styleElement = document.createElement("style");
    styleElement.textContent = IndexStyle;
    this.shadowRoot?.appendChild(styleElement);



    const menucard = this.ownerDocument.createElement("menu-card") as MenuCard;
    menucard.setAttribute(MenuCardAttribute.user, "@a.miller");
    this.shadowRoot?.appendChild(menucard);

    const imgfeed = document.createElement("h3");
    imgfeed.textContent = ".ImgFeed"
    imgfeed.classList.add("imgFeed");
    this.shadowRoot?.appendChild(imgfeed);

    const div = document.createElement("div")
    div.classList.add("line");
    this.shadowRoot?.appendChild(div);

    const generalContainer = document.createElement("section");
    generalContainer.classList.add("general");
    this.shadowRoot?.appendChild(generalContainer);

    const postcard = this.ownerDocument.createElement("post-card") as PostCard;
    postcard.classList.add("PostCard");
    postcard.setAttribute(PostCardCardAttribute.user, "@a.miller");
    postcard.setAttribute(PostCardCardAttribute.comment, "Mix&Match");
    postcard.setAttribute( PostCardCardAttribute.img, "https://m.media-amazon.com/images/I/91LYRChMy-L._SX1248_CR0%2C0%2C1248%2C1248_.jpg");
    generalContainer.appendChild(postcard);

   
    const remainingItems = data.length - this.dataIndex;

    
    for (
      let i = this.dataIndex;
      i < this.dataIndex + Math.min(9, remainingItems);
      i++
    ) {
      if (i < this.tweets.length) {
        generalContainer.appendChild(this.tweets[i]);
      }

      if (i < this.card.length) {
        generalContainer.appendChild(this.card[i]);
      }

      if (i < this.card.length) {
        generalContainer.appendChild(this.post[i]);
      }
    }


    this.dataIndex += 9;
  }
}

customElements.define("main-feed", MainFeed);
