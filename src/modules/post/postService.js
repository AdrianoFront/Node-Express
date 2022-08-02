let post = []

export const createPost = (data, user) => {
  const post = {
    createdBy: user.email,
    ...data
  }
  posts.push(post)
  return post
}

export const getPost = (id) => {
  if (id) {
    const posts = posts[id]
    if (!post) throw new Error('post_nao_existe')

    return post
  }
  return posts
}