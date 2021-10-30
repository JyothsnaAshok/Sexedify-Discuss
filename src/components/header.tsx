import { Link } from "react-router-dom"
import React, { useState } from "react"
import {
  Modal,
  Form,
  Button,
  Dropdown,
  TextArea,
} from "semantic-ui-react"
import {
  useAddPostMutation,
  AllPostsQuery,
  useCategoriesQuery,
  AllPostsDocument,
} from "./types/operations"
import AuthButton from "./AuthButton"
import { useAuth0 } from "@auth0/auth0-react"



export function AppHeader() {
  
  const [createPost, setCreatePost] = useState(false)
  const [title, setTitle] = useState("")
  const [category, setCategory]: any = useState("")
  const [text, setText]: any = useState("")
  const [tags, setTags]: any = useState("")
  

  
  const {
    // loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    // getIdTokenClaims,
  } = useAuth0();

  const {
    data: categoriesData,
  } = useCategoriesQuery()

  const userOptions = isAuthenticated ? (
    <span>
          <Button
            className="dgraph-btn mr-1"
            onClick={() => setCreatePost(true)}
          >
            Create Post
          </Button>
          <Dropdown>
            <Dropdown.Menu>
              <Dropdown.Item>
            <div onClick={() => logout({ returnTo: window.location.origin })}>Logout</div>
          </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </span>


  ) : (
    <AuthButton />
  )
  

  const categoriesOptions = categoriesData?.queryCategory?.map((category) => {
    return { key: category?.id, text: category?.name, value: category?.id }
  })

   const [addPost] = useAddPostMutation({
    update(cache, { data }) {
      const existing = cache.readQuery<AllPostsQuery>({
        query: AllPostsDocument,
      })
      cache.writeQuery({
        query: AllPostsDocument,
        data: {
          queryPost: [
            ...(data?.addPost?.post ?? []),
            ...(existing?.queryPost ?? []),
          ],
        },
      })
    },
  })


  const submitPost = () => {
    setCreatePost(false)
    const post = {
      text: text,
      title: title,
      tags: tags,
      category: { id: category },
      author: { username: user?.email},
      datePublished: new Date().toISOString(),
      comments: [],
    }
    addPost({ variables: { post: post } })
  }

  
  const showCreatePost = (
    <Modal
      onClose={() => setCreatePost(false)}
      onOpen={() => setCreatePost(true)}
      open={createPost}
    >
      <Modal.Header>Post a Question</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Question</label>
              <input
                placeholder="Type question..."
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Category</label>
              <Dropdown
                placeholder="You must select a category to continue..."
                fluid
                search
                selection
                options={categoriesOptions}
                onChange={(e, data) => setCategory(data.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Tags (optional)</label>
              <input
                placeholder="Enter space separated tags..."
                onChange={(e) => setTags(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Add a description</label>
              <TextArea
                rows="3"
                placholder="Enter your message..."
                onChange={(e, data) => setText(data.value)}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setCreatePost(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition="right"
          icon="checkmark"
          onClick={submitPost}
          positive
        />
      </Modal.Actions>
    </Modal>
  )

  return (
    <>
    {showCreatePost}
    
      <div className="ui clearing segment">
        <h3 className="ui right floated header right">
          <span>{userOptions}</span>
        </h3>
        <h3 className="ui left floated header left">
          <Link to="/">
            <div className="flex">
              <div>
                <p className="header-text">SexEdify</p>
                <p className="t-size">DISCUSS</p>
              </div>
            </div>
          </Link>
        </h3>
      </div>
      
    </>
  )
}