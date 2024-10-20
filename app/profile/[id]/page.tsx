import Profile from "@/components/Profile"

const page = async({params}: {params:Params}) => {
  const {id} = params
  const res = await fetch(`/api/users/${id}/posts`, {cache: 'no-store'})
  const {user, posts} = await res.json()

  return (
    <Profile user={user} posts={posts}/>
  )
}

export default page