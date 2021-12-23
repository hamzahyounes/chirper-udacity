export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatTweet (tweet, author, authedUser, parentTweet) {
  const { id, likes, replies, text, timestamp } = tweet
  // console.log("The author is: ", author)
  // //const {  avatarURL } = author
  // console.log("The author is: ", author.name)

  // let name = author.name;
  // let url = author.avatarURL
  console.log("The author is: ", author)
  return {
    name: tweet.author,
    id,
    timestamp,
    text,
    avatar: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
    likes: likes.length,
    replies: replies.length,
    hasLiked: likes.includes(authedUser),
    parent: !parentTweet ? null : {
      author: parentTweet.author,
      id: parentTweet.id,
    }
  }
}