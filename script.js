var tweets = [
  {
    text:"Doggo ipsum  Vvv boof I am bekom fat doge sub woofer, mlem heckin good boys. very taste wow. Very good spot pupperino heckin good boys such treat tungg, doge dat tungg tho borking doggo you are doin me a concern heckin, waggy wags puggo stop it fren. Pupper super chub you are doing me a frighten borkf long doggo very good spot floofs, heck long bois doing me a frighten vvv very taste wow, bork doge wow very biscit heckin good boys fat boi.",
    likes:50,
    comments:100000,
    retweets:20,
    image:false,
    username:"MuppetMan"
  },
   {
    text:"Doggo ipsum  Vvv boof I am bekom fat doge sub woofer, mlem heckin good boys. very taste wow. Very good spot pupperino heckin good boys such treat tungg, doge dat tungg tho borking doggo you are doin me a concern heckin, waggy wags puggo stop it fren. Pupper super chub you are doing me a frighten borkf long doggo very good spot floofs, heck long bois doing me a frighten vvv very taste wow, bork doge wow very biscit heckin good boys fat boi.",
    likes:50,
    comments:100000,
    retweets:20,
    image:false,
    username:"KermitTheFrog"
  }, 
  {
    text:"Doggo ipsum  Vvv boof I am bekom fat doge sub woofer, mlem heckin good boys. very taste wow. Very good spot pupperino heckin good boys such treat tungg, doge dat tungg tho borking doggo you are doin me a concern heckin, waggy wags puggo stop it fren. Pupper super chub you are doing me a frighten borkf long doggo very good spot floofs, heck long bois doing me a frighten vvv very taste wow, bork doge wow very biscit heckin good boys fat boi.",
    likes:50,
    comments:100000,
    retweets:20,
    image:true,
    username:"Snuffeleluppugus"
  },
   {
    text:"Doggo ipsum  Vvv boof I am bekom fat doge sub woofer, mlem heckin good boys. very taste wow. Very good spot pupperino heckin good boys such treat tungg, doge dat tungg tho borking doggo you are doin me a concern heckin, waggy wags puggo stop it fren. Pupper super chub you are doing me a frighten borkf long doggo very good spot floofs, heck long bois doing me a frighten vvv very taste wow, bork doge wow very biscit heckin good boys fat boi.",
    likes:50,
    comments:100000,
    retweets:20,
    image:true,
    username:"MrsPiggy"
  },
   {
    text:"Doggo ipsum  Vvv boof I am bekom fat doge sub woofer, mlem heckin good boys. very taste wow. Very good spot pupperino heckin good boys such treat tungg, doge dat tungg tho borking doggo you are doin me a concern heckin, waggy wags puggo stop it fren. Pupper super chub you are doing me a frighten borkf long doggo very good spot floofs, heck long bois doing me a frighten vvv very taste wow, bork doge wow very biscit heckin good boys fat boi.",
    likes:50,
    comments:100000,
    retweets:20,
    image:false,
    username:"Rizzo"
  },
]

var tweetEles = [];

function tweet(twt) {
  var that = this;
  this.retweets=twt.retweets;
    this.comments=twt.comments;
    this.likes=twt.likes;
  this.ele = document.createElement("div");
  this.ele.classList.add("tweet");
  this.usernameEle = document.createElement("h1");
  this.textEle = document.createElement("div");
  this.retweetsEle = document.createElement("h3");
  this.commentsEle = document.createElement("h3");
  this.imageEle = document.createElement("div");
  this.likesEle = document.createElement("h3");
  
  this.usernameEle.innerHTML=twt.username;
  this.textEle.innerHTML=twt.text;
  this.retweetsEle.innerHTML="Retweets: "+this.retweets;
    this.likesEle.innerHTML="Likes: "+this.likes;
    this.commentsEle.innerHTML="Comments: "+this.comments;
  
  this.imageEle.innerHTML="<img src='https://media.giphy.com/media/QX6Y13v6klikvXYmrU/giphy.gif'/>"
  
  this.retweetsEle.addEventListener("click", function(){
    that.retweets=that.retweets+1;
    that.retweetsEle.innerHTML="Retweets: "+that.retweets;
  })
  
  this.commentsEle.addEventListener("click", function(){
    that.comments=that.comments+1;
    that.commentsEle.innerHTML="Comments: "+that.comments;
  })
  
  this.likesEle.addEventListener("click", function(){
    that.likes=that.likes+1;
    that.likesEle.innerHTML="Likes: "+that.likes;
    if(that.likes>=100){
      that.ele.style.backgroundColor="red";
      that.ele.style.color="white";
    }
  })

  this.ele.appendChild(this.usernameEle);
  this.ele.appendChild(this.textEle);
  this.ele.appendChild(this.retweetsEle);
  this.ele.appendChild(this.commentsEle);
  if(twt.image){
    this.ele.appendChild(this.imageEle);
  }
  this.ele.appendChild(this.imageEle);
  this.ele.appendChild(this.likesEle);

  document.body.appendChild(this.ele);
}

for (var i = 0; i < tweets.length; i++) {
  tweetEles.push(new tweet(tweets[i]));
}