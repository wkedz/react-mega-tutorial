function RenderArray() {
  const data = ['one', 'two', 'three'];
  return (
    <>{data}</>
  )
}

function FormatedArray() {
  // Return <ul><li>one</li><li>two</li><li>three</li></ul>
  const data = ['one', 'two', 'three'];
  return (
    <ul>
      {data.map(element => {
        return <li>{element}</li>
      })}
    </ul>
  )
}

function GetPosts() {
  const posts = [
    {
      id: 1,
      text: 'Hello, world!',
      timestamp: 'a minute ago',
      author: {
        username: 'susan',
      },
    },
    {
      id: 2,
      text: 'Second post',
      timestamp: 'an hour ago',
      author: {
        username: 'john',
      },
    },

  ];
  return posts;
}


function App() {
  const posts = [
    {
      id: 1,
      text: 'Hello, world!',
      timestamp: 'a minute ago',
      author: {
        username: 'susan',
      },
    },
    {
      id: 2,
      text: 'Second post',
      timestamp: 'an hour ago',
      author: {
        username: 'john',
      },
    },
  ];

  return (
    <>
      <h1>Microblog</h1>
      {posts.length === 0 ?
      <p>No posts</p>
      :
      posts.map(post => {
        return (
          <p key={post.id}>
            <b>{post.author.username}</b> &mdash; {post.timestamp}
            <br />
            {post.text}
          </p>
        );
      })}
    </>
  );
}

export default App;
